package com.example.demo.login.controller;

import com.example.demo.login.service.LoginService;
import com.example.demo.login.to.usersTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class loginController {
    @Autowired
    private LoginService loginService;

    @PostMapping("/login")
    public Map<String, Object> login(@RequestBody Map<String, String> params) {
    // public ModelMap login(@RequestParam("username") String username, @RequestParam("password") String password){
        Map<String, Object> map = new HashMap<>();

        String username = params.get("username");
        String password = params.get("password");

        System.out.println(username);
        System.out.println(password);

        ArrayList<usersTO> user = loginService.login(username, password);

        if (user != null && !user.isEmpty()) {
            // 로그인 성공 시 토큰 생성 및 응답
            String token = "true";
            map.put("serviceToken", token);
            map.put("user", user);

            System.out.println("로그인 성공");
            System.out.println(map);
            return map;
        } else {
            // 로그인 실패 시 응답
            map.put("message", "이메일 또는 비밀번호가 일치하지 않습니다.");
            map.put("serviceToken", false);
            System.out.println("로그인 실패");
            System.out.println(map);
            return map;
        }
    }

    @PostMapping("/sign")
    public void sign(@RequestBody Map<String, String> params) {

        System.out.println(params.get("name"));
        System.out.println(params.get("id"));
        System.out.println(params.get("email"));
        System.out.println(params.get("password"));

        String name = params.get("name");
        String id = params.get("id");
        String email = params.get("email");
        String password = params.get("password");

        loginService.sign(name, id, email, password);
    }

    @PostMapping("/profileEdit")
    public void profileEdit(@RequestBody Map<String, String> params) {

        System.out.println(params.get("name"));
        System.out.println(params.get("id"));
        System.out.println(params.get("email"));
        System.out.println(params.get("password"));

        String name = params.get("name");
        String id = params.get("id");
        String email = params.get("email");
        String password = params.get("password");

        loginService.edit(name, id, email, password);
    }

    @PostMapping("/userDelete")
    public void userDelete(@RequestBody Map<String, String> params) {

        String email = params.get("email");
        System.out.println("디버깅 포인트 : 컨트롤러");
        System.out.println(email);
        loginService.delete(email);
    }
}
