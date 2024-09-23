import { useState } from "react";
import { useOrder } from 'components/OrderContext';
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import MainForm from "components/MainForm";
import Checkout from "components/Checkout";
import Confirmation from "components/Confirmation";
import Error from "components/Error";
import Header from 'components/Header';
import IntroHeader from 'components/Header/IntroHeader';
import OrderSummary from "components/OrderSummary";
import { Typography, Checkbox } from "@mui/material";
import { StyledPaper, Paragraph, StyledLink } from 'components/Layout/SharedStyles';
import config from 'config';
const { PAYMENT_METHODS, PAYPAL_OPTIONS, TITLE, CONFIRMATION_CHECK_TITLE, CONFIRMATION_PAYPAL_TITLE, SANDBOX_MODE, SHOW_PRE_REGISTRATION } = config;

export default function Registration() {
  const [registering, setRegistering] = useState(false);
  return (
    SHOW_PRE_REGISTRATION || (SANDBOX_MODE && window.location.hostname !== 'localhost') ? (
      registering ? <RealRegistration /> : <PreRegistration setRegistering={setRegistering} />
    ) : <RealRegistration />
  );
}

const PreRegistration = ({ setRegistering }) => {
  return(
    <StyledPaper>
      <Typography variant="h4" color='error' sx={{ fontWeight: "bold"}}>TEST MODE ONLY</Typography>
      <Typography variant="h6">DO NOT USE FOR ACTUAL REGISTRATION</Typography>
      <p>Please read the Covid Policy and Safety Policy for the 2025 Corvallis Contra Dance Weekend:</p>
      <ul>
        <li><StyledLink to='https://corvallisfolklore.org/home/ccw-faq/#Covid'>Covid Policy</StyledLink> (will open in a new tab)</li>
        <li><StyledLink to='https://corvallisfolklore.org/home/dance-safety-policy/'>Safety Policy</StyledLink> (will open in a new tab)</li>
      </ul>
      <Paragraph sx={{ lineHeight: 2, mt: 4 }}>
        I acknowledge that I have read and agree to follow both the Covid Policy and the Safety Policy for the 2025 Corvallis Contra Dance Weekend. 
        If I am registering multiple people, I acknowledge that everyone has read and agreed to these policies.
        <Checkbox onChange={() => setRegistering(true)} />
      </Paragraph>
    </StyledPaper>
  );
}

const RealRegistration = () => {
  const { order, currentPage, error } = useOrder();
  const CONFIRMATION_TITLE = order.paymentId === 'check' ? CONFIRMATION_CHECK_TITLE : CONFIRMATION_PAYPAL_TITLE;

  const content = (
    <>
      {error && <Error />}

      <Header titleText={currentPage === 'confirmation' ? CONFIRMATION_TITLE : TITLE}>
        {currentPage === 1 && <IntroHeader />}
        {currentPage === 'checkout' && <OrderSummary order={order} currentPage={currentPage} />}
      </Header>

      {isFinite(currentPage) && <MainForm />}
      {currentPage === 'checkout' && <Checkout />}
      {currentPage === 'confirmation' && <Confirmation />}
    </>
  )

  return PAYMENT_METHODS.includes('paypal') ?
    <PayPalScriptProvider options={PAYPAL_OPTIONS}>
      {content}
    </PayPalScriptProvider>
  : content;
}
