

// // Select all clickable products (like mobiles)
 const products = document.querySelectorAll('.category1, .category5');
  

// // Loop through all and add click event

  document.querySelectorAll('.product').forEach((product)=>{
  product.addEventListener('click', (e) => {
    e.preventDefault();

//     // Dummy product ID (1 to 100 available on dummyjson.com)
    //  const productId = index + 1;
    const productId = product.dataset.productId);
    

//     // Save selected product ID in localStorage
     localStorage.setItem('selectedProductId', productId);

     

//     // Redirect to product detail page
     window.location.href = 'product.html?id=${productId}';
   });
  });
 






