import type { ReactElement } from "react"
import type { Product } from './types/Product'
import { productListStyles, productCardStyles } from './styles/ProductList.styles'

type Props = {
  products: Array<Product>,
  title: string
}

type ProductProp = {
  product: Product
}

// Hardcoded product data
const hardcodedProducts: Product[] = [
  {
    id: "1",
    name: "Wireless Headphones",
    price: 99.99,
    description: "High-quality wireless headphones with noise cancellation",
    category: "Electronics"
  },
  {
    id: "2", 
    name: "Coffee Mug",
    price: 12.50,
    description: "Ceramic coffee mug with ergonomic handle",
    category: "Kitchen"
  },
  {
    id: "3",
    name: "Running Shoes",
    price: 89.00,
    description: "Comfortable running shoes with excellent cushioning",
    category: "Sports"
  },
  {
    id: "4",
    name: "Desk Lamp",
    price: 45.75,
    description: "Adjustable LED desk lamp with multiple brightness settings",
    category: "Office"
  },
  {
    id: "5",
    name: "Book - JavaScript Guide",
    price: 29.99,
    description: "Comprehensive guide to modern JavaScript programming",
    category: "Books"
  }
];

const ProductCard = (props: ProductProp): ReactElement => {
  const product = props.product;
  return (
    <div style={productCardStyles.card}>
      <div style={productCardStyles.header}>
        <h2 style={productCardStyles.name}>{product.name}</h2>
        <span style={productCardStyles.category}>{product.category}</span>
      </div>
      
      <p style={productCardStyles.price}>${product.price.toFixed(2)}</p>
      
      <p style={productCardStyles.description}>{product.description}</p>
    </div>
  )
}

const ProductList = (props: Props): ReactElement => {
  const listOfProducts = props.products;
  return (
    <div style={productListStyles.container}>
      <h1 style={productListStyles.title}>{props.title}</h1>
      
      <div style={productListStyles.grid}>
        {listOfProducts.map(product => (
          <ProductCard key={product.id} product={product}/>
        ))}
      </div>
    </div>
  )
}

export {ProductList, hardcodedProducts};