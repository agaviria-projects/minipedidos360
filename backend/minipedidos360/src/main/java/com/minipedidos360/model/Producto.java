package com.minipedidos360.model;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name="productos")
public class Producto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idProducto;

    @Column(name = "nombre_producto",length = 100, nullable = false)
    private String nombreproducto;

    @Column(name = "categoria", length = 100, nullable = false)
    private String categoria;

    @Column(name = "precio",nullable = false)
    private Double precio;

    @OneToMany(mappedBy = "producto", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Pedido>pedidos;

    public Producto(){}

    //Getter y Setter


    public Long getIdProducto() {
        return idProducto;
    }

    public String getNombre_producto() {
        return nombreproducto;
    }

    public String getCategoria() {
        return categoria;
    }

    public Double getPrecio() {
        return precio;
    }

    public List<Pedido> getPedidos() {
        return pedidos;
    }

    public void setIdProducto(Long idProducto) {
        this.idProducto = idProducto;
    }

    public void setNombre_producto(String nombre_producto) {
        this.nombreproducto = nombre_producto;
    }

    public void setCategoria(String categoria) {
        this.categoria = categoria;
    }

    public void setPrecio(Double precio) {
        this.precio = precio;
    }

    public void setPedidos(List<Pedido> pedidos) {
        this.pedidos = pedidos;
    }
}
