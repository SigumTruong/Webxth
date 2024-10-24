interface ProductShop {
    name: string;
    image: string;
    price: number;
    rating: number;
    status: string; // Ví dụ: 'New', 'Sale', 'Sold'
  }
  
  const productShops: ProductShop[] = [
    { name: 'Grey Hoodie', image: 'images/item1.jpg', price: 18.00, rating: 5.0, status: '' },
    { name: 'Red Jacket', image: 'images/item2.jpg', price: 22.00, rating: 4.8, status: 'New' },
    { name: 'Blue Sweater', image: 'images/item3.jpg', price: 25.00, rating: 4.9, status: '' },
    { name: 'Yellow Hoodie', image: 'images/item4.jpg', price: 19.99, rating: 4.5, status: 'Sold' },
    { name: 'Pink T-shirt', image: 'images/item5.jpg', price: 16.00, rating: 4.7, status: '' },
    { name: 'Black Pants', image: 'images/item6.jpg', price: 30.00, rating: 5.0, status: 'Sale' },
    { name: 'White Cap', image: 'images/item7.jpg', price: 12.99, rating: 4.2, status: '' },
    { name: 'Green Vest', image: 'images/item8.jpg', price: 28.50, rating: 4.6, status: 'New' },
    { name: 'Blue Pants', image: 'images/item9.jpg', price: 18.00, rating: 4.4, status: 'Sold' },
    { name: 'Orange Hoodie', image: 'images/item10.jpg', price: 35.00, rating: 4.9, status: '' },
    { name: 'Grey Beanie', image: 'images/item11.jpg', price: 12.50, rating: 4.3, status: '' },
    { name: 'Red Scarf', image: 'images/item12.jpg', price: 20.00, rating: 4.8, status: '' },
    { name: 'Purple Gloves', image: 'images/item13.jpg', price: 15.00, rating: 4.7, status: 'Sale' },
    { name: 'Yellow Hat', image: 'images/item14.jpg', price: 10.00, rating: 4.5, status: '' },
    { name: 'Black Jacket', image: 'images/item15.jpg', price: 45.00, rating: 5.0, status: 'New' }
    // { name: 'Brown Shoes', image: 'images/item16.jpg', price: 40.00, rating: 4.9, status: '' }
  ];

//   Hàm tạo HTML cho mỗi sản phẩm
  function generateProductShopHTML(productShop: ProductShop): string {
    const ratingStars = '★'.repeat(productShop.rating); // Tạo chuỗi sao cho đánh giá
    const statusHTML = productShop.status ? 
      `<div class="z-1 position-absolute rounded-3 m-3 px-3 border border-dark-subtle">${productShop.status}</div>` : '';
  
    return `
      <div class="col-md-4 my-4">
        ${statusHTML}
        <div class="card position-relative">
          <a href="productDetail.html">
            <img src="${productShop.image}" class="img-fluid rounded-4" alt="${productShop.name}">
          </a>
          <div class="card-body p-0">
            <a href="productDetail.html">
              <h3 class="card-title pt-4 m-0">${productShop.name}</h3>
            </a>
            <div class="card-text">
              <span class="rating secondary-font">${ratingStars} ${productShop.rating.toFixed(1)}</span>
              <h3 class="secondary-font text-primary">$${productShop.price.toFixed(2)}</h3>
              <div class="d-flex flex-wrap mt-3">
                <a href="#" class="btn-cart me-3 px-4 pt-3 pb-3">
                  <h5 class="text-uppercase m-0">Add to Cart</h5>
                </a>
                <a href="#" class="btn-wishlist px-4 pt-3">
                  <iconify-icon icon="fluent:heart-28-filled" class="fs-5"></iconify-icon>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
//   Hàm render các sản phẩm lên trang web
  function renderProductShop(productShops: ProductShop[]) {
    const container = document.querySelector('.product-grid');
    if (container) {
      container.innerHTML = productShops.map(productShop => generateProductShopHTML(productShop)).join('');
    }
  }
  
  renderProductShop(productShops);
  