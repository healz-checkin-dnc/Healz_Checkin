import { useLocation } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import CheckinForm from '../components/CheckinForm/CheckinForm';

export default function CheckinPage() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const prefillData = {
    name: params.get('name') || '',
    cpf: params.get('cpf') || '',
    birthDate: params.get('birthDate') || '',
    phoneNumber: params.get('phoneNumber') || '',
    zipCode: params.get('zipCode') || '',
    street: params.get('street') || '',
    complement: params.get('complement') || '',
    number: params.get('number') || '',
    city: params.get('city') || '',
    state: params.get('state') || '',
  };

  return (
    <>
      <Header />
      <CheckinForm prefillData={prefillData} />
      <Footer />
    </>
  );
}
