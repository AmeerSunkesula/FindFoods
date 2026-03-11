import { useState } from "react"
import React, { useEffect } from "react"
import RecipeCard from "./RecipeCard"
export default function Recipes() {
  var [recipes, setRecipes] = useState([])
  var [skip, setSkip] = useState(0)
  var [total, setTotal] = useState(0)

  useEffect(() => {
    fetch(`https://dummyjson.com/recipes?limit=10&skip=${skip}`)
      .then((r) => r.json())
      .then((d) => {
        setRecipes([...d.recipes])
        setTotal(d.total)
      })
  }, [skip])

  return (
    <div className="RecipeContainer">
      <div className="RecipeRoot">
        {recipes.map((r) => {
          return <RecipeCard key={r.id} recipe={r}></RecipeCard>
        })}
      </div>
      <div className="Pagination">
        <button
          disabled={skip === 0}
          onClick={() => setSkip(Math.max(0, skip - 10))}
          className="PaginationButton">
          Previous
        </button>

        <button
          disabled={skip + 10 >= total}
          onClick={() => setSkip(skip + 10)}
          className="PaginationButton">
          Next
        </button>
      </div>
      <span className="PageInfo">By Ameer</span>
    </div>
  )
}
