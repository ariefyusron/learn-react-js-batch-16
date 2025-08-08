import { Suspense } from 'react';
import { Outlet } from 'react-router'

import Container from './components/Container'

const WrapPage = () => {
  return (
    <Container>
      <Suspense fallback={<p>Loading....</p>}>
        <Outlet />
      </Suspense>

      <div>
        <p>Footer</p>
      </div>
    </Container>
  );
}

export default WrapPage;