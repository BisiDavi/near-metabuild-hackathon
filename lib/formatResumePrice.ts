export default function formatResumePrice(price: string) {
  const nPrice = Number(price);
  const NEAR_1 = 1000000000000000000000000;
  const actualPrice = nPrice / NEAR_1;
  return actualPrice;
}
