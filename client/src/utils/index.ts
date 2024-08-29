export const fixLength = (str: string, maxLen: number) => {
  if (str.length > maxLen) {
    return str.slice(0, maxLen) + "...";
  }
  return str;
};

export const capitalize = (str: string) => {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export const priceOfCart = (cartItems: any[]) => {
  let sum = 0;

  cartItems?.forEach((item) => {
    sum += parseInt(item.price) * item.quantity;
  });

  return sum;
};
