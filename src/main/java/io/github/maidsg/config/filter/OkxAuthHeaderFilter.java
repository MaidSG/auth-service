package io.github.maidsg.config.filter;

import io.github.maidsg.service.business.OkxSignatureService;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;
import jakarta.ws.rs.client.ClientRequestContext;
import jakarta.ws.rs.client.ClientRequestFilter;
import jakarta.ws.rs.ext.Provider;

import java.io.IOException;
import java.net.URI;
import java.util.Map;

/*******************************************************************
 *
 * @author wy
 */
//@Provider
@ApplicationScoped
public class OkxAuthHeaderFilter implements ClientRequestFilter {

    @Inject
    OkxSignatureService signatureService;

    @Override
    public void filter(ClientRequestContext requestContext) throws IOException {
        // 构造用于签名的 path（保留 query）
        URI uri = requestContext.getUri();
        String requestPath = uri.getRawPath() + (uri.getRawQuery() == null ? "" : "?" + uri.getRawQuery());
        String method = requestContext.getMethod();
        String body = null;
        if (requestContext.getEntity() != null) {
            // 若需要，可将实体转换为字符串以参与签名
            body = requestContext.getEntity().toString();
        }

        Map<String, String> headers = signatureService.buildHeaders(method, requestPath, body);
        headers.forEach((k, v) -> requestContext.getHeaders().putSingle(k, v));
    }

}
