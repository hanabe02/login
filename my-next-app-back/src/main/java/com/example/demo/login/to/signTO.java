package com.example.demo.login.to;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "users")  // DB의 users 테이블과 매핑
public class signTO {
    @Id
    private String id;  // 기본키 (String 타입)

    private String password;
    private String name;
    private String lv;
    private String job;
    private String email;
}
