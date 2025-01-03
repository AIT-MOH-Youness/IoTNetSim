package com.iotnetworksimulator.service;

import com.iotnetworksimulator.model.User;
import com.iotnetworksimulator.model.VerificationToken;
import com.iotnetworksimulator.repository.VerificationTokenRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.UUID;

@Service
public class TokenService {
    @Autowired
    private VerificationTokenRepository verificationTokenRepository;
    public String generateVerificationToken(User user) {
        String token = UUID.randomUUID().toString();
        VerificationToken verificationToken = new VerificationToken();
        verificationToken.setToken(token);
        verificationToken.setUser(user);
        verificationToken.setExpiryDate(LocalDateTime.now().plusHours(24));
        // Save token in the database
        verificationTokenRepository.save(verificationToken);
        return token;
    }
}
