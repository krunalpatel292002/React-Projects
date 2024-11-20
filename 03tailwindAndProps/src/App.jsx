import { useState } from 'react'
import './App.css'
import Card from "./components/Card.jsx"

function App() {
  const [count, setCount] = useState(0)
  let cardProps= {
    itemName : "farhan",
    websiteCharge : "5$"
  }

  let myArr= ["3$", "4$", "5$"]
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl
      ' >Testing Tailwind...</h1>
      <Card itemName="Krunal" websiteCharge= "100$"/>
      <Card itemName="Vraj"/>
      <Card itemName={cardProps.itemName} websiteCharge= {cardProps.websiteCharge}/>
      <Card itemName="Nachiket"  websiteCharge={myArr[0]}/>
    </>
  )
}

export default App
