package com.minipedidos360.dto;

import com.minipedidos360.model.Pedido;

import java.time.LocalDate;

public class PedidoDTO {
    private Long idPedido;
    private LocalDate fecha;
    private Integer cantidad;
    private String nombreCliente;
    private String nombreProducto;

    public PedidoDTO(Pedido pedido) {
        this.idPedido = pedido.getIdpedido();
        this.fecha = pedido.getFecha();
        this.cantidad = pedido.getCantidad();
        this.nombreCliente = pedido.getCliente().getNombre();
        this.nombreProducto = pedido.getProducto().getNombreProducto();
    }
    // Getters
    public Long getIdPedido() { return idPedido; }
    public LocalDate getFecha() { return fecha; }
    public Integer getCantidad() { return cantidad; }
    public String getNombreCliente() { return nombreCliente; }
    public String getNombreProducto() { return nombreProducto; }
}
