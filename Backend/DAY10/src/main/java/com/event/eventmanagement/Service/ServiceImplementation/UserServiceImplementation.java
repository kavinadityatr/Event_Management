package com.event.eventmanagement.Service.ServiceImplementation;


import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.event.eventmanagement.DTO.UserDTO;
import com.event.eventmanagement.Entity.Eventuser;
import com.event.eventmanagement.Repository.UserRepo;
import com.event.eventmanagement.Service.UserService;
import java.util.Optional;


@Service
public class UserServiceImplementation implements UserService {

    private UserRepo userRepo;

    @Autowired
    public UserServiceImplementation(UserRepo userRepo)
    {
        this.userRepo = userRepo;
    }

    @Override
    public void createUser(UserDTO userDTO)
    {
        Eventuser user = new Eventuser();
        user.setUserName(userDTO.getUserName());
        user.setPassword(userDTO.getPassword());
        userRepo.save(user);
        
    }

    @Override
    public UserDTO getUserById(int id) {
        Optional<Eventuser> optionalUser = userRepo.findById(id);
        UserDTO userDto = new UserDTO();
        optionalUser.ifPresent(user -> BeanUtils.copyProperties(user, userDto));
        return userDto;
    }

    @Override
    public void updateUser(int id, UserDTO userDto) {
        Optional<Eventuser> optionalUser = userRepo.findById(id);
        optionalUser.ifPresent(user -> {
            BeanUtils.copyProperties(userDto, user);
            userRepo.save(user);
        });
    }

    @Override
    public void deleteUser(int id) {
        userRepo.deleteById(id);
    }
    
}
