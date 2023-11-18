import UrlParser from '../../routes/url-parser';
import RestaurantApiSource from '../../data/restaurantapi-source';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';

const loadingDiv = document.getElementById('loading');

const Detail = {
  async render() {
    // Show Spinner
    loadingDiv.style.visibility = 'visible';

    return `
      <div id="likeButtonContainer"></div>
      <div id="restaurant" class="restaurant"></div>
      <div id="failedMessageContainer"></div>
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()

    try {
      const url = UrlParser.parseActiveUrlWithoutCombiner();
      const restaurantsContainer = document.querySelector('#restaurant');

      let restaurant = await RestaurantApiSource.detailRestaurant(url.id);
      restaurantsContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

      LikeButtonPresenter.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        restaurant: {
          id: restaurant.id,
          name: restaurant.name,
          city: restaurant.city,
          description: restaurant.description,
          pictureId: restaurant.pictureId,
          rating: restaurant.rating,
        },
      });

      const foodsContainer = document.querySelector('#detailFoods');
      restaurant.menus.foods.forEach((food) => {
        foodsContainer.innerHTML += `<p tabindex="0">${food.name}</p>`;
      });

      const drinksContainer = document.querySelector('#detailDrinks');
      restaurant.menus.drinks.forEach((drink) => {
        drinksContainer.innerHTML += `<p tabindex="0">${drink.name}</p>`;
      });

      const reviewsContainer = document.querySelector('#custReviews');

      const loadReviews = () => {
        restaurant.customerReviews.forEach((review) => {
          reviewsContainer.innerHTML += `
        <div class="detail-reviews-block">
          <h4 tabindex="0">${review.name}</h4>
          <h5 tabindex="0">${review.date}</h5>
          <p tabindex="0">${review.review}</p>
        </div>
      `;
        });
      };

      loadReviews();

      const buttonSubmitReview = document.querySelector('#submitReview');
      buttonSubmitReview.addEventListener('click', async () => {
        const reviewName = document.querySelector('#reviewName').value;
        const reviewContent = document.querySelector('#reviewContent').value;

        // Add review asynchronously
        const responseReview = await RestaurantApiSource.addReview({
          id: url.id,
          name: reviewName,
          review: reviewContent,
        });

        // Refresh the restaurant detail values
        restaurant = await RestaurantApiSource.detailRestaurant(url.id);

        // Clear previous reviews, then reload with the new review
        reviewsContainer.innerHTML = '';
        loadReviews();

        // Reset add review values
        document.querySelector('#reviewName').value = '';
        document.querySelector('#reviewContent').value = '';

        console.log(responseReview);
      });
    } catch (Exception) {
      const failedMessageContainer = document.querySelector('#failedMessageContainer');
      failedMessageContainer.innerHTML = '<div class="restaurant-item__not__found">Maaf, detail restoran tidak dapat ditampilkan :(</div>';
    }

    // Hide Spinner
    setTimeout(() => {
      loadingDiv.style.visibility = 'hidden';
    }, 0);
  },
};

export default Detail;
