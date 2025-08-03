import { useState } from 'react'

const Detail = () => {
  const [count, setCount] = useState(localStorage.getItem('count') ?? 0)
  const handleChangeCount = () => {
    localStorage.setItem('count', Number(count) + 1)
    setCount(Number(count) + 1)
  }

  return (
    <div>
      <h1>Detail</h1>
      <p>count: {count}</p>
      <button onClick={handleChangeCount}>count</button>
    </div>
  );
}

export default Detail;