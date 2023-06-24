import { useState } from 'react'
import reactLogo from './assets/react.svg'
import lettering_logo_v from '/lettering_logo_v.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="#" target="_blank">
          <img src={lettering_logo_v} className="logo" alt="Stock.io logo" width={400}
         />
        </a>
      </div>
      <h1>Stock.io</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </>
  )
}

export default App
