package com.iotnetworksimulator.service;

import com.iotnetworksimulator.model.User;
import com.iotnetworksimulator.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RegistrationService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private TokenService tokenService;

    @Autowired
    private EmailService emailService;

    public void registerUser(User user) {
        userRepository.save(user);
        String token = tokenService.generateVerificationToken(user);
        String verificationLink = "http://localhost:8080/verify?token=" + token;
        emailService.sendEmail(user.getEmail(), "Email Verification",
                "Click on the following link to verify your email: " + verificationLink);
    }
}
