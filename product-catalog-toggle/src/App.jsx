import { useState } from 'react'
import ProductCard from './productcard'

const Products = [ 
  {id: 1, name: "Laptop", price: 925.5, category: "electronics"},
  {id: 2, name: "Keyboard", price: 25.5, category: "electronics"},
  {id: 3, name: "Mouse", price: 15.5, category: "electronics"},
  {id: 4, name: "Joy Stick", price: 125, category: "electronics"},
  {id: 5, name: "Book", price: 125, category: "accessories"},
  {id: 6, name: "Wrist Watch", price: 125, category: "accessories"},
  {id: 7, name: "Ruler", price: 125, category: "accessories"}
]

function App() {
  const [cart, setCart] = useState([])
  const [search, setSearch] = useState('')

  const filterdProducts = Products.filter( p => 
    p.name.toLowerCase().includes(search.toLowerCase())
  )

  const toggleCart = (product) => {
    const existsInCArt = cart.find(item => item.id === product.id);
    if (existsInCArt) {
      setCart(cart.filter(item => item.id !== product.id))
    } else {
      setCart([...cart, {...product, quantity: 1}])
    }
  }

  const updateQuantity = (id, quan) => {
    setCart(cart.map(item => 
      item.id === id ? {...item, quantity: item.quantity + quan} : item
    ))
  }
  

  return (
    <>
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
        <h1>Product Catalog</h1>
        <p>Cart Count: </p>
      </div>

      <input 
        type="text" 
        placeholder="Search products..." 
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div style={{
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px,1fr))', 
        gap: '10px', 
        marginTop: '20px'}}>
        {filterdProducts.map(product => { 
          const cartItem = cart.find(item => item.id === product.id);
          return (
            <ProductCard
            key={product.id}
            name={product.name}
            price={product.price.toFixed(2)}
            category={product.category}
            isInCart={!!cartItem}
            onToggle={() => toggleCart(product)}
            onUpdateQuantity={(quan) => updateQuantity(product.id, quan)}
            />
          )
        })}
      </div>
      
      
    </>
  )
}

export default App
