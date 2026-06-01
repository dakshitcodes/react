import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    name: 'Hitesh',
    age:25,
    address: {
      city: 'Jaipur',
      state: 'Rajasthan',
      country: 'India'
    }
  }

  let newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  return (
    <>
      <h1 className='text-3xl bg-green-500 p-3'>Vite with Tailwind</h1>
      <Card/>
      <Card/>
      <Card username=" Dakshit " warfare='biological' myArr={newArr}/> /* we can put it as much as we want but information will be same, to change info for each card, we use props */
    </>
  )
}

export default App
