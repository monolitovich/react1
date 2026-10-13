import React, { useState } from 'react';

export function ProductCard({ title, price, image }) {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  const handleReset = (e) => {
    e.stopPropagation();
    setCount(0);
  };

  return (
    <div style={styles.card}>
      <img src={image} alt={title} style={styles.image} />

      <div style={styles.body}>
        <h3 style={styles.title}>{title}</h3>
        <p style={styles.price}>{price.toLocaleString('ru-RU')} ₽</p>

        <div style={styles.actions}>
          <button style={styles.button} onClick={handleIncrement}>
            Добавить в корзину {count > 0 && `(${count})`}
          </button>

          {count > 0 && (
            <button
              style={styles.resetButton}
              onClick={handleReset}
              title="Сбросить количество"
            >
              ✕
            </button>
          )}
        </div>

        <p style={styles.counterText}>
          В корзине: <strong>{count} шт.</strong>
        </p>
      </div>
    </div>
  );
}

const styles = {
  card: {
    width: '260px',
    borderRadius: '12px',
    backgroundColor: '#fff',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    fontFamily: 'system-ui, -apple-system, sans-serif',
    transition: 'transform 0.2s ease',
  },
  image: {
    width: '100%',
    height: '180px',
    objectFit: 'cover',
  },
  body: {
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
  },
  title: {
    margin: '0 0 8px',
    fontSize: '18px',
    color: '#1a1a1a',
  },
  price: {
    margin: '0 0 16px',
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#2563eb',
  },
  actions: {
    display: 'flex',
    gap: '8px',
    marginTop: 'auto',
  },
  button: {
    flexGrow: 1,
    padding: '10px 14px',
    backgroundColor: '#2563eb',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
  },
  resetButton: {
    padding: '10px',
    backgroundColor: '#f3f4f6',
    color: '#6b7280',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '14px',
  },
  counterText: {
    margin: '12px 0 0',
    fontSize: '13px',
    color: '#6b7280',
  },
};