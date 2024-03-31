
import React, { useState,useEffect } from "react";
import './../styles/App.css';

const App = () => {

  const fruits = ["apple", "banana", "cherry", "date", "elderberry", "fig"];
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState(fruits);

  useEffect(() => {
    setFiltered(fruits.filter((fruit) => {
      return fruit.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    }))
  },[search])

  return (
    <div>
      {/* Do not remove the main div */}
      <h1>Search item</h1>
      <input type="text" onChange={(event) => setSearch(event.target.value)} />
      <ul>
        {
          filtered.map((fruit) => {
            return <li>{fruit}</li>
          })
        }
      </ul>

    </div>
  )
}

export default App