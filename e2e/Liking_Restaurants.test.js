const assert = require('assert');

/* eslint-disable no-undef */
Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.see(
    'Maaf, data restoran favorit anda tidak dapat ditampilkan :(',
    '.restaurant-item__not__found',
  );
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see(
    'Maaf, data restoran favorit anda tidak dapat ditampilkan :(',
    '.restaurant-item__not__found',
  );

  I.amOnPage('/');

  I.seeElement('.restaurant__btn-to-detail');
  const firstRestaurant = locate('.restaurant__btn-to-detail').first();
  const firstRestaurantTitle = await I.grabTextFrom(locate('.restaurant-title').first());
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-item');
  const likedRestaurantTitle = await I.grabTextFrom('.restaurant-title');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});
