import { AhClientPage } from './app.po';

describe('ah-client App', function() {
  let page: AhClientPage;

  beforeEach(() => {
    page = new AhClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
