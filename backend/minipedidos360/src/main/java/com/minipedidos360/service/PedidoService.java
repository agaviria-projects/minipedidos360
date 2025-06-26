package com.minipedidos360.service;


import com.minipedidos360.model.Pedido;
import com.minipedidos360.repository.PedidoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PedidoService {

    @Autowired
    private PedidoRepository pedidoRepository;

    public List<Pedido>listarTodos(){
        return pedidoRepository.findAll();
    }

    public Pedido obtenerPorId(Long id){
        return pedidoRepository.findById(id).orElse(null);
    }

    public Pedido guardar(Pedido pedido){
        return pedidoRepository.save(pedido);
    }

    public Pedido actualizar(Long id, Pedido pedidoActualizada){
        Pedido existente = obtenerPorId(id);
        if(existente!= null){
            pedidoActualizada.setIdpedido(id);
            return pedidoRepository.save(pedidoActualizada);
        }
        return null;
    }
    public void eliminar(Long id){
        pedidoRepository.deleteById(id);
    }
}
