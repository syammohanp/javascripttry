const items = [
    {name:'milk', price: 10},
    {name:'onion', price: 20},
    {name:'curd', price: 15},
    {name:'icecream', price: 5},
    {name:'bread', price: 12}
]

const filterItems = items.filter((item) => {
    return item.price <= 15
})

const mapItems = items.map((item) => {
    return item.price
})

const findItem = items.find(item => {
    return item.name === 'bread'
})

items.forEach((item) => {
    console.log(item.name);
})

console.log(items);
console.log(filterItems);
console.log(mapItems);
console.log(findItem);