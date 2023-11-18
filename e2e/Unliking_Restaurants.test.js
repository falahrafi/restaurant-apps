const assert = require('assert');

/* eslint-disable no-undef */
Feature('Unliking Restaurants');

Before(async ({ I }) => {
  I.amOnPage('/#/favorite');
  I.see(
    'Maaf, data restoran favorit anda tidak dapat ditampilkan :(',
    '.restaurant-item__not__found',
  );

  I.amOnPage('/');

  I.seeElement('.restaurant__btn-to-detail');
  const firstRestaurant = locate('.restaurant__btn-to-detail').first();
  const firstRestaurantTitle = await I.grabTextFrom('.restaurant-title');
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-item');
  const likedRestaurantTitle = await I.grabTextFrom('.restaurant-title');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

Scenario('unliking the restaurant', ({ I }) => {
  I.seeElement('.restaurant__btn-to-detail');
  I.click('.restaurant__btn-to-detail');

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.see(
    'Maaf, data restoran favorit anda tidak dapat ditampilkan :(',
    '.restaurant-item__not__found',
  );
});
