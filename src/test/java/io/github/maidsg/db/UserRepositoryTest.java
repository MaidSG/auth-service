package io.github.maidsg.db;

import io.github.maidsg.model.entity.User;
import io.quarkus.test.TestTransaction;
import io.quarkus.test.junit.QuarkusTest;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

/*******************************************************************
 *
 * @author wy
 */
@QuarkusTest
public class UserRepositoryTest {

    @Test
    @TestTransaction
    public void testPersistUser() {
        User user = new User();
        user.setName("Cornelia");
        user.setEmail("cornelia@example.com");
        user.persist();
        assertEquals(3, User.count());
    }
}
