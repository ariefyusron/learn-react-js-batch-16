import { useNavigate, useLocation } from 'react-router'

import './containerStyle.css'

const Container = ({ children }) => {
  const navigate = useNavigate()
  const location = useLocation()

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
            className={location.pathname === item.page ? 'button-active' : ''}
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