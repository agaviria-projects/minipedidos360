import React, { useState } from 'react';
import axios from 'axios';

function PedidoForm() {
  const [pedido, setPedido] = useState({
    idcliente: '',
    idproducto: '',
    cantidad: '',
    fecha: ''
  });

  const handleChange = (e) => {
    setPedido({
      ...pedido,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/api/pedidos', pedido);
      alert('Pedido registrado correctamente');
      setPedido({ idcliente: '', idproducto: '', cantidad: '', fecha: '' });
    } catch (error) {
      console.error('Error al registrar pedido', error);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Registrar Pedido</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Cliente:</label>
          <input type="text" className="form-control" name="idcliente" value={pedido.idcliente} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label>Producto:</label>
          <input type="text" className="form-control" name="idproducto" value={pedido.idproducto} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label>Cantidad:</label>
          <input type="number" className="form-control" name="cantidad" value={pedido.cantidad} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label>Fecha:</label>
          <input type="date" className="form-control" name="fecha" value={pedido.fecha} onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-success">Registrar Pedido</button>
      </form>
    </div>
  );
}

export default PedidoForm;
