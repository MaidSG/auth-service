package io.github.maidsg.model.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.Instant;

/*******************************************************************
 *
 * @author wy
 */
@Entity
@Table(name = "okx_instrument")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class OkxInstrumentEntity {

    @Id
    @Column(name = "inst_id", nullable = false, length = 128)
    private String instId;

    @Column(name = "payload", columnDefinition = "TEXT")
    private String payload;

    @Column(name = "updated_at", columnDefinition = "DATETIME")
    private Instant updatedAt;

}
