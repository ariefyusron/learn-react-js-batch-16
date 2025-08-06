import { useEffect, useRef } from 'react'
import { useNavigate, useParams } from 'react-router'

import useTodolist from '../stores/useTodolist'

const FormAddTodoList = ({ isEdit }) => {
  const navigate = useNavigate()
  const { id } = useParams()
  const formRef = useRef(null)

  const setList = useTodolist((state) => state.setList)
  const updateList = useTodolist((state) => state.updateList)
  const list = useTodolist((state) => state.list)

  useEffect(() => {
    if(isEdit) {
      formRef.current.desc.value = list[id].desc
      formRef.current.status.value = list[id].status
    }
  },[])

  const goBack = () => {
    navigate(-1)
  }

  const optionsStatus = [
    {
      label: 'Todo',
      value: 'todo'
    },
    {
      label: 'On Progress',
      value: 'onprogress'
    },
    {
      label: 'Done',
      value: 'done'
    }
  ]

  return (
    <div>
      <button onClick={goBack}>Back</button>
      <h1>{isEdit ? 'Edit' : 'Tambah'}</h1>

      <form
        ref={formRef}
        defaultValue={{
          desc: 'Halo test',
          status: 'done'
        }}
        onSubmit={(e) => {
          e.preventDefault()

          if(isEdit) {
            updateList(id, {
              desc: e.target.desc.value,
              status: e.target.status.value
            })
          } else {
            setList({
              desc: e.target.desc.value,
              status: 'todo'
            })
          }
          
          goBack()
        }}
      >
        <input name='desc' type="text" placeholder='Masukkan Todo' />

        {isEdit && (
          <select name="status">
            {optionsStatus.map((item, index) => (
              <option key={index} value={item.value}>{item.label}</option>
            ))}
          </select>
        )}

        <button type="submit">{isEdit ? 'Simpan' : 'Tambah'}</button>
      </form>
    </div>
  );
}

export default FormAddTodoList;