package com.event.eventmanagement.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.event.eventmanagement.DTO.UserDTO;
import com.event.eventmanagement.Service.UserService;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@RestController
@RequestMapping("/api/User/")
public class UserController {

    @Autowired
    UserService userService;

    @PostMapping("/post")
    public void createUser(@RequestBody UserDTO userDto)
    {
        userService.createUser(userDto);
    }

    
}
