package com.iotnetworksimulator.dto;

import lombok.Data;
import lombok.ToString;

@Data
@ToString
public class NodeDTO {
    private String id;
    private String type;
    private Position position;
    private DataSe data;

    @lombok.Data
    public static class Position {
        private double x;
        private double y;

    }
    @lombok.Data
    public static class DataSe {
        private String label;
        private String deviceType;
        private String idDevice;

    }
}
