describe('e2e: main', function() {

  var ptor;

  beforeEach(function() {
    browser.get('/');
    ptor = protractor.getInstance();
  });

  it('should load the home page', function() {
    var ele = by.id('home');
    expect(ptor.isElementPresent(ele)).toBe(true);
  });

  it('the input box should go away on submit', function() {
    element(by.input('repo.name')).sendKeys('angular/angular.js\n');
    expect(ptor.isElementPresent(by.id('repoform'))).toBe(false);
  });

  describe('listing page', function() {
    beforeEach(function() {
      element(by.input('repo.name')).sendKeys('angular/angular.js\n');
    });

    it('should have 30 issues', function() {
      var elems = element.all(by.repeater('d in data'));
      expect(elems.count()).toBe(30);
    });

    it('includes a user gravatar per-element', function() {
      var elems = element.all(by.repeater('d in data'));
      elems.first().then(function(elm) {
        elm.findElement(by.tagName('img')).then(function(img) {
          img.getAttribute('src').then(function(src) {
            expect(src).toMatch(/gravatar\.com\/avatar/);
          });
        })
      });
    });

  });

  describe('page navigation', function() {
    var link;
    beforeEach(function() {
      link = element(by.css('.header ul li:nth-child(2)'));
      link.click();
    });

    it('should navigate to the /about page when clicking', function() {
      expect(ptor.getCurrentUrl()).toMatch(/\/about/);
    });

    it('should add the active class when at /about', function() {
      expect(link.getAttribute('class')).toMatch(/active/);
    });

  });

});