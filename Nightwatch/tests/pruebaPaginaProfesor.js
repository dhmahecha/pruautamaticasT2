module.exports = { // adapted from: https://git.io/vodU0  
  'Pruebe como dirigirse a la página de un profesor': function(browser) {
    browser
      .url('https://losestudiantes.co/')
      .click('.botonCerrar')
      //.useXpath().click("//*[.='Alfabético']")
      //.useXpath().click("//*[contains[text(),'Adolfo Jose Quiroz Salazar']")  	
      //.useXpath().click('//div[@class="jsx-857613539 profesores row"]/div[@class="jsx-633353764 col-md-offset-2 altura col-md-2"]')
      .setValue('input[role="combobox"]', 'Jaime Alberto Chavarriaga Lozano')     
      .waitForElementVisible('div[class="Select-option is-focused"]', 50000)
      .click('div[class="Select-option is-focused"]')
      .waitForElementVisible('h2[id="universidad"]', 50000)
      .waitForElementVisible('.nombreProfesor', 50000)
      .assert.containsText('.nombreProfesor', 'Jaime Alberto Chavarriaga Lozano')
      .end();
  }
};


