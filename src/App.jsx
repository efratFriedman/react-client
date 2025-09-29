import './App.css'
import { login, logout } from './service/auth'
import { fetchProducts } from './service/products'

function App() {

  return (
    <>
    <button onClick={fetchProducts}>get products</button>
    <button onClick={()=>login("efrat","123456")}>login</button>
    <button onClick={logout}>logout</button>
    </>

  )
}

export default App
