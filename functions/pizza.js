var orderCount = 2;
const takeOrder = (topping, crustType) => {
  var orderCount = orderCount + 1
  console.log('Order: ' + crustType + ' pizza topped with ' + topping);
};
const getSubTotal = (itemCount) => {
  return itemCount * 7.5
};
const getTax = (orderCount) => {
 return getSubTotal(orderCount) * 0.06
};
const getTotal = () => {
  return getSubTotal(orderCount) + getTax(orderCount);
};

takeOrder('mushrooms');
takeOrder("bacon", "thin");
takeOrder("sausage", "thick");
takeOrder("pineapple", "crisp");
console.log(getSubTotal(orderCount))
console.log(getTotal)
