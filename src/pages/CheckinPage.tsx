import { useLocation } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import CheckinForm from '../components/CheckinForm/CheckinForm';

export default function CheckinPage() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const token = params.get('token');

  return (
    <>
      <Header />
      <CheckinForm token={token} />
      <Footer />
    </>
  );
}
