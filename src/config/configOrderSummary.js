import { FIELD_CONFIG } from './configFields';

const config = {
  ORDER_SUMMARY_OPTIONS: [
    { property: 'nametag', label: 'Button' },
    { property: 'email', label: 'Email' },
    { property: 'phone', label: 'Phone' },
    { property: 'address', label: 'Address' },
    { property: 'share', label: 'Roster', defaultValue: 'do not share' },
    { property: 'carpool', label: 'Share for carpool list', mapping: FIELD_CONFIG['carpool'].options },
    { property: 'volunteer', label: 'Volunteer', mapping: FIELD_CONFIG['volunteer'].options },
    { property: 'scholarship', label: 'Scholarship', mapping: FIELD_CONFIG['scholarship'].options },
    { property: 'comments', label: 'Comments' },
    // { property: 'admission', label: 'Admission Cost' },
  ]
}

export default config;
