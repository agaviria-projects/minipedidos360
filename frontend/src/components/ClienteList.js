import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ClienteForm from './ClienteForm';

function ClienteList() {
  const [clientes, setClientes] = useState([]);
  const [selectedCliente, setSelectedCliente] = useState(null);
  const [busqueda, setBusqueda] = useState("");

  const fetchClientes = async () => {
    try {
      const res = await axios.get('http://localhost:8080/api/clientes');
      setClientes(res.data);
    } catch (error) {
      console.error('Error al cargar clientes:', error);
    }
  };

  
  const handleDelete = async (id) => {
    if (window.confirm('¿Estás seguro de eliminar este cliente?')) {
      await axios.delete(`http://localhost:8080/clientes/${id}`);
      fetchClientes();
    }
  };

  useEffect(() => {
    fetchClientes();
  }, []);

  const clientesFiltrados = clientes.filter(cliente =>
    cliente.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <ClienteForm
        selectedCliente={selectedCliente}
        onSave={fetchClientes}
        onCancel={() => setSelectedCliente(null)}
      />

      <div className="card p-3 mt-4">
        <h4>Lista de Clientes</h4>

        <input
          type="text"
          className="form-control mb-3"
          placeholder="Buscar por nombre..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />

        <table className="table table-hover align-middle">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Ciudad</th>
              <th>Teléfono</th>
              <th>Email</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {clientesFiltrados.map((cliente) => (
              <tr key={cliente.idCliente}>
                <td>{cliente.nombre}</td>
                <td>{cliente.ciudad}</td>
                <td>{cliente.telefono}</td>
                <td>{cliente.email}</td>
                <td>
                  <button
                    className="btn btn-sm btn-warning me-2"
                    onClick={() => setSelectedCliente(cliente)}
                  >
                    ✏️ Editar
                  </button>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => handleDelete(cliente.idCliente)}
                  >
                    🗑 Eliminar
                  </button>
                </td>
              </tr>
            ))}

            {clientesFiltrados.length === 0 && (
              <tr>
                <td colSpan="5" className="text-center text-muted">No se encontraron clientes</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ClienteList;
