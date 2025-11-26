package io.github.maidsg.service.business;

import io.github.maidsg.api.okx.OkxPublicClient;
import io.github.maidsg.util.IsoDateUtil;
import jakarta.enterprise.context.ApplicationScoped;
import okhttp3.*;
import org.eclipse.microprofile.config.inject.ConfigProperty;
import org.eclipse.microprofile.rest.client.inject.RestClient;

import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;
import java.io.IOException;
import java.net.http.HttpClient;
import java.nio.charset.StandardCharsets;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;
import java.time.Instant;
import java.util.Base64;
import java.util.HashMap;
import java.util.Map;

/*******************************************************************
 *
 * @author wy
 */
@ApplicationScoped
public class OkxSignatureService {

    @ConfigProperty(name = "okx.api.key")
    String apiKey;

    @ConfigProperty(name = "okx.api.secret")
    String apiSecret;

    @ConfigProperty(name = "okx.api.passphrase")
    String passphrase;

    public String getApiKey() {
        return apiKey;
    }

    public String getApiSecret() {
        return apiSecret;
    }

    public String getPassphrase() {
        return passphrase;
    }

    /**
     * 构建OKX请求头
     * @param method
     * @param requestPath
     * @param body
     * @return
     */
    public Map<String, String> buildHeaders(String method, String requestPath, String body) {
//        String timestamp = okxPublicClient.getServerTime().getFirst().getTs();
        // ISO格式 2020-12-08T09:08:57.715Z
        String timestamp = IsoDateUtil.getIsoWithMillisPrecision();
        String prehash = timestamp + method.toUpperCase() + requestPath + (body == null ? "" : body);
        String sign = generateSignature(apiSecret, prehash);

        Map<String, String> headers = new HashMap<>();
        headers.put("OK-ACCESS-KEY", apiKey);
        headers.put("OK-ACCESS-SIGN", sign);
        headers.put("OK-ACCESS-TIMESTAMP", timestamp);
        headers.put("OK-ACCESS-PASSPHRASE", passphrase);
        return headers;
    }



    /**
     * 构建WebSocket签名
     * @param timestamp
     * @param apiSecret
     * @return
     */
    public String buildWebSocketSig(String timestamp,String apiSecret) {
        String prehash = timestamp + "GET" + "/users/self/verify";
        return generateSignature(apiSecret, prehash);
    }


    private static final String SIGNATURE_VALUE = "HmacSHA256";


    /**
     * 生成签名
     * @param secretKey
     * @param payload
     * @return
     */
    public String generateSignature(String secretKey, String payload) {
        Mac hmacSha256;
        try {
            hmacSha256 = Mac.getInstance(SIGNATURE_VALUE);
            SecretKeySpec secKey = new SecretKeySpec(secretKey.getBytes(StandardCharsets.UTF_8),
                    SIGNATURE_VALUE);
            hmacSha256.init(secKey);
        } catch (NoSuchAlgorithmException e) {
            throw new RuntimeException("[Signature] No such algorithm: " + e.getMessage());
        } catch (InvalidKeyException e) {
            throw new RuntimeException("[Signature] Invalid key: " + e.getMessage());
        }
        byte[] hash = hmacSha256.doFinal(payload.getBytes(StandardCharsets.UTF_8));
        String actualSign = Base64.getEncoder().encodeToString(hash);
        return actualSign;
    }


    public static void main(String[] args) {
        OkHttpClient client = new OkHttpClient();
        String timestamp = IsoDateUtil.getIsoWithMillisPrecision();
        String method = "GET";
        String path = "/api/v5/account/balance";
        String requestBody = "{\"name\":\"John\", \"age\":30}";
        requestBody = "";
        String payload = timestamp + method + path + requestBody;
        MediaType mediaType = MediaType.parse("application/json");
        RequestBody body = RequestBody.create(mediaType, requestBody);
        String sign = new OkxSignatureService().generateSignature("", payload);
        path = "https://www.okx.com" + path;
        Request request = new Request.Builder().url(path)
                .addHeader("OK-ACCESS-KEY", "")
                .addHeader("OK-ACCESS-SIGN", sign)
                .addHeader("OK-ACCESS-TIMESTAMP", timestamp)
                .addHeader("OK-ACCESS-PASSPHRASE", "")
                .addHeader("Content-Type", "application/json").build();
        try {
            // 发送post请求
            Response resp = client.newCall(request).execute();
            String string = resp.body().string();
            System.out.println(string);
        } catch (IOException e) {

        }


    }


}
