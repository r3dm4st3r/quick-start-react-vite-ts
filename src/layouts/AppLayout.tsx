import { Outlet } from 'react-router-dom';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

const AppLayout = () => (
  <>
    <Header />
    <main role="main" className="min-h-[calc(100vh-103px)]">
      <Outlet />
    </main>
    <Footer />
  </>
);

export default AppLayout;
