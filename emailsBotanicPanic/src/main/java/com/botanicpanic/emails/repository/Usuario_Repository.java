package com.botanicpanic.emails.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.botanicpanic.emails.entity.Usuario;

@Repository 
public interface Usuario_Repository extends JpaRepository<Usuario, Long> {
    Usuario findByEmail(String email);
}
