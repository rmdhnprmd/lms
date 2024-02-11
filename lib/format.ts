export const formatPrice = (price: number | bigint ) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR"
  }).format(price)
}