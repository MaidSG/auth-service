package io.github.maidsg.config.interceptor;

import io.quarkus.logging.Log;
import io.smallrye.config.ConfigSourceInterceptor;
import io.smallrye.config.ConfigSourceInterceptorContext;
import io.smallrye.config.ConfigValue;
import io.smallrye.config.Priorities;
import jakarta.annotation.Priority;

import javax.crypto.BadPaddingException;
import javax.crypto.Cipher;
import javax.crypto.IllegalBlockSizeException;
import javax.crypto.NoSuchPaddingException;
import javax.crypto.spec.GCMParameterSpec;
import javax.crypto.spec.IvParameterSpec;
import javax.crypto.spec.SecretKeySpec;
import java.nio.charset.StandardCharsets;
import java.security.InvalidAlgorithmParameterException;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;
import java.security.SecureRandom;
import java.util.Base64;

/*******************************************************************
 *
 * @author wy
 */
@Priority(value = Priorities.PLATFORM)
public class EncryptConfigInterceptor implements ConfigSourceInterceptor {

    private static final String CONFIG_ENCRYPT_KEY = "config.encrypt.aeskey";
    private static final int AES_KEY_LENGTH = 32;
    /**
     * 需要加密值的前缀标记
     */
    private static final String ENCRYPT_PREFIX_NAME = "Encrypt=>";
    /**
     * AES加密模式
     */
    private static final String AES_MODE = "AES/CBC/PKCS5Padding";

    /**
     * AES的iv向量值
     */
    private static final String AES_IV = "A1E2C3D4E5F6G7H8";

    @Override
    public ConfigValue getValue(ConfigSourceInterceptorContext context, String name) {
        ConfigValue config = context.proceed(name);
        if (config != null && config.getValue().startsWith(ENCRYPT_PREFIX_NAME)) {
            String encryptValue = config.getValue().replace(ENCRYPT_PREFIX_NAME, "");
            String aesKey = null;
            try {
                aesKey = context.proceed(CONFIG_ENCRYPT_KEY).getValue();
            } catch (Exception e) {
                throw new RuntimeException("获取配置[%s]失败，请检查配置是否存在!".formatted(CONFIG_ENCRYPT_KEY));
            }
            String value = AesEncyptUtil.decrypt(encryptValue, aesKey);
            return config.withValue(value);
        }
        return config;
    }

    public static void main(String[] args) {
        System.out.println("加密后的配置："+ AesEncyptUtil.encrypt("", ""));
        System.out.println("解密后的配置："+ AesEncyptUtil.decrypt("", ""));
    }

    static class AesEncyptUtil{
        public static Cipher getCipher(int mode, String key) {
            if (key == null || key.length() != AES_KEY_LENGTH) {
                throw new RuntimeException("config.encrypt.key不能为空，且长度为16位");
            }
            SecretKeySpec skeySpec = new SecretKeySpec(key.getBytes(), "AES");
            //使用CBC模式，需要一个向量iv，可增加加密算法的强度
            IvParameterSpec iv = new IvParameterSpec(AES_IV.getBytes());
            Cipher cipher = null;
            try {
                cipher = Cipher.getInstance(AES_MODE);
                cipher.init(mode, skeySpec, iv);
            } catch (InvalidKeyException | InvalidAlgorithmParameterException | NoSuchPaddingException | NoSuchAlgorithmException e) {
                e.printStackTrace();
//                Log.error("#自定义配置加密#获取Cipher实例失败", e);
            }
            return cipher;
        }

        /**
         * AES加密函数
         * @param plaintext 被加密的字符串
         * @param key       AES key
         * @return 加密后的值
         */
        public static String encrypt(final Object plaintext, String key) {
            if (null == plaintext) {
                return null;
            }
            byte[] encrypted = new byte[0];
            try {
                Cipher encryptCipher = getCipher(Cipher.ENCRYPT_MODE, key);
                encrypted = encryptCipher.doFinal(String.valueOf(plaintext).getBytes(StandardCharsets.UTF_8));
            } catch (IllegalBlockSizeException | BadPaddingException e) {
                e.printStackTrace();
//                Log.error("#自定义配置加密#加密失败", e);
            }
            //此处使用BASE64做转码。
            return Base64.getEncoder().encodeToString(encrypted);
        }

        /**
         * AES 解密函数
         *
         * @param ciphertext 被解密的字符串
         * @param key        AES key
         * @return 解密后的值
         */
        public static String decrypt(final String ciphertext, String key) {
            if (null == ciphertext) {
                return null;
            }
            try {
                Cipher decryptCipher = getCipher(Cipher.DECRYPT_MODE, key);
                //先用base64解密
                byte[] encrypted1 = Base64.getDecoder().decode(ciphertext);
                byte[] original = decryptCipher.doFinal(encrypted1);
                return new String(original, StandardCharsets.UTF_8);
            } catch (Exception ex) {
                ex.printStackTrace();
//                Log.error("#自定义配置加密#解密失败", ex);
                return null;
            }
        }
    }




}
