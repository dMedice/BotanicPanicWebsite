package com.botanicpanic.emails.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.botanicpanic.emails.entity.Usuario;
import com.botanicpanic.emails.repository.Usuario_Repository;

import java.util.List;
import java.util.Optional;

@Service 
public class Usuario_Service {

    @Autowired
    private Usuario_Repository usuarioRepository;

    // Save
    public Usuario salvarUsuario(Usuario usuario) {
        return usuarioRepository.save(usuario);
    }

    // Search id
    public Optional<Usuario> buscarPorId(Long id) {
        return usuarioRepository.findById(id);
    }

    // Search all
    public List<Usuario> listarTodos() {
        return usuarioRepository.findAll();
    }

    // Search email
    public Usuario buscarPorEmail(String email) {
        return usuarioRepository.findByEmail(email);
    }

    // Delete by id
    public void deletarUsuario(Long id) {
        usuarioRepository.deleteById(id);
    }
}
