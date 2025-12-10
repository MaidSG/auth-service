package io.github.maidsg.api.signal;

import io.github.maidsg.config.signal.VolumeProfileConfig;
import io.github.maidsg.service.signal.VolumeProfileService;
import jakarta.inject.Inject;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import org.jboss.logging.Logger;

import java.time.Duration;
import java.util.List;

@Path("/volume-profile")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class VolumeProfileResource {

    private static final Logger LOG = Logger.getLogger(VolumeProfileResource.class);

    @Inject
    VolumeProfileService volumeProfileService;

    @Inject
    VolumeProfileConfig config;

    @POST
    public Response run(VolumeProfileRequest request) {
        String instId = request != null && request.instId != null ? request.instId : null;
        Duration lookback = request != null && request.lookbackMinutes != null
                ? Duration.ofMinutes(request.lookbackMinutes)
                : config.defaultLookback();
        if (instId == null || instId.isBlank()) {
            LOG.warn("POST /volume-profile: instId 缺失，尝试使用默认列表");
            List<String> instIds = config.instIds();
            if (instIds == null || instIds.isEmpty()) {
                return Response.status(Response.Status.BAD_REQUEST)
                        .entity(new ApiResponse("instId 未指定且 profile.inst-ids 为空"))
                        .build();
            }
            instIds.forEach(id -> runSingle(id, lookback));
            return Response.ok(new ApiResponse("已触发" + instIds.size() + "个 instId"))
                    .build();
        }
        runSingle(instId, lookback);
        return Response.ok(new ApiResponse("已触发 " + instId))
                .build();
    }

    private void runSingle(String instId, Duration lookback) {
        try {
            volumeProfileService.analyze(instId, lookback);
        } catch (Exception e) {
            LOG.errorf(e, "%s：VolumeProfileResource 执行失败", instId);
            throw new WebApplicationException("执行失败：" + instId, e, Response.Status.INTERNAL_SERVER_ERROR);
        }
    }

    public static class VolumeProfileRequest {
        public String instId;
        public Long lookbackMinutes;
    }

    public static class ApiResponse {
        public String message;

        public ApiResponse(String message) {
            this.message = message;
        }
    }
}

