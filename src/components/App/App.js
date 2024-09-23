import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Registration from 'components/Registration';
import MaterialLayout from 'components/Layout/';
import ScrollToAnchor from 'components/ScrollToAnchor';
import { OrderProvider } from 'components/OrderContext';

export default function App() {
  return (
    <>
      <Router>
        <ScrollToAnchor />
        <MaterialLayout>
          <OrderProvider>
            <Routes>
              {/* <Route exact path="/" element=<Home /> /> */}
              <Route exact path="/" element=<Registration /> />
              {/* <Route exact path="/about" element=<About /> />
              <Route exact path="/staff" element=<Staff /> />
              <Route exact path="/schedule" element=<Schedule /> />
              <Route exact path="/seattle" element=<Seattle /> />
              <Route exact path="/contact" element=<Contact /> />
              <Route exact path="/paymentinfo" element=<PaymentExplanation /> />
              <Route path="/registration" element=<Registration /> /> */}
              {/* <Route exact path="/error-contact-support" element=<Error error={`Unexpected payment processing error. Please email ${EMAIL_CONTACT}`} /> /> */}
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </OrderProvider>
        </MaterialLayout>
      </Router>
    </>
  );
}
