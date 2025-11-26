package io.github.maidsg.api.okx;

import io.github.maidsg.config.filter.OkxAuthHeaderFilter;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import org.eclipse.microprofile.rest.client.annotation.RegisterProvider;
import org.eclipse.microprofile.rest.client.inject.RegisterRestClient;

/*******************************************************************
 *
 * @author wy
 */
@RegisterRestClient(baseUri = "https://www.okx.com/api/v5/account")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
@RegisterProvider(OkxAuthHeaderFilter.class)
public interface OkxAccountClient {

    @GET
    @Path("/balance")
    String getAccountBalance(@QueryParam("ccy") String ccy);


}
