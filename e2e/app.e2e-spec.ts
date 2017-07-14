import { DynamiclistPage } from './app.po';

describe('dynamiclist App', () => {
  let page: DynamiclistPage;

  beforeEach(() => {
    page = new DynamiclistPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
