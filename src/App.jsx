import React from 'react';
import { ProductCard } from './ProductCard';

import img1 from '../assets/images (1).jpg';
import img2 from '../assets/kric.png';
import img3 from '../assets/photo_2026-09-14_08-54-36.jpg';

const PRODUCTS = [
  {
    id: 1,
    title: 'Товар 1',
    price: 4990,
    image: img1,
  },
  {
    id: 2,
    title: 'Товар 2',
    price: 8490,
    image: img2,
  },
  {
    id: 3,
    title: 'Товар 3',
    price: 6200,
    image: img3,
  },
];

export default function App() {
  return (
    <div style={appStyles.container}>
      <header style={appStyles.header}>
        <h1 style={appStyles.headline}>Каталог товаров</h1>
      </header>

      <main style={appStyles.grid}>
        {PRODUCTS.map(product => (
          <ProductCard
            key={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
          />
        ))}
      </main>
    </div>
  );
}

const appStyles = {
  container: {
    maxWidth: '960px',
    margin: '0 auto',
    padding: '32px 16px',
    fontFamily: 'system-ui, -apple-system, sans-serif',
  },
  header: {
    marginBottom: '24px',
  },
  headline: {
    fontSize: '28px',
    color: '#111827',
  },
  grid: {
    display: 'flex',
    gap: '24px',
    flexWrap: 'wrap',
  },
};