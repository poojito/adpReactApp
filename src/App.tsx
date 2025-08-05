import './App.css'
import ProductList, { hardcodedProducts } from './ProductList'

function App() {
  return (
    <>
      <h1>Product Catalog</h1>
      <ProductList 
        products={hardcodedProducts} 
        title="Featured Products" 
      />
    </>
  )
}

export default App
