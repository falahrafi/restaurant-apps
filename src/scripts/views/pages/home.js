import 'regenerator-runtime'; /* for async await transpile */
import RestaurantApiSource from '../../data/restaurantapi-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const loadingDiv = document.getElementById('loading');

const Home = {
  async render() {
    // Show Spinner
    loadingDiv.style.visibility = 'visible';

    return `
      <h1 class="main-title" tabindex="0">Restaurants</h1>
      <div id="failedMessageContainer"></div>
      <div id="restaurants" class="restaurants"></div>
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const restaurantsContainer = document.querySelector('#restaurants');

    try {
      const restaurants = await RestaurantApiSource.homeRestaurant();
      restaurants.forEach((restaurant) => {
        restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      });
    } catch (Exception) {
      const failedMessageContainer = document.querySelector('#failedMessageContainer');
      failedMessageContainer.innerHTML = '<div class="restaurant-item__not__found">Maaf, data restoran tidak dapat ditampilkan :(</div>';
    }

    // Hide Spinner
    setTimeout(() => {
      loadingDiv.style.visibility = 'hidden';
    }, 0);
  },
};

export default Home;
