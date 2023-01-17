import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const Header = lazy(() => import('../components/common/Header'))
const Footer = lazy(() => import('../components/common/Footer'))

const AppLayout = () => (
  <>
    <Suspense fallback="loading...">
      <Header />
    </Suspense>
    <main role="main" className="min-h-[calc(100vh-103px)]">
      <Outlet />
    </main>
    <Suspense fallback="loading...">
      <Footer />
    </Suspense>
  </>
);

export default AppLayout;
