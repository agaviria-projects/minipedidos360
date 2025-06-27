import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ClienteForm({ selectedCliente, onSave, onCancel }) {
  const [nombre, setNombre] = useState('');
  const [ciudad, setCiudad] = useState('');
  const [telefono, setTelefono] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (selectedCliente) {
      setNombre(selectedCliente.nombre);
      setCiudad(selectedCliente.ciudad);
      setTelefono(selectedCliente.telefono);
      setEmail(selectedCliente.email);
    } else {
      setNombre('');
      setCiudad('');
      setTelefono('');
      setEmail('');
    }
  }, [selectedCliente]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nuevoCliente = { nombre, ciudad, telefono, email };

    try {
      if (selectedCliente) {
        await axios.put(`http://localhost:8080/clientes/${selectedCliente.idCliente}`, nuevoCliente);
      } else {
        await axios.post('http://localhost:8080/clientes', nuevoCliente);
      }
      onSave(); // recargar la lista
      onCancel(); // limpiar formulario
    } catch (error) {
      console.error('Error al guardar cliente:', error);
    }
  };

  return (
    <div className="card p-3 mb-4">
      <h4>{selectedCliente ? 'Editar Cliente' : 'Registrar Cliente'}</h4>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Ciudad"
            value={ciudad}
            onChange={(e) => setCiudad(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Teléfono"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-success me-2">
          {selectedCliente ? 'Actualizar' : 'Guardar'}
        </button>
        {selectedCliente && (
          <button
            type="button"
            className="btn btn-secondary"
            onClick={onCancel}
          >
            Cancelar
          </button>
        )}
      </form>
    </div>
  );
}

export default ClienteForm;
