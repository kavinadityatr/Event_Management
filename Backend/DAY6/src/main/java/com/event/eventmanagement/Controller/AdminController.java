package com.event.eventmanagement.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.event.eventmanagement.DTO.AdminDTO;
import com.event.eventmanagement.Service.AdminService;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@RestController
@RequestMapping("/api/User/")
public class AdminController {

    @Autowired
    AdminService adminService;

    @PostMapping("/post")
    public void createAdmin(@RequestBody AdminDTO adminDto)
    {
        adminService.createAdmin(adminDto);
    }
    
    
}
