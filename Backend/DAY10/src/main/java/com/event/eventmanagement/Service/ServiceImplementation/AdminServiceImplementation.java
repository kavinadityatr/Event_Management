package com.event.eventmanagement.Service.ServiceImplementation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.event.eventmanagement.DTO.AdminDTO;
import com.event.eventmanagement.Entity.Admin;
import com.event.eventmanagement.Repository.AdminRepo;
import com.event.eventmanagement.Service.AdminService;
import java.util.Optional;
import org.springframework.beans.BeanUtils;


@Service
public class AdminServiceImplementation implements AdminService {

    private final AdminRepo adminRepo;

    @Autowired
    public AdminServiceImplementation(AdminRepo adminRepo) {
        this.adminRepo = adminRepo;
    }

    @Override
    public void createAdmin(AdminDTO adminDTO) {
        Admin admin = new Admin();
        BeanUtils.copyProperties(adminDTO, admin);
        adminRepo.save(admin);
    }

    @Override
    public AdminDTO getAdminById(int id) {
        Optional<Admin> optionalAdmin = adminRepo.findById(id);
        AdminDTO adminDto = new AdminDTO();
        optionalAdmin.ifPresent(admin -> BeanUtils.copyProperties(admin, adminDto));
        return adminDto;
    }

    @Override
    public void updateAdmin(int id, AdminDTO adminDto) {
        Optional<Admin> optionalAdmin = adminRepo.findById(id);
        optionalAdmin.ifPresent(admin -> {
            BeanUtils.copyProperties(adminDto, admin);
            adminRepo.save(admin);
        });
    }

    @Override
    public void deleteAdmin(int id) {
        adminRepo.deleteById(id);
    }
}