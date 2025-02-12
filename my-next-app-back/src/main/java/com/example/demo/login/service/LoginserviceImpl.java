package com.example.demo.login.service;

import com.example.demo.login.to.usersTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.login.mapper.LoginMapper;

import java.util.ArrayList;
import java.util.HashMap;


@Service
public class LoginserviceImpl implements LoginService {
    @Autowired
    private LoginMapper loginMapper;

    @Override
    public ArrayList<usersTO> login(String username, String password) {
        System.out.println("\n 디버깅 포인트 : loginservice \n");
        HashMap<String,String> map = new HashMap<>();
        map.put("username",username);
        map.put("password",password);

        ArrayList<usersTO> list = loginMapper.usersList(map);
        System.out.println("\n 디버깅 포인트 : mapper 정상 실행 \n");

        return list;
    }
}
