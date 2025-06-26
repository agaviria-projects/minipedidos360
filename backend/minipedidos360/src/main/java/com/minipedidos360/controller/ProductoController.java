package com.minipedidos360.controller;

import com.minipedidos360.model.Producto;
import com.minipedidos360.service.ProductoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/productos")
public class ProductoController {
    @Autowired
    private ProductoService productoService;

    @GetMapping
    public List<Producto>listarTodos(){
        return productoService.listarTodos();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Producto>obtenerPorId(@PathVariable Long id){
        Producto producto = productoService.obtenerPorId(id);
        return producto != null ? ResponseEntity.ok(producto): ResponseEntity.notFound().build();
    }

    @PostMapping
    public Producto crear(@RequestBody Producto producto){
        return productoService.guardar(producto);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Producto> actualizar(@PathVariable Long id, @RequestBody Producto productoActualizada) {
        Producto actualizado = productoService.actualizar(id, productoActualizada);
        return actualizado != null ? ResponseEntity.ok(actualizado) : ResponseEntity.notFound().build();
    }

    // 🔹 Eliminar
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminar(@PathVariable Long id) {
        productoService.eliminar(id);
        return ResponseEntity.noContent().build();
    }
}




