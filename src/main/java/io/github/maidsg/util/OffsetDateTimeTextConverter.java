package io.github.maidsg.util;

import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;

import java.time.OffsetDateTime;

/*******************************************************************
 *
 * @author wy
 */
@Converter(autoApply = false)
public class OffsetDateTimeTextConverter implements AttributeConverter<OffsetDateTime, String> {
    public String convertToDatabaseColumn(OffsetDateTime attribute) { return attribute == null ? null : attribute.toString(); }
    public OffsetDateTime convertToEntityAttribute(String dbData) { return dbData == null ? null : OffsetDateTime.parse(dbData); }
}

