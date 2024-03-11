package com.event.eventmanagement.Service;

import com.event.eventmanagement.DTO.AdminDTO;

public interface AdminService {
    void createAdmin(AdminDTO adminDTO);
    AdminDTO getAdminById(int id);
    void updateAdmin(int id, AdminDTO adminDto);
    void deleteAdmin(int id);
    
} 
