import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
   <h1 class="main-title" tabindex="0">${restaurant.name}</h1>
   <div class="detail-card">
      <img class="detail-image" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
      <div class="detail-info">
         <h4 tabindex="0"><i class="fas fa-map-marker-alt"></i>&ensp;Alamat</h4>
         <p tabindex="0">${restaurant.address}</p>
         <h4 tabindex="0"><i class="fas fa-city"></i>&ensp;Kota</h4>
         <p tabindex="0">${restaurant.city}</p>
         <h4 tabindex="0"><i class="fas fa-align-right"></i>&ensp;Deskripsi</h4>
         <p class="desc" tabindex="0">${restaurant.description}</p>
      </div>
   </div>
   <div class="detail-card">
      <div class="detail-menus">
         <h3 tabindex="0"><i class="fas fa-utensils"></i>&ensp;Makanan</h3>
         <div id="detailFoods"></div>
      </div>
      <div class="detail-menus">
         <h3 tabindex="0"><i class="fas fa-mug-hot"></i>&ensp;Minuman</h3>
         <div id="detailDrinks"></div>
      </div>
   </div>
   <div class="detail-card detail-reviews">
      <h3 tabindex="0"><i class="fas fa-star"></i>&ensp;Customer Reviews</h3>
      <div class="detail-reviews-block add-review">
        <h4 tabindex="0">Tuliskan Review Anda</h4>
        <input type="text" name="reviewName" id="reviewName" placeholder="Masukkan nama anda..." />
        <textarea name="reviewContent" id="reviewContent" rows="4" placeholder="Masukkan ulasan anda terhadap restoran ini..."></textarea>
        <button id="submitReview"><i class="fas fa-signature"></i> Review</button>
      </div>
      <div id="custReviews"></div>
   </div>
`;

const createRestaurantItemTemplate = (restaurant) => `
   <div class="restaurant-item card" tabindex="0" aria-label="${restaurant.name} Restaurant">
      <img class="restaurant-image lazyload" data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="The Image of ${restaurant.name}">
      <span class="restaurant-city" tabindex="0" aria-label="Located in ${restaurant.city}">${restaurant.city}</span>
      <div class="restaurant-info">
         <p class="restaurant-rating" tabindex="0" aria-label="The rating is ${restaurant.rating}">⭐️ Rating: ${restaurant.rating}</p>
         <h2 class="restaurant-title">${restaurant.name}</h2>
         <p class="restaurant-desc" tabindex="0" aria-label="The description is the following: ${restaurant.description}">${restaurant.description}</p>
         <a href="${`#/detail/${restaurant.id}`}" class="restaurant__btn-to-detail">Detail&ensp;<i class="fas fa-external-link-alt"></i></a>
      </div>
   </div>
`;

const createLikeMovieButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="far fa-heart" aria-hidden="true"></i>
  </button>
`;

const createUnlikeMovieButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fas fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeMovieButtonTemplate,
  createUnlikeMovieButtonTemplate,
};
