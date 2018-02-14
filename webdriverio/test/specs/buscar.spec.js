var assert = require('assert');
describe('los estudiantes busqueda profesor', function() {

    it('should visit los estudiantes and log in', function () {
      browser.url('https://losestudiantes.co');
      browser.click('button=Cerrar');
      var selectBox = $('#sample_select');
      browser.selectByValue('#sample_select','universidad-de-los-andes,pregrado,derecho');
      browser.waitForVisible('option', 5000);
      expect(selectBox.getText('option:checked')).toBe('Derecho');
    });

});
