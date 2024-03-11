package com.event.eventmanagement.Service;


import java.util.List;

import com.event.eventmanagement.DTO.UserDTO;

public interface UserService {
    
    void createUser(UserDTO userdto);
    UserDTO getUserById(int id);
    void updateUser(int id, UserDTO userDto);
    void deleteUser(int id);
    static List<String> getUserRolesByName(String username) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getUserRolesByName'");
    }
    
}
