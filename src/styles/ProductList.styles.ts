import { CSSProperties } from 'react';

export const productListStyles: { [key: string]: CSSProperties } = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#f8f9fa',
    minHeight: '100vh'
  },
  
  title: {
    fontSize: '36px',
    fontWeight: '700',
    color: '#2c3e50',
    textAlign: 'center',
    marginBottom: '32px',
    textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
  },
  
  grid: {
    display: 'grid',
    gap: '20px'
  }
};

export const productCardStyles: { [key: string]: CSSProperties } = {
  card: {
    border: '1px solid #e0e0e0',
    borderRadius: '12px',
    padding: '24px',
    margin: '16px 0',
    backgroundColor: '#ffffff',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease'
  },
  
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '12px'
  },
  
  name: {
    fontSize: '24px',
    fontWeight: '600',
    color: '#2c3e50',
    margin: '0'
  },
  
  category: {
    backgroundColor: '#3498db',
    color: 'white',
    padding: '4px 12px',
    borderRadius: '20px',
    fontSize: '12px',
    fontWeight: '500'
  },
  
  price: {
    fontSize: '32px',
    fontWeight: '700',
    color: '#27ae60',
    margin: '16px 0'
  },
  
  description: {
    fontSize: '16px',
    color: '#7f8c8d',
    lineHeight: '1.5',
    margin: '12px 0 0 0'
  }
};