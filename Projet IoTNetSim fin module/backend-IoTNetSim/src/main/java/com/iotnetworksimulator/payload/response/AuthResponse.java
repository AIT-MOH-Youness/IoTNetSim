package com.iotnetworksimulator.payload.response;

import com.iotnetworksimulator.model.User;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class AuthResponse {
    private String token;
    private User user;
}