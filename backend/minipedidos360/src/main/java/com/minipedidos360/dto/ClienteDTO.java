package com.minipedidos360.dto;

import com.minipedidos360.model.Cliente;

public class ClienteDTO {
    private Long idCliente;
    private String nombre;
    private String ciudad;
    private String telefono;
    private String email;

    public ClienteDTO(Cliente cliente) {
        this.idCliente = cliente.getIdcliente();
        this.nombre = cliente.getNombre();
        this.ciudad = cliente.getCiudad();
        this.telefono = cliente.getTelefono();
        this.email = cliente.getEmail();
    }

    public Long getIdCliente() {
        return idCliente;
    }

    public String getNombre() {
        return nombre;
    }

    public String getCiudad() {
        return ciudad;
    }

    public String getTelefono() {
        return telefono;
    }

    public String getEmail() {
        return email;
    }
}

