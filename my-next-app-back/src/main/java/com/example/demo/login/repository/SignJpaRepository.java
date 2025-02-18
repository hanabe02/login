package com.example.demo.login.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.stereotype.Repository;
import com.example.demo.login.to.signTO;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashMap;

@Repository
public interface SignJpaRepository extends JpaRepository<signTO, String> {
    @Modifying
    @Transactional
    @Query("UPDATE signTO u SET u.name = :name, u.id = :id, u.password = :password WHERE u.email = :email AND u.email IS NOT NULL")
    int updateUserInfo(String id, String name, String email, String password);

    @Modifying
    @Transactional
    @Query("DELETE FROM signTO u WHERE u.email = :email")
    int deleteByEmail(String email);

}