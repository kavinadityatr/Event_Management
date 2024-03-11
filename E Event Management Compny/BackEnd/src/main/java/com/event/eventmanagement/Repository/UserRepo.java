package com.event.eventmanagement.Repository;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import com.event.eventmanagement.Entity.Eventuser;
import com.event.eventmanagement.Entity.UserInfo;

public interface UserRepo extends JpaRepository<Eventuser,Integer> {
     static Optional<UserInfo> findByName(String username) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'findByName'");
    }
}
