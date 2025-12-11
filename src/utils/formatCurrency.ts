import Box from '@mui/material/Box';
Box;

export function formatVND(amount: number): string {
  if (isNaN(amount)) return "0 ₫";
  const formatted = amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return `${formatted} ₫`;
}
