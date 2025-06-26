package com.minipedidos360.service;


import com.minipedidos360.model.Producto;
import com.minipedidos360.repository.ProductoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductoService {
    @Autowired
    private ProductoRepository productoRepository;

    public List<Producto>listarTodos(){
        return productoRepository.findAll();
    }

    public Producto obtenerPorId(Long id){
        return productoRepository.findById(id).orElse(null);
    }

    public Producto guardar(Producto producto){
        return productoRepository.save(producto);
    }

    public Producto actualizar(Long id, Producto productoActualizada){
        Producto existente = obtenerPorId(id);
        if(existente!= null){
            productoActualizada.setIdProducto(id);
            return productoRepository.save(productoActualizada);
        }
        return null;
    }

    public void eliminar(Long id){
        productoRepository.deleteById(id);
    }
}
