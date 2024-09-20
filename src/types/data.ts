export const transactions: TransactionType[] = [
  {
    reference: "12",
    name: "Zenith Bank",
    user: "Philip Joe",
    date: "10 may 2024, 08:00 AM",
    type: "Withdrawal",
    description: "Payment by Don Alpha",
    amount: 50000.0,
    fee: 10,
    status: "Pending",
  },
  {
    reference: "17",
    name: "Opay",
    user: "Philip Joe",
    date: "05 may 2024, 02:00 PM",
    type: "Transfer",
    description: "Payment by Don Alpha",

    amount: 2500.0,
    fee: 10,
    status: "Success",
  },
  {
    reference: "90",
    name: "Deposit",
    user: "Philip Joe",
    date: "29 may 2024, 07:30 PM",
    type: "Deposit",
    description: "Payment by Don Alpha",

    amount: 12500.0,
    fee: 10,
    status: "Success",
  },
  {
    reference: "33",
    name: "Deposit",
    user: "Philip Joe",
    date: "15 may 2024, 08:00 PM",
    type: "Deposit",
    description: "Payment by Don Alpha",

    amount: 3100.0,
    fee: 10,
    status: "Success",
  },
  {
    reference: "83",
    name: "Deposit",
    user: "Philip Joe",
    date: "10 may 2024, 08:00 AM",
    type: "Deposit",
    description: "Payment by Don Alpha",

    amount: 100000.0,
    fee: 10,
    status: "Failed",
  },
];
export type TransactionType = {
  reference: string;
  name: string;
  user: string;
  date: string;
  type: string;
  amount: number;
  description: string;
  fee: number;
  status: string;
};
export const metricData = [
  {
    title: "Total Balance",
    value: "15,456.00",
  },
];

export const quickActions = [
  {
    icon: "qrcode",
    title: "Create QR Code",
    description: "Create a QR code to receive payments",
  },
  {
    icon: "send",
    title: "Send Money",
    description: "Send money to your friends and customers",
  },
  {
    icon: "withdraw",
    title: "Withdraw",
    description: "Withdraw your funds to your bank account",
  },
  {
    icon: "deposit",
    title: "Deposit",
    description: "Make a deposit to your account",
  },
];
