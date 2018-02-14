import {browser, by, element, ElementFinder} from 'protractor';

export class TourOfHeroesPage {
  navigateTo() {
    browser.sleep(1000);
    return browser.get('/');
  }

  getTop4Heroes() {
    browser.sleep(1000);
    return element.all(by.css('.module.hero')).all(by.tagName('h4')).getText();
  }

  navigateToHeroes() {
    browser.sleep(1000);
    element(by.linkText('Heroes')).click();
  }

  getAllHeroes() {
    browser.sleep(1000);
    return element(by.tagName('my-heroes')).all(by.tagName('li'));
  }

  enterNewHeroInInput(newHero: string) {
    browser.sleep(1000);
    element(by.tagName('input')).sendKeys(newHero);
     browser.sleep(1000);
    element(by.buttonText('Add')).click();
     browser.sleep(1000);
  }

  getAHero(hero: string){
    element(by.tagName('input')).sendKeys(hero);
    element(by.cssContainingText('.search-result', hero)).click();
    var input = element(by.tagName('input'));	
    browser.sleep(1000);
    return input.getAttribute('ng-reflect-model');
  }
 

 searchAHero(hero: string){
	var heroEencontrado = element(by.tagName('my-heroes')).all(by.tagName('li')).filter(function(elem, index) {
	  return elem.all(by.tagName('span')).get(1).getText().then(function(text) {
	    return text === hero;
	  });
	}).first();

	var nombreHeroe = heroEencontrado.element(by.css('.badge')).getText();
	browser.sleep(1000);
	return nombreHeroe;
  }

 deleteAHero(hero: string){
	var heroEencontrado = element(by.tagName('my-heroes')).all(by.tagName('li')).filter(function(elem, index) {
	  return elem.all(by.tagName('span')).get(1).getText().then(function(text) {
	    return text === hero;
	  });
	}).first();
	browser.sleep(1000);
	var nombreHeroe = heroEencontrado.element(by.css('.badge')).getText();
	heroEencontrado.element(by.buttonText('x')).click();
	browser.sleep(1000);
	return nombreHeroe;
  }

  editAHero(hero: string, newHeroName: string){
	var heroeEncontrado = element(by.tagName('my-heroes')).all(by.tagName('li')).filter(function(elem, index) {
	  return elem.all(by.tagName('span')).get(1).getText().then(function(text) {
	    return text === hero;
	  });
	}).first();

	browser.sleep(1000);
	var nombreHeroe = heroeEncontrado.element(by.css('.badge')).getText();
	heroeEncontrado.click();
	browser.sleep(1000);
	element(by.partialButtonText('View')).click();
	var inputHero = element(by.tagName('input'));
	inputHero.clear()
	inputHero.sendKeys(newHeroName);
	element(by.buttonText('Save')).click();
	browser.sleep(1000);
	return newHeroName;
  }

  dashboardHero(hero: string){
	console.log(element(by.css('.grid grid-pad')).all(by.tagName('div')).first().getAttribute('class'));
	/*var heroeEncontrado = element(by.css('.grid grid-pad')).all(by.tagName('div')).filter(function(elem, index) {
	  
	  return elem.all(by.css('module hero')).first().element(by.tagName('h4')).getText().then(function(text) {
	    return text === hero;
	  });
	}).first();

	heroeEncontrado.click()*/
	browser.sleep(1000);

  }

  navegarHeroDesdeLista(hero: string){
	var heroeEncontrado = element(by.tagName('my-heroes')).all(by.tagName('li')).filter(function(elem, index) {
	  return elem.all(by.tagName('span')).get(1).getText().then(function(text) {
	    return text === hero;
	  });
	}).first();

	browser.sleep(1000);
	var nombreHeroe = heroeEncontrado.element(by.css('.badge')).getText();
	heroeEncontrado.click();
	browser.sleep(1000);
	element(by.partialButtonText('View')).click();
	var inputHero = element(by.tagName('input'));
	var nombreHero = inputHero.getAttribute('ng-reflect-model')
	element(by.buttonText('Back')).click();
	browser.sleep(1000);
	return nombreHero;
  }  

}
