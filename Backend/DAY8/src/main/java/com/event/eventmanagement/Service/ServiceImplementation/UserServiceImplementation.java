package com.event.eventmanagement.Service.ServiceImplementation;


import com.event.eventmanagement.DTO.UserDTO;
import com.event.eventmanagement.Entity.Eventuser;
import com.event.eventmanagement.Repository.UserRepo;
import com.event.eventmanagement.Service.UserService;

public class UserServiceImplementation implements UserService {

    private UserRepo userRepo;

    @Override
    public void createUser(UserDTO userDTO)
    {
        Eventuser user = new Eventuser();
        user.setUserName(user.getUserName());
        user.setPassword(user.getPassword());
        userRepo.save(user);
        
    }
    
}
