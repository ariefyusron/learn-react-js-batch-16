import { useState, useEffect } from 'react'

import Header from '../components/Header'
import Form from '../components/Form'
import { useCustomHook } from '../hooks/useApp'

const App = () => {
  const [todolist, setTodolist] = useState([])
  const [count, setCount] = useState(0)
  const [input, setInput] = useState({
    name: '',
    age: ''
  })

  const time = useCustomHook()

  useEffect(() => {
    console.log('test useEffect')
  }, [])

  useEffect(() => {
    console.log('count berubah')
  },[count])

  const handleAdd = () => {
    console.log('click')
    setTodolist([
      {
        desc: 'cuci motor',
        status: 'todo'
      },
      ...todolist
    ])
  }

  return (
    <>
      <Header />
      <div>
        <p>Hello World</p>

        {todolist.length === 0 ? (
          <p>Belum ada todo</p>
        ) : (
          <ul>
            {todolist.map((item, index) => (
              <li key={index}>{`${item.desc} - ${item.status}`}</li>
            ))}
          </ul>
        )}

        <button onClick={handleAdd}>Tambah</button>

        <br />
        <button
          onClick={() => setCount(count + 1)}>
          count: {count}
        </button>

        <p>{time}</p>
        
        <Form onSubmit={(e) => {
          setInput(e)
        }} />

        <p>{`Name: ${input.name}`}</p>
        <p>{`Age: ${input.age}`}</p>
      </div>
    </>
  )
}

export default App