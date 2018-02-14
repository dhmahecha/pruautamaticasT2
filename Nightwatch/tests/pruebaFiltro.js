module.exports = { // adapted from: https://git.io/vodU0  
  'Pruebe los filtros por materia en la página de un profesor': function(browser) {
    browser
      .url('https://losestudiantes.co/')
      .click('.botonCerrar')
      //.useXpath().click("//*[.='Alfabético']")
      //.useXpath().click("//*[contains[text(),'Adolfo Jose Quiroz Salazar']")  	
      //.useXpath().click('//div[@class="jsx-857613539 profesores row"]/div[@class="jsx-633353764 col-md-offset-2 altura col-md-2"]')
      .setValue('input[role="combobox"]', 'Harold Enrique Castro Barrera')     
      .waitForElementVisible('div[class="Select-option is-focused"]', 50000)
      .click('div[class="Select-option is-focused"]')
      .waitForElementVisible('h2[id="universidad"]', 50000)
      .waitForElementVisible('.nombreProfesor', 50000)
      .click('input[name="id:ISIS4426"]')
      .pause(1000)
      .waitForElementVisible('.sobreCalificacion', 50000)
      .assert.containsText('h5[id="profesor_cantidad"]', '1')
      .end();
  }
};


