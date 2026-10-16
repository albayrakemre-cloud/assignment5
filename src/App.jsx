import React, { useState } from 'react';
import ProductList from './components/ProductList';

function App() {
  const [showProducts, setShowProducts] = useState(false);
  const [name, setName] = useState("");

  const toggleProducts = () => {
    setShowProducts(prev => !prev);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>React Product Dashboard</h1>
      <p style={{ color: '#666', fontStyle: 'italic' }}>Welcome to your simple product management panel.</p> {/* about */}

      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="nameInput" style={{ marginRight: '10px' }}>Name:</label>
        <input
          id="nameInput"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Type your name..."
          style={{ padding: '5px', fontSize: '14px' }}
        />
      </div>

      <p>Hello, {name}</p>

      <button
        onClick={toggleProducts}
        style={{ padding: '8px 16px', cursor: 'pointer', marginBottom: '15px' }}
      >
        {showProducts ? "Hide Products" : "Show Products"}
      </button>

      {showProducts && <ProductList />}
    </div>
  );
}

export default App;