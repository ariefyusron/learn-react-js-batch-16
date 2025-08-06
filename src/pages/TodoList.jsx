import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'

import Header from '../components/Header'
import Form from '../components/Form'
import { useCustomHook } from '../hooks/useApp'
import useTodolist from '../stores/useTodolist'

const App = () => {
  const navigate = useNavigate()
  const todolist = useTodolist(state => state.list)
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
    navigate('/create-todolist')
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
              <li key={index}>
                {`${item.desc} - ${item.status}`}
                <button
                  style={{ marginLeft: '12px' }}
                  onClick={() => {
                    navigate(`/edit-todolist/${index}`)
                  }}
                >
                  Edit
                </button>
              </li>
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