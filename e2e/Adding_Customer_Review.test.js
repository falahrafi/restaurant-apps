const assert = require('assert');

/* eslint-disable no-undef */
Feature('Adding Customer Review');

Scenario('adding one customer review on one restaurant', async ({ I }) => {
  I.amOnPage('/');

  I.seeElement('.restaurant__btn-to-detail');
  I.click(locate('.restaurant__btn-to-detail').first());

  I.seeElement('.add-review');

  const firstReviewName = 'Bradley E2E';
  const firstRevieContent = 'Harganya cukup terjangkau, makanannya enak!';
  I.fillField('#reviewName', firstReviewName);
  I.fillField('#reviewContent', firstRevieContent);

  I.click('#submitReview');

  const submittedReviewName = await I.grabTextFrom(locate('#custReviews .detail-reviews-block h4').last());
  const submittedReviewContent = await I.grabTextFrom(locate('#custReviews .detail-reviews-block p').last());

  assert.strictEqual(firstReviewName, submittedReviewName);
  assert.strictEqual(firstRevieContent, submittedReviewContent);
});
