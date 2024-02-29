package com.event.eventmanagement.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.event.eventmanagement.Entity.Eventuser;

public interface UserRepo extends JpaRepository<Eventuser,Integer> {
    
}
