package com.iotnetworksimulator.dto;

import lombok.Data;
import lombok.ToString;

import java.util.List;


@Data
@ToString
public class NetworkRequestDTO {

    private List<NodeDTO> nodes;
    private List<EdgeDTO> edges;
    private String protocol;



}
