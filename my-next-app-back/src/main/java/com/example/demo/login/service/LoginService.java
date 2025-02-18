package com.example.demo.login.service;

import com.example.demo.login.to.usersTO;

import java.util.ArrayList;

public interface LoginService {
    public ArrayList<usersTO> login(String username, String password);
    public void sign(String name, String id, String email, String password);
    public void edit(String name, String id, String email, String password);
    public void delete(String email);
}
