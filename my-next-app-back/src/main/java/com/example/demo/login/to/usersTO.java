package com.example.demo.login.to;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = false)
public class usersTO {
    private String id;
    private String password;
    private String name;
    private String lv;
    private String job;
}
