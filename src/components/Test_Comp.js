import React , {useState} from 'react'

const Test_Comp = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <div>Test_Comp</div>
      <p>{new Date().toLocaleDateString()}</p>
      <p>{counter}</p>
      <button onClick={()=>setCounter(counter+1)}>+</button>
    </div>
  )
}

export default Test_Comp