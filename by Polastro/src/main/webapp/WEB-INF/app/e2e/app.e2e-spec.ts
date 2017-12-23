import { AngularRestaurantePage } from './app.po';

describe('angular-restaurante App', () => {
  let page: AngularRestaurantePage;

  beforeEach(() => {
    page = new AngularRestaurantePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
