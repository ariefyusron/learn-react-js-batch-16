import { useNavigate } from 'react-router'

const Container = ({ children }) => {
  const navigate = useNavigate()

  const listButton = [
    {
      label: 'Home',
      page: '/'
    },
    {
      label: 'Detail',
      page: '/detail'
    },
    {
      label: 'TodoList',
      page: '/todolist'
    }
  ]

  return (
    <div>
      <div>
        {listButton.map((item, index) => (
          <button
            key={index}
            onClick={() => {
              navigate(item.page)
            }}
          >
            {item.label}
          </button>
        ))}
      </div>

      {children}
    </div>
  );
}

export default Container;