import React, {useState, useEffect} from 'react'
import Section from './components/Section'
import { getSections } from './helperFunctions/getSectionItems'
import './css/burrito.css'
import BurritoStats from './components/BurritoStats'

const App = () => {
  const sections = getSections()

  const [cost, setCost] = useState(0)
  const [calories, setCalories] = useState(0)
  const [selectedItems, setSelectedItems] = useState([])

  useEffect(() => {
    setCalories(selectedItems.reduce((total, item) => total + item.calories, 0))
    setCost(selectedItems.reduce((total, item) => total + item.cost, 0))
  }, [selectedItems])
  

  return (
    <div id="page">
      <div className="main-container">
        <header>
          <h1 className="page-title">Build a Burrito</h1>
          <BurritoStats cost={cost} calories={calories} />
        </header>
        <main>
          {sections.map( section => <Section key={section.name} type={section.name} title={section.title} limit={section.limit} selectedItems={selectedItems} setSelectedItems={setSelectedItems} />)}
        </main>
      </div>
    </div>
  )
}

export default App

