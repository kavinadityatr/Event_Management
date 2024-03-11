package com.event.eventmanagement.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.event.eventmanagement.Entity.UserInfo;

import java.util.Optional;

public interface UserInfoRepository extends JpaRepository<UserInfo, Integer> {
    Optional<UserInfo> findByName(String username);

}
 