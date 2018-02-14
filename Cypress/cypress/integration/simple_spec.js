describe('Los estudiantes login', function() {
    it('Visits los estudiantes and fails at login', function() {
        cy.visit('https://losestudiantes.co')
	cy.contains('Cerrar').click()
      	cy.contains('Ingresar').click()
      	cy.get('.cajaLogIn').find('input[name="correo"]').click().type("wrongemail@example1.com")
      	cy.get('.cajaLogIn').find('input[name="password"]').click().type("1234")
      	cy.get('.cajaLogIn').contains('Ingresar').click()
      	cy.contains('El correo y la contraseña que ingresaste no figuran en la base de datos. Intenta de nuevo por favor.')
    })

    it('Visita los estudiantes, registra un estudiante y crea una cuenta ya existente', function() {
	cy.get('.cajaSignUp').find('input[name="nombre"]').click().type("Pedro")
	cy.get('.cajaSignUp').find('input[name="apellido"]').click().type("Picapiedra")
	cy.get('.cajaSignUp').find('input[name="correo"]').click().type("p.picapiedra@uniandes.edu.co")
	cy.get('.cajaSignUp').find('select[name="idPrograma"]').select("Ingeniería de Sistemas y Computación")
	cy.get('.cajaSignUp').find('input[name="password"]').click().type("Prueba2018")
	cy.get('.cajaSignUp').find('input[name="acepta"]').check()
	cy.get('.cajaSignUp').contains('Registrarse').click()
	if(cy.contains('Ok')){
		cy.contains('Ok').click()
        	cy.visit('https://losestudiantes.co')
		cy.contains('Cerrar').click()
      		cy.contains('Ingresar').click()
      		cy.get('.cajaLogIn').find('input[name="correo"]').click().type("p.picapiedra@uniandes.edu.co")
      		cy.get('.cajaLogIn').find('input[name="password"]').click().type("Prueba2018")
      		cy.get('.cajaLogIn').contains('Ingresar').click()
		
		cy.get('.container').find('button[id="cuenta"]').click()
		cy.get('li').contains('Salir').click()

      		cy.contains('Ingresar').click()
		cy.get('.cajaSignUp').find('input[name="nombre"]').click().type("Pedro")
		cy.get('.cajaSignUp').find('input[name="apellido"]').click().type("Picapiedra")
		cy.get('.cajaSignUp').find('input[name="correo"]').click().type("p.picapiedra@uniandes.edu.co")
		cy.get('.cajaSignUp').find('select[name="idPrograma"]').select("Ingeniería de Sistemas y Computación")
		cy.get('.cajaSignUp').find('input[name="password"]').click().type("Prueba2018")
		cy.get('.cajaSignUp').find('input[name="acepta"]').check()
		cy.get('.cajaSignUp').contains('Registrarse').click()
		cy.contains('Ocurrió un error activando tu cuenta')
		cy.contains('Error: Ya existe un usuario registrado con el correo') 
		cy.contains('Ok').click()

			
	}


    })

    it('Pruebe la funcionalidad de búsqueda de profesores', function() {
	cy.visit('https://losestudiantes.co')
	cy.contains('Cerrar').click()
	cy.get('.buscador').find('input[role="combobox"]').click({ force: true }).type("Jaime Alberto Chavarriaga Lozano")
      	cy.contains('Jaime Alberto Chavarriaga Lozano - Ingeniería de Sistemas').click()
    })


    it('Pruebe como dirigirse a la página de un profesor', function() {
	cy.visit('https://losestudiantes.co')
	cy.contains('Cerrar').click()
	cy.get('.btn-group').contains('Alfabético').click()
	cy.contains('Cargar más').click()
	cy.get('.profesor').contains('Adolfo Jose Quiroz Salazar').click()

    })

    it('Pruebe los filtros por materia en la página de un profesor', function() {
	cy.visit('https://losestudiantes.co')
	cy.contains('Cerrar').click()
	cy.get('.btn-group').contains('Alfabético').click()
	cy.contains('Cargar más').click()
	cy.contains('Cargar más').click()
	cy.get('.profesor').contains('Adolfo Jose Quiroz Salazar').click()
	cy.get('.materias').find('input[name="id:MATE1253"]').check()
    })


		
})


