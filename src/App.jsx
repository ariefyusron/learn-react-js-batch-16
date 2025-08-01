import { useState, useEffect, useRef } from 'react'

import Header from './components/Header'
import { useCustomHook } from './hooks/useApp'

const App = () => {
  const [todolist, setTodolist] = useState([])
  const [count, setCount] = useState(0)
  const [input, setInput] = useState({
    name: '',
    age: ''
  })

  const time = useCustomHook()

  const form = useRef(null)

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
        <h1>Form</h1>
        
        <form
          ref={form}
          onSubmit={e => {
            e.preventDefault()
            setInput({
              name: e.target.name.value,
              age: e.target.age.value
            })
            e.target.reset()
          }}
        >
          <input
            name="name"
            placeholder='Masukkan Nama'
          />
          <br />

          <input
            name="age"
            placeholder='Masukkan Umur'
          />

          <br />

          <button
            onClick={() => {
              form.current.reset()
            }}
          >
            Cancel
          </button>
          <button
            type='submit'
          >
            Submit
          </button>
        </form>

        <p>{`Name: ${input.name}`}</p>
        <p>{`Age: ${input.age}`}</p>
      </div>
    </>
  )
}

export default App