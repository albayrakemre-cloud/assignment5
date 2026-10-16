import React from 'react';

function Card({ children }) {
    const cardStyle = {
        border: '1px solid #ddd', // uppdate
        borderRadius: '8px',
        padding: '16px',
        margin: '10px 0',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        backgroundColor: '#fff',
        color: '#333',
        transition: 'all 0.3s ease' // efect
    };

    return (
        <div style={cardStyle}>
            {children}
        </div>
    );
}

export default Card;