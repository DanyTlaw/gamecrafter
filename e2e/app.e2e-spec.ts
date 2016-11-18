import { GamecrafterPage } from './app.po';

describe('gamecrafter App', function() {
  let page: GamecrafterPage;

  beforeEach(() => {
    page = new GamecrafterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
