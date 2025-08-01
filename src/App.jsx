import { useState } from 'react'

import Header from './components/Header'

const App = () => {
  const [todolist, setTodolist] = useState([])
  const [input, setInput] = useState('')
  const [saveInput, setSaveInput] = useState('')

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

  const renderText = () => {
    if(saveInput === '') {
      if(input === ''){
        return 'Tidak ada input'
      } else {
        return 'typing...'
      }
    } else {
      return saveInput
    }
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


        <h1>Form</h1>
        <input
          placeholder='Masukkan Nama'
          value={input}
          onChange={(e) => {
            setInput(e.target.value)
          }}
        />
        <button
          onClick={() => {
            setInput('')
          }}
          disabled={input === ''}
        >
          Clear
        </button>

        <br />

        <button
          onClick={() => {
            setSaveInput(input)
            setInput('')
          }}
          disabled={input === ''}
        >
          Submit
        </button>
        <p>{renderText()}</p>
      </div>
    </>
  )
}

export default App