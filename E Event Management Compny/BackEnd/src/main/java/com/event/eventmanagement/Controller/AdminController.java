package com.event.eventmanagement.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.event.eventmanagement.DTO.AdminDTO;
import com.event.eventmanagement.Service.AdminService;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@RestController
@RequestMapping("/api/admin/")
public class AdminController {

    @Autowired
    AdminService adminService;

    @PostMapping("/post")
    public void createAdmin(@RequestBody AdminDTO adminDto)
    {
        adminService.createAdmin(adminDto);
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<AdminDTO> getAdminById(@PathVariable int id) {
        AdminDTO adminDto = adminService.getAdminById(id);
        return ResponseEntity.ok().body(adminDto);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Void> updateAdmin(@PathVariable int id, @RequestBody AdminDTO adminDto) {
        adminService.updateAdmin(id, adminDto);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteAdmin(@PathVariable int id) {
        adminService.deleteAdmin(id);
        return ResponseEntity.ok().build();
    }
    
}
