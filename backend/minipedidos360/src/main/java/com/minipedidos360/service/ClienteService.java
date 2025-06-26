package com.minipedidos360.service;

import com.minipedidos360.model.Cliente;
import com.minipedidos360.repository.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClienteService {

    @Autowired
    private ClienteRepository clienteRepository;

    public List<Cliente> listarTodos() {
        return clienteRepository.findAll();
    }

    public Cliente obtenerPorId(Long id) {
        return clienteRepository.findById(id).orElse(null);
    }

    public Cliente guardar(Cliente cliente) {
        return clienteRepository.save(cliente);
    }

    public Cliente actualizar(Long id, Cliente clienteActualizado) {
        Cliente existente = obtenerPorId(id);
        if (existente != null) {
            clienteActualizado.setIdCliente(id); // mantener ID
            return clienteRepository.save(clienteActualizado);
        }
        return null;
    }

    public void eliminar(Long id) {
        clienteRepository.deleteById(id);
    }
}
