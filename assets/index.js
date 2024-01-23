async function getProducts(){
  const response = await fetch('https://dummyjson.com/products');
  const data = await response.json();
  const products = data.products;

  const result = products.map( function(product){
    return `
      <tr>
      <td class="title">${product.title}</td>
      <td class="thumbnail"><img src="${product.thumbnail}"/></td>
      <td class="price">${product.price}</td>
      </tr>
    `;
  }).join('');

  document.querySelector(".products").innerHTML = result;
}
getProducts();