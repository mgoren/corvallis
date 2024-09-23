const config = {
  SANDBOX_MODE: true, // for testing only
  SHOW_PRE_REGISTRATION: true,
  REGISTRATION_ONLY: true,
  ADMISSION_QUANTITY_MAX: 4,
  ADMISSION_COST_RANGE: [100, 150],
  ADMISSION_COST_DEFAULT: 100,
  DEPOSIT_OPTION: false,
  DEPOSIT_COST: 50,
  DONATION_OPTION: true,
  DONATION_MAX: 999,
  INCLUDE_PRONOUNS_ON_NAMETAG: true,
  INCLUDE_LAST_ON_NAMETAG: false,
  PAYMENT_METHODS: ['paypal', 'check'], // options are stripe|paypal|check (first is default)
  EVENT_TITLE: 'Corvallis Contra Weekend',
  EVENT_LOCATION: 'Corvallis, Oregon',
  // EVENT_LOCATION_2: 'Some address',
  EVENT_DATE: 'Feb 14-16, 2025',
  TITLE: 'Corvallis Contra Weekend 2025 Registation',
  CONFIRMATION_PAYPAL_TITLE: 'Corvallis Confirmation',
  CONFIRMATION_CHECK_TITLE: 'Corvallis Registration',
  EMAIL_CONTACT: 'cfs.dance.weekend@gmail.com',
  TECHNICAL_CONTACT: 'contra@mortalwombat.net',
  COVID_POLICY_URL: 'corvallisfolklore.org/home/ccw-faq/',
  SAFETY_POLICY_URL: 'corvallisfolklore.org/home/dance-safety-policy/',
  // DIRECT_PAYMENT_URL: 'example.com/directpayment',
  CHECK_TO: 'Corvallis Folklore Society',
  CHECK_ADDRESS: <>CCW<br />c/o Corvallis Folklore Society<br />PO Box 1690<br />Corvallis OR 97339</>,
  // PAYMENT_DUE_DATE: 'Example Payment Due Date',
  PERSON_INPUT_LABELS: [ 'Your contact information', 'Second admission', 'Third admission', 'Fourth admission' ],
  NUM_PAGES: 2,
  STEPS: [
    {key: 1, label: 'Info'},
    {key: 2, label: 'Payment'},
    {key: 'checkout', label: 'Checkout'}
  ],
};

export default config;
