package com.example.demo.login.mapper;

import com.example.demo.login.to.usersTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.ArrayList;
import java.util.HashMap;

@Mapper
public interface LoginMapper {
    public ArrayList<usersTO> usersList(HashMap<String, String> map);
}
