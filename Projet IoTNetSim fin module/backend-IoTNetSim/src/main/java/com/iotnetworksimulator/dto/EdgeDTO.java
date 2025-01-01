package com.iotnetworksimulator.dto;

import lombok.Data;
import lombok.ToString;

@Data
@ToString
public class EdgeDTO {
    private String id;
    private String source;
    private String target;
    private String type;
    private double distance;

}

