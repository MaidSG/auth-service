package io.github.maidsg.api.okx.model.client;

import lombok.Data;

import javax.sound.midi.Instrument;
import java.util.List;

/*******************************************************************
 *
 * @author wy
 */
@Data
public class OkxPublicResp<T> {

    private String code;
    private String msg;
    private List<T> data;



    public T getFirst() {
        if (data != null && data.size() > 0) {
            return data.get(0);
        }
        return null;
    }



}
