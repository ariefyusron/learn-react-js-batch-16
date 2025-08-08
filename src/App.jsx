import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router'

const Home = lazy(() => import('./pages/Home'))
const Detail = lazy(() => import('./pages/Detail'))
const TodoList = lazy(() => import('./pages/TodoList'))
const PlaceholderApi = lazy(() => import('./pages/PlaceholderApi'))
const LearnTypescript = lazy(() => import('./pages/LearnTypescript'))
const FormAddTodoList = lazy(() => import('./pages/FormAddTodoList'))

const WrapPage = lazy(() => import('./WrapPage'))

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path='/' element={<WrapPage />}>
          <Route index element={<Home />} />
          <Route path='detail' element={<Detail />} />
          <Route path='todolist' element={<TodoList />} />
          <Route path='placeholder' element={<PlaceholderApi />} />
          <Route path='learn-typescript' element={<LearnTypescript />} />
        </Route>

        <Route path='create-todolist' element={<FormAddTodoList />} />
        <Route path='edit-todolist/:id' element={<FormAddTodoList isEdit />} />

        {/* <Route path='home'>
          <Route index element={<Home />} />
          <Route path='detail' element={<Detail />} />
          <Route path='todolist' element={<TodoList />} />
        </Route> */}
      </Routes>
    </Suspense>
  );
}

export default App;