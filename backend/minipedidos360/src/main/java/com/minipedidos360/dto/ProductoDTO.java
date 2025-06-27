package com.minipedidos360.dto;

import com.minipedidos360.model.Producto;

import java.math.BigDecimal;

public class ProductoDTO {

    private Long idProducto;
    private String categoria;
    private String nombreProducto;
    private Double precio;

    // Constructor que recibe la entidad
    public ProductoDTO(Producto producto) {
        this.idProducto = producto.getIdProducto();
        this.categoria = producto.getCategoria();
        this.nombreProducto = producto.getNombreProducto();
        this.precio = producto.getPrecio();
    }

    // Getters (puedes agregar setters si lo usas para POST/PUT)
    public Long getIdProducto() { return idProducto; }
    public String getCategoria() { return categoria; }
    public String getNombreProducto() { return nombreProducto; }
    public Double getPrecio() { return precio; }
}
