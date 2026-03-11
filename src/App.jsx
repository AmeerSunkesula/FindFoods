import { useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import Header from "./components/Header"
import Recipes from "./features/Recipes.jsx"
import RecipeCard from "./features/RecipeCard.jsx"
import "./App.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Recipes />
    </>
  )
}

export default App
