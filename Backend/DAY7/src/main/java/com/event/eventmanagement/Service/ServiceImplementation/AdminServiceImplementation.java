package com.event.eventmanagement.Service.ServiceImplementation;

import org.springframework.stereotype.Service;

import com.event.eventmanagement.DTO.AdminDTO;
import com.event.eventmanagement.Entity.Admin;
import com.event.eventmanagement.Repository.AdminRepo;
import com.event.eventmanagement.Service.AdminService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor

public class AdminServiceImplementation implements AdminService {

private AdminRepo adminRepo;

@Override
public void createAdmin(AdminDTO adminDTO)
{
    Admin admin = new Admin();
    admin.setUserName(adminDTO.getUserName());
    admin.setPassword(adminDTO.getPassword());
    adminRepo.save(admin);
    
}
    
}
