import { Outlet } from 'react-router'

import Container from './components/Container'

const WrapPage = () => {
  return (
    <Container>
      <Outlet />
    </Container>
  );
}

export default WrapPage;