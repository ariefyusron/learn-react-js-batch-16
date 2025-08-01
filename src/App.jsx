import { useState, useEffect } from 'react'

import Header from './components/Header'

const App = () => {
  const [todolist, setTodolist] = useState([])
  const [count, setCount] = useState(0)
  const [input, setInput] = useState({
    name: '',
    age: ''
  })

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


        <h1>Form</h1>
        
        <form
          id="form"
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
              const form = document.getElementById('form')
              form.reset()
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