// Premium plan test data
export const PREMIUM_TEST_DATA = [
  // Test at 0 days
  {
    balance: 1490000,
    days: 0,
    result: 1490000, // No additional interest
  },
  // Test at 20 days
  {
    balance: 1740000,
    days: 20,
    result: 1740000, // No additional interest
  },
  // Test at 30 days
  {
    balance: 1310000,
    days: 30,
    result: 1310000, // No additional interest
  },
  // Test at 31 days
  {
    balance: 1460000,
    days: 31,
    result: 1460000, // No additional interest
  },
  // Test at 45 days
  {
    balance: 1234567.0,
    days: 45,
    result: 1234567.0, // No additional interest
  },
  // Test at 46 days
  {
    balance: 1200000,
    days: 46,
    result: 1205000, // (1200000 * 0.05) / 12 + 1200000
  },
  // Test at 365 days
  {
    balance: 1500000,
    days: 365,
    result: 1506250, // (1500000 * 0.05) / 12 + 1500000
  },
  // Test at 366 days
  {
    balance: 1500000,
    days: 366,
    result: 1506250, // (1500000 * 0.05) / 12 + 1500000
  },
];

// Student plan test data
export const STUDENT_TEST_DATA = [
  // Test at 0 days
  {
    balance: 1350000,
    days: 0,
    result: 1350000, // No additional interest
  },
  // Test at 20 days
  {
    balance: 1570000,
    days: 20,
    result: 1570000,  // No additional interest
  },
  // Test at 30 days
  {
    balance: 1420000,
    days: 30,
    result: 1420000, // No additional interest
  },
  // Test at 31 days
  {
    balance: 1680000,
    days: 31,
    result: 1684200,  // (1680000 * 0.03) / 12 + 1680000
  },
  // Test at 45 days
  {
    balance: 1234567.0,
    days: 45,
    result: 1237653.42,
  },
  // Test at 46 days
  {
    balance: 1780000,
    days: 46,
    result: 1784450, // (1780000 * 0.03) / 12 + 1780000
  },
  // Test at 365 days
  {
    balance: 1360000,
    days: 365,
    result: 1363400, // (1360000 * 0.03) / 12 + 1360000
  },
  // Test at 366 days
  {
    balance: 1540000,
    days: 366,
    result: 1540000, // No additional interest
  },
];

// Basic plan test data
export const BASIC_TEST_DATA = [
  // Test at 0 days
  {
    balance: 1230000,
    days: 0,
    result: 1230000, // No additional interest
  },
  // Test at 20 days
  {
    balance: 1400000,
    days: 20,
    result: 1400000, // No additional interest
  },
  // Test at 30 days
  {
    balance: 1100000,
    days: 30,
    result: 1100000, // No additional interest
  },
  // Test at 31 days
  {
    balance: 1350000,
    days: 31,
    result: 1351125, // (1350000 * 0.01) / 12 + 1350000
  },
  // Test at 45 days
  {
    balance: 1234567.0,
    days: 45,
    result: 1235595.81,
  },
  // Test at 46 days
  {
    balance: 1330000,
    days: 46,
    result: 1331108.33, // (1330000 * 0.01) / 12 + 1330000
  },
  // Test at 365 days
  {
    balance: 1350000,
    days: 365,
    result: 1351125, // (1350000 * 0.01) / 12 + 1350000
  },
  // Test at 366 days
  {
    balance: 1400000,
    days: 366,
    result: 1401166.67, // (1400000 * 0.01) / 12 + 1400000
  },
];
