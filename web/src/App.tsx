import { useState } from 'react'

import './styles/main.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='max-w-[1280px] mx-auto overflow-hidden flex flex-col items-center my-20'>

        <h1> Stock.io</h1>

      </div>
    </>
  )
}

export default App
