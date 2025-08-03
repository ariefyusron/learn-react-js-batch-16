import { Routes, Route } from 'react-router'

import Home from './pages/Home'
import Detail from './pages/Detail'
import TodoList from './pages/TodoList'

import WrapPage from './WrapPage'


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<WrapPage />}>
        <Route index element={<Home />} />
        <Route path='detail' element={<Detail />} />
        <Route path='todolist' element={<TodoList />} />
      </Route>

      {/* <Route path='home'>
        <Route index element={<Home />} />
        <Route path='detail' element={<Detail />} />
        <Route path='todolist' element={<TodoList />} />
      </Route> */}
    </Routes>
  );
}

export default App;