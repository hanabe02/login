package com.example.demo.login.service;

import com.example.demo.login.repository.SignJpaRepository;
import com.example.demo.login.to.usersTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.login.mapper.LoginMapper;
import com.example.demo.login.to.signTO;

import java.util.ArrayList;
import java.util.HashMap;


@Service
public class LoginserviceImpl implements LoginService {
    @Autowired
    private LoginMapper loginMapper;
    // private SignJpaRepository signJpaRepository;

    private final SignJpaRepository signJpaRepository;

    public LoginserviceImpl(SignJpaRepository signJpaRepository) {
        this.signJpaRepository = signJpaRepository;
    }

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

    @Override
    public void sign(String name, String id, String email, String password) {
        System.out.println("디버깅 포인트 : 서비스impl");

        signTO newUser = new signTO();
        newUser.setId(id);
        newUser.setName(name);
        newUser.setEmail(email);
        newUser.setPassword(password);
        signJpaRepository.save(newUser);

        System.out.println("회원가입 완료: " + name);
    }

    @Override
    public void edit(String name, String id, String email, String password) {
        System.out.println("디버깅 포인트 : 서비스impl");

        int updatedRows = signJpaRepository.updateUserInfo(id, name, email, password);
        System.out.println("디버깅 포인트 : 업데이트된 행 개수 = " + updatedRows);

        if (updatedRows == 0) {
            throw new RuntimeException("업데이트 실패: ID가 존재하지 않음.");
        }
    }

    @Override
    public void delete(String email){
        System.out.println("디버깅 포인트 : 서비스impl");

        int updatedRows = signJpaRepository.deleteByEmail(email);
        System.out.println("디버깅 포인트 : 업데이트된 행 개수 = " + updatedRows);

        if (updatedRows == 0) {
            throw new RuntimeException("업데이트 실패: ID가 존재하지 않음.");
        }
    }
}
