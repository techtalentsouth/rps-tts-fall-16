var list = ['poptarts', 'ramen noodles', 'chips', 'salsa', 'coffee'];
list.push('fruit loops');
list[list.indexOf('coffee')] = 'fairtrade coffee';
list.splice(2,2,'beans', 'rice');
console.log("Full List", list);

var cart = [];
cart.push(list.pop());
cart.push(list.shift());

console.log("Pre-while Cart",cart);

while(list.length>0){
    cart.push(list.pop());
}
console.log("Post-while Cart",cart);
cart.sort();
console.log("Sort Cart",cart);
cart.reverse();
console.log("Reverse Sort Cart",cart);
console.log("Empty List ",list);
console.log(cart.join(' , '));


