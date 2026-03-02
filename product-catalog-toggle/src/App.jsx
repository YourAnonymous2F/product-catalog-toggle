// import { useState } from 'react'
import ProductCard from './productcard'

function App() {
  // const [cart, setCart] = useState([])
  // const [searchText, setSearchText] = useState('')

  const Products = [ 
    {id: 1, name: "Laptop", price: 925.5, category: "electronics"},
    {id: 2, name: "Keyboard", price: 25.5, category: "electronics"},
    {id: 3, name: "Mouse", price: 15.5, category: "electronics"},
    {id: 4, name: "Joy Stick", price: 125, category: "electronics"},
    {id: 5, name: "Joy Stick", price: 125, category: "electronics"},
    {id: 6, name: "Joy Stick", price: 125, category: "electronics"},
    {id: 7, name: "Joy Stick", price: 125, category: "electronics"}
  ]

  return (
    <>
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
        <h1>Product Catalog</h1>
        <p>Cart Count: </p>
      </div>

      <input 
        type="text" 
        placeholder="Search products..." 
        onChange={(e) => setSearch(e.target.value)}
      />

      <div style={{display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '20px'}}>
        {Products.map(product => (
          <ProductCard
          key={product.id}
          name={product.name}
          price={product.price.toFixed(2)}
          category={product.category}
        />
        ))}
      </div>
      
      
    </>
  )
}

export default App
