import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const loadingDiv = document.getElementById('loading');

const Favorite = {
  async render() {
    // Show Spinner
    loadingDiv.style.visibility = 'visible';

    return `
      <div class="content">
        <h1 class="main-title" tabindex="0">Favorite Restaurants</h1>
        <div id="failedMessageContainer"></div>
        <div id="restaurants" class="restaurants">
 
        </div>
      </div>
    `;
  },

  async afterRender() {
    try {
      const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
      const restaurantsContainer = document.querySelector('#restaurants');

      // If there is no restaurant, throw an error
      if (restaurants.length < 1) throw new Error();

      restaurants.forEach((restaurant) => {
        restaurantsContainer.innerHTML
        += createRestaurantItemTemplate(restaurant);
      });
    } catch (Exception) {
      const failedMessageContainer = document.querySelector('#failedMessageContainer');
      failedMessageContainer.innerHTML = '<div class="restaurant-item__not__found">Maaf, data restoran favorit anda tidak dapat ditampilkan :(</div>';
    }

    // Hide Spinner
    setTimeout(() => {
      loadingDiv.style.visibility = 'hidden';
    }, 0);
  },
};

export default Favorite;
