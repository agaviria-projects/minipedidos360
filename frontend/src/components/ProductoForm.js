import React from 'react';

function ProductoForm() {
  return (
    <div className="container mt-4">
      <h2 className="mb-4">Registrar Producto</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">Nombre del producto:</label>
          <input type="text" className="form-control" placeholder="Ej. Café oscuro" />
        </div>
        <div className="mb-3">
          <label className="form-label">Categoría:</label>
          <input type="text" className="form-control" placeholder="Ej. Bebidas" />
        </div>
        <div className="mb-3">
          <label className="form-label">Precio:</label>
          <input type="number" className="form-control" placeholder="Ej. 12000" />
        </div>
        <button type="submit" className="btn btn-primary">Guardar</button>
      </form>
    </div>
  );
}

export default ProductoForm;
