package com.iotnetworksimulator;

import com.iotnetworksimulator.model.*;
import com.iotnetworksimulator.repository.*;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.HashSet;
import java.util.Set;

@SpringBootApplication
public class IoTNetworkSimulatorApplication {
    


    public static void main(String[] args) {
        SpringApplication.run(IoTNetworkSimulatorApplication.class, args);
    }

//    @Bean
//    public CommandLineRunner addDefaultUser(UserRepository userRepository, PasswordEncoder passwordEncoder) {
//        return args -> {
//            if (userRepository.count() == 0) {
//                User defaultUser = new User();
//                defaultUser.setUsername("admin");
//                defaultUser.setEmail("admin@admin.com");
//                defaultUser.setPassword(passwordEncoder.encode("admin"));
//                defaultUser.setEnabled(true);
//                Set<Role> roles = new HashSet<>();
//                Role adminRole = new Role();
//                adminRole.setName(ERole.ROLE_ADMIN);
//                roles.add(adminRole);
//                defaultUser.setRoles(roles);
//                userRepository.save(defaultUser);
//                System.out.println("Default admin user added!");
//            } else {
//                System.out.println("Default user already exists. No action taken.");
//            }
//        };
//    }

}

