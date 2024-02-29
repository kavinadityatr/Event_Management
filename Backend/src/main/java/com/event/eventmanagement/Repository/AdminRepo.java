package com.event.eventmanagement.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.event.eventmanagement.Entity.Admin;

public interface AdminRepo extends JpaRepository<Admin,Integer>{

    
}  