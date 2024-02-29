package com.event.eventmanagement.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.event.eventmanagement.Entity.Event;

public interface EventRepo extends JpaRepository<Event,Integer> {
    
}
