import { useState } from 'react'
import data from './data.json';
import './App.css'
import ExtensionCard from './components/ExtensionCard'

function App() {

  return (
    <>
      <div className='App'>
        {data.map(item => (
         <ExtensionCard key={item.id} logo={item.logo} name={item.name} description={item.description} isActive={item.isActive} /> 
        ))}
      </div>
    </>
  )
}

export default App
