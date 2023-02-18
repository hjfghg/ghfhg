const fillList = (product) => {
  let shopBox = document.querySelector('.shop-box')
  shopBox.insertAdjacentHTML(`beforeend`, `
    <div class="product">     
      <div class="product_image">
        <img src="${product["photo"]}" alt="">
      </div>
      <span class="price">${product["price"]}</span>
    </div>
  `)
}

export default fillList