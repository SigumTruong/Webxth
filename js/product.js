const products = [
    { id: 1, name: 'Grey Hoodie', image: 'images/item1.jpg', price: 18.00, rating: 5.0, category: 'cat' },
    { id: 2, name: 'Red Hoodie', image: 'images/item2.jpg', price: 22.00, rating: 4.8, category: 'dog' },
    { id: 3, name: 'Blue Leash', image: 'images/item3.jpg', price: 12.50, rating: 4.7, category: 'dog' },
    { id: 4, name: 'Yellow Sweater', image: 'images/item4.jpg', price: 30.00, rating: 4.9, category: 'cat' },
    { id: 5, name: 'Pink Collar', image: 'images/item5.jpg', price: 10.00, rating: 4.5, category: 'bird' },
    { id: 6, name: 'Cat Scratching Post', image: 'images/item6.jpg', price: 40.00, rating: 4.6, category: 'cat' },
    { id: 7, name: 'Dog Chew Toy', image: 'images/item7.jpg', price: 8.99, rating: 4.4, category: 'dog' },
    { id: 8, name: 'Bird Food Mix', image: 'images/item8.jpg', price: 15.50, rating: 4.7, category: 'bird' },
    { id: 9, name: 'Cat Bed', image: 'images/item9.jpg', price: 35.00, rating: 4.8, category: 'cat' },
    { id: 10, name: 'Fish Tank', image: 'images/item10.jpg', price: 120.00, rating: 5.0, category: 'fish' },
    { id: 11, name: 'Dog Treat Bag', image: 'images/item11.jpg', price: 5.99, rating: 4.2, category: 'dog' },
    { id: 12, name: 'Bird Cage', image: 'images/item12.jpg', price: 50.00, rating: 4.8, category: 'bird' },
    { id: 13, name: 'Cat Toy Set', image: 'images/item13.jpg', price: 25.00, rating: 4.6, category: 'cat' },
    { id: 14, name: 'Pet Shampoo', image: 'images/item14.jpg', price: 9.99, rating: 4.3, category: 'dog' },
    { id: 15, name: 'Hamster Wheel', image: 'images/item15.jpg', price: 18.00, rating: 4.7, category: 'hamster' },
    { id: 16, name: 'Fish Food', image: 'images/item16.jpg', price: 5.50, rating: 4.5, category: 'fish' },
    { id: 17, name: 'Dog Harness', image: 'images/item1.jpg', price: 25.00, rating: 4.9, category: 'dog' },
    { id: 18, name: 'Bird Feeder', image: 'images/item3.jpg', price: 12.99, rating: 4.6, category: 'bird' },
    { id: 19, name: 'Reptile Heating Lamp', image: 'images/item5.jpg', price: 35.00, rating: 4.4, category: 'reptile' },
    { id: 20, name: 'Guinea Pig Cage', image: 'images/item7.jpg', price: 45.00, rating: 4.7, category: 'hamster' }
];
function generateProductHTML(product) {
    return `
      <div class="item ${product.category} col-md-4 col-lg-3 my-4">
        <div class="card position-relative">
          <a href="productDetail.html"><img src="${product.image}" class="img-fluid rounded-4" alt="${product.name}"></a>
          <div class="card-body p-3">
            <a href="productDetail.html">
              <h5 class="card-title mb-2 text-center">${product.name}</h5>
            </a>
            <div class="card-text text-center">
              <span class="rating d-block mb-2">
                ${'★'.repeat(product.rating)} ${product.rating.toFixed(1)}
              </span>
              <h4 class="text-primary mb-3">$${product.price.toFixed(2)}</h4>
              <div class="d-flex justify-content-center gap-2">
                <a href="#" class="btn btn-primary px-3 py-2">
                  <i class="fas fa-shopping-cart me-2"></i> Add to Cart
                </a>
                <a href="#" class="btn btn-outline-danger px-3 py-2">
                  <iconify-icon icon="fluent:heart-28-filled"></iconify-icon>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
}
function renderProducts(products) {
    const container = document.querySelector('.isotope-container');
    if (container) {
        container.innerHTML = products.map(product => generateProductHTML(product)).join('');
    }
}
renderProducts(products);
