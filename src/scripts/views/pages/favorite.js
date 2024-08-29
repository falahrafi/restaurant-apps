import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const loadingDiv = document.getElementById('loading');

const Favorite = {
  async render() {
    // Show Spinner
    loadingDiv.style.visibility = 'visible';

    return `
      <section id="content" class="content restaurant-favorite
      ">
        <h1 class="main-title" tabindex="0">Favorite Restaurants</h1>
        <div id="failedMessageContainer"></div>
        <div id="restaurants" class="restaurants">
 
        </div>
      </section>
      <footer>
        <footer-copyright></footer-copyright>
      </footer>
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
      failedMessageContainer.innerHTML = `
        <div class="restaurant-item__not__found">
          <img src='./images/no-favorite-illustration.png' alt="No Favorite Illustration">
          <!-- <img src='https://falahrafi.com/no-favorite-illustration.png' alt="No Favorite Illustration"> -->
          <p>You haven't added any restaurant to your favorite.</p>
        </div>
      `;
    }

    // Hide Spinner
    setTimeout(() => {
      loadingDiv.style.visibility = 'hidden';
    }, 0);
  },
};

export default Favorite;
