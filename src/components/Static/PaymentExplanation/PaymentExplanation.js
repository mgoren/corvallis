import { StyledPaper, Title } from 'components/Layout/SharedStyles';
import { Typography } from '@mui/material';
import { Paragraph } from 'components/Layout/SharedStyles';

export function PaymentExplanation() {
  return (
    <StyledPaper>
      <Title>Sliding Scale Explanation</Title>
      <Typography>$100 (standard fee)</Typography>
      <Typography>$120 (a nice donation)</Typography>
      <Typography>$150 (a generous donation)</Typography>
      <Paragraph>If you requested a scholarship, just leave it at $100, select "pay by check" at checkout, and we will be in touch with you.</Paragraph>
    </StyledPaper>
  );
}

export function SlidingScaleSummaryExplanation() {
  return (
    <>
      <Typography>$100 (standard fee)</Typography>
      <Typography>$120 (nice)</Typography>
      <Typography>$150 (real nice)</Typography>
    </>
  )
}
