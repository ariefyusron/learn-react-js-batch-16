import { Outlet } from 'react-router'

import Container from './components/Container'

const WrapPage = () => {
  return (
    <Container>
      <Outlet />

      <div>
        <p>Footer</p>
      </div>
    </Container>
  );
}

export default WrapPage;