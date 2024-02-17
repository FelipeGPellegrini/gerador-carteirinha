import './App.css'
import { useState } from 'react'
import Header from './components/Header'
import Form from './components/Form'
import Card from './components/Card'

function App() {

  const [variables, setVariables] = useState<[string, number, number, string] | null>(null)

  function getVariables(name: string, block: number, apartment: number, urlImg: string) {
    setVariables([name, block, apartment, urlImg])
    console.log(urlImg)
  }

  return (
    <>
      <Header/>
      <Form onSubmit={getVariables}/>
      <Card variables={variables}/>
    </>
  )
}

export default App
