import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ClienteList from './components/ClienteList';
import PedidoList from './components/PedidoList';
import ProductoList from './components/ProductoList';

function App() {
  return (
    <Router>
      <nav className="navbar navbar-dark bg-dark px-3 justify-content-between">
        <Link className="navbar-brand text-white" to="/">MiniPedidos360</Link>
        <div>
          <Link className="btn btn-outline-light me-2" to="/">Clientes</Link>
          <Link className="btn btn-outline-light me-2" to="/pedidos">Pedidos</Link>
          <Link className="btn btn-outline-light me-2" to="/productos">Productos</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<ClienteList />} />
        <Route path="/productos" element={<ProductoList />} />
        <Route path="/pedidos" element={<PedidoList />} />
      </Routes>
    </Router>
  );
}

export default App;
