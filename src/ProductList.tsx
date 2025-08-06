import type { ReactElement } from "react"
import type { Product } from './types/Product'

type Props = {
  products: Array<Product>,
  title: string
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

const ProductList = (props: Props): ReactElement => {
  const listOfProducts = props.products;
  return <div>
    <h1>{props.title}</h1>
    <pre>{JSON.stringify(listOfProducts, null, 2)}</pre>
  </div>
}

export {ProductList, hardcodedProducts};