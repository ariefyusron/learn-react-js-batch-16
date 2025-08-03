import { useNavigate } from 'react-router'

import useTodolist from '../stores/useTodolist'

const FormAddTodoList = () => {
  const navigate = useNavigate()
  const setList = useTodolist((state) => state.setList)

  const goBack = () => {
    navigate(-1)
  }

  return (
    <div>
      <button onClick={goBack}>Back</button>
      <h1>FormAddTodoList</h1>

      <form
        onSubmit={(e) => {
          e.preventDefault()
          setList({
            desc: e.target.desc.value,
            status: 'todo'
          })
          goBack()
        }}
      >
        <input name='desc' type="text" placeholder='Masukkan Todo' />
        <button type="submit">Tambah</button>
      </form>
    </div>
  );
}

export default FormAddTodoList;