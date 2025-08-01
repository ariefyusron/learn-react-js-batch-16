import { useRef } from 'react';

const Form = ({ onSubmit }) => {
  const form = useRef(null)

  return (
    <>
      <h1>Form</h1>
        
      <form
        ref={form}
        onSubmit={e => {
          e.preventDefault()
          onSubmit({
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
    </>
  );
}

export default Form;