const URL = 'http://localhost:3000/'

import getData from "./get-data.mjs"
import fillList from "./fill-list.mjs"

let products = [];

for (let i = 1; i <= 6; i++) {
  products.push(await getData(`${URL}product${i}`))
  fillList(products[i - 1])
}

