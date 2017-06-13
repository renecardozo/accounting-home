# Accounting home

Descktop application to allows to have more controller over cost family.

# Installing

Requires:

* MongoDb
* Nodejs

Clone this repsitory: `https://github.com/renecardozo/accounting-home.git`

```bash
git clone https://github.com/renecardozo/accounting-home.git
cd ah-server
npm install
npm dev // for development mode
or
npm  build // trasnpiling the files ecma6
or
npm production // for production mode

API   GASTOS
DESCRIPCION:  API rest que permite listar, registrar, modificar, eliminar los gastos que realizan los miembros de una familia.
Dirección base:  http://localhost:3001/api_gasto/
Servicios disponibles (paths):
get:   /gasto
		URL completa: 	 http://localhost:3001/api_gasto/gasto
	  	Descripción: 	  Este servicio lista todos los gastos registrados en el sistema.
		Ejemplo: 
 
		Errores: 
500: Error al realizar la peticion

get:   /gasto/:gastoId
		URL completa: 	 http://localhost:3001/api_gasto/gasto/:gastoId
	  	Descripción: 	  Este servicio lista  un gasto registrado en el sistema  dado su ID.
		Ejemplo: 
 
Errores: 
500: Error al realizar la petición

post:   /gasto/
		URL completa: 	 http://localhost:3001/api_gasto/gasto/
		Datos Body :
				descripcion
monto
	  	Descripción: 	  Este servicio permite registrar un nuevo gasto en el sistema.
		Ejemplo: 
 
Errores: 
500: Error al guardar en la base de datos
put:   /gasto/:gastoId
		URL completa: 	 http://localhost:3001/api_gasto/gasto/:gastoId
Datos Body :
				descripción
monto

	  	Descripción: 	  Este servicio actualiza la descripción y/o monto de un gasto registrado previamente en el sistema .
		Ejemplo: 
 

Errores: 
500: Error al actualizar el gasto

delete:   /gasto/:gastoId

		URL completa: 	 http://localhost:3001/api_gasto/gasto/:gastoId
	  	Descripción: 	  Este servicio elimina  un gasto existente  en el sistema  dado su ID.
		Ejemplo: 
 
Errores: 
500: Error al borrar el gasto 

 
API   FONDO AHORRO
DESCRIPCION:  API rest que permite registrar  un monto fijo de porcente de ahorro,  el mismo se puede modificar.
D:\newProjets\IngSoftware\accounting-home\ah-server\src\config
Dirección base:  http://localhost:3001 /api_fondo_ahorro/
Servicios disponibles (paths):
get:   /fondo_ahorros
		URL completa: 	 :  http://localhost:3001/api_fondo_ahorro/fondo_ahorros
	  	Descripción: 	  Este servicio lista todos los fondo ahorros registrados en el sistema.
		Ejemplo: 
 
		Errores: 
500: Error al realizar la peticion

get:   /fondo_ahorro/:fonAhorrodId
		URL completa: 	 http://localhost:3001 /api_fondo_ahorro/fondo_ahorro/:fonAhorrodId
	  	Descripción: 	  Este servicio lista  un fondo ahorro registrado previamente en el sistema  dado su ID.
		Ejemplo: 

Errores: 
500: Error al realizar la petición

 
 
post:   /fondo_ahorro
		URL completa: 	 http://localhost:3001/api_fondo_ahorro/fondo_ahorro
		Datos Body :
				monto
total
	  	Descripción: 	  Este servicio permite registrar el monto de ahorro.
		Ejemplo: 
 
Errores: 
500: Error al guardar un fondo de ahorro

put:   /fondo_ahorro/:fonAhorrodId
		URL completa: 	 http://localhost:3001/api_fondo_ahorro/fondo_ahorro/:fonAhorrodId
Datos Body :
				monto
total

	  	Descripción: 	  Este servicio actualiza el monto y/o total  de un fondo ahorro registrado previamente en el sistema.
		Ejemplo: 

Errores: 
500: Error al actualizar el gasto
 

delete:   /fondo_ahorro/:fonAhorrodId

		URL completa: 	http://localhost:3001/api_fondo_ahorro/fondo_ahorro/:fonAhorrodId
	  	Descripción: 	  Este servicio elimina  un fondo de ahorro.
		Ejemplo: 

Errores: 
500: Error al borrar el gasto 

 
 


 
API   GASTO ESPECIFICO
DESCRIPCION:  API rest que permite registrar , modificar, eliminar y visualizar gastos específicos para ahorro mensual.
Dirección base:  http://localhost:3001/api_gasto_especifico/
Servicios disponibles (paths):
get:   /gastos_especifico
		URL completa: 	 http://localhost:3001/api_gasto_especifico/gastos_especifico
	  	Descripción: 	  Este servicio lista todos los gastos específicos  registrados en el sistema.
		Ejemplo: 
Solo se pueden capturar  gastos específicos sin descripcion y con valor cero.

		Errores: 
500: Error al realizar la peticion
404: no existen gastos

get:   /gastos_especifico/:gastoEspecificoId
		URL completa: 	 http://localhost:3001/api_gasto_especifico/gastos_especifico/:gastoEspecificoId
	  	Descripción: 	  Este servicio lista  un gasto especifico registrado en el sistema  dado su ID.
		Ejemplo: 
Solo se pueden capturar  gastos específicos sin descripcion y con valor cero.

Errores: 
500: Error al realizar la petición
404: no existen gastos

post:   /gastos_especifico
		URL completa: 	 http://localhost:3001/api_gasto_especifico/gastos_especifico
		Datos Body :
				descripcion
monto
	  	Descripción: 	  Este servicio permite registrar un nuevo gasto  especifico en el sistema.
		Ejemplo: 

Errores: 
500: Error al guardar en la base de datos

 
put:   /gastos_especifico/:gastoEspecificoId
		URL completa: 	 http://localhost:3001/api_gasto_especifico/gastos_especifico/:gastoEspecificoId
Datos Body :
				descripción
monto

	  	Descripción: 	  Este servicio actualiza la descripción y/o monto de un gasto  especifico registrado previamente en el sistema .
		Ejemplo: 


Errores: 
500: Error al actualizar el gasto

 
 
delete:   /gastos_especifico/:gastoEspecificoId

		URL completa: 	 http://localhost:3001/api_gasto_especifico/gastos_especifico/:gastoEspecificoId
	  	Descripción: 	  Este servicio elimina  un gasto especifico existente  en el sistema  dado su ID.
		Ejemplo: 

Errores: 
500: Error al borrar el gasto 
 
 
API  INGRESO
DESCRIPCION:   API rest que permite el registro, modificación, eliminación y visualización de  los ingresos que se tieen mensualmente.
Dirección base:  http://localhost:3001/api_ingreso/
Servicios disponibles (paths):
get   /ingreso
		URL completa: 	 http://localhost:3001/api_ingreso/ingreso
	  	Descripción: 	  Este servicio lista todos los ingresos registrados en el sistema.
		Ejemplo: 
 
		Errores: 
500: Error al realizar la peticion

get:   /ingreso/:ingresoId
		URL completa: 	 http://localhost:3001/api_ingreso/ingreso/:ingresoId
	  	Descripción: 	  Este servicio lista  un ingreso registrado en el sistema  dado su ID.
		Ejemplo: 
	 
Errores: 
500: Error al realizar la petición
post:   /ingreso
		URL completa: 	 http://localhost:3001/api_ingreso/ingreso
		Datos Body :
				descripcion
monto
	  	Descripción: 	  Este servicio permite registrar un nuevo ingreso en el sistema.
		Ejemplo: 
 
Errores: 
500: Error al guardar en la base de datos
put:   /ingreso/:ingresoId
		URL completa: 	 http://localhost:3001/api_ingreso/ingreso/:ingresoId
Datos Body :
				descripción
monto

	  	Descripción: 	  Este servicio actualiza la descripción y/o monto de un ingreso registrado previamente en el sistema .
		Ejemplo: 
 

Errores: 
500: Error al actualizar el ingreso
 
delete:   /ingreso/:ingresoId

		URL completa: 	 http://localhost:3001/api_ingreso/ingreso/:ingresoId
	  	Descripción: 	  Este servicio elimina  un ingreso existente  en el sistema  dado su ID.
		Ejemplo: 
 
Errores: 
500: Error al borrar el ingreso 

 
API   UMBRAL
DESCRIPCION:  API rest que permite  registrar,modificar,eliminar y visualizar   el umbral limite de gastos mensuales.
Dirección base:  http://localhost:3001/api_umbral/
Servicios disponibles (paths):
get:   /umbral
		URL completa: 	 http://localhost:3001/api_umbral/umbral
	  	Descripción: 	  Este servicio lista todos los umbrales registrados en el sistema.
		Ejemplo: 
 
		Errores: 
500: Error al realizar la peticion

get:   /umbral/:ingresoId
		URL completa: 	 http://localhost:3001/api_umbral/umbral/:ingresoId
	  	Descripción: 	  Este servicio lista  un umbral registrado en el sistema  dado su ID.
		Ejemplo: 

Errores: 
500: Error al realizar la petición
 
 
post:   /umbral
		URL completa: 	 http://localhost:3001/api_umbral/umbral
		Datos Body :
				monto
estado_activo
	  	Descripción: 	  Este servicio permite registrar un nuevo umbral  en el sistema.
		Ejemplo: 
 

Errores: 
500: Error al guardar en la base de datos
 

put:   /umbral/:ingresoId
		URL completa: 	 http://localhost:3001/api_umbral/umbral/:ingresoId
Datos Body :
				monto
estado_activo

	  	Descripción: 	  Este servicio actualiza un umbral registrado previamente en el sistema .
		Ejemplo: 


Errores: 
500: Error al actualizar el umbral
 
 
delete  /umbral/:ingresoId

		URL completa: 	http://localhost:3001/api_umbral/umbral/:ingresoId
	  	Descripción: 	  Este servicio elimina  un umbral existente  en el sistema  dado su ID.
		Ejemplo: 

Errores: 
500: Error al borrar el umbral 
 
 
API   RUBRO
DESCRIPCION:  API rest que permite registrar, modificar, eliminar y  listar los rubros registrados en el sistema.
Dirección base:  http://localhost:3001/api_rubro/
Servicios disponibles (paths):
get:   /rubro
		URL completa: 	 http://localhost:3001/api_rubro/rubro
	  	Descripción: 	  Este servicio lista todos los rubros registrados en el sistema.
		Ejemplo: 
	 
		Errores: 
500: Error al realizar la peticion

get:    /rubro/:ingresoId
		URL completa: 	 http://localhost:3001/api_rubro/rubro/:ingresoId
	  	Descripción: 	  Este servicio lista  un rubro registrado en el sistema  dado su ID.
		Ejemplo: 

Errores: 
500: Error al realizar la petición
 
post:   /rubro
		URL completa: 	http://localhost:3001/api_rubro/rubro
		Datos Body :
				rubro
gastos
	  	Descripción: 	  Este servicio permite registrar un nuevo rubro en el sistema.
		Ejemplo: 
 
Errores: 
500: Error al guardar en la base de datos
put:   /rubro/:ingresoId
		URL completa: 	 http://localhost:3001/api_rubro/rubro/:ingresoId
Datos Body :
				rubro
gastos

	  	Descripción: 	  Este servicio actualiza la descripción y/o monto de un gasto registrado previamente en el sistema .
		Ejemplo: 


Errores: 
500: Error al actualizar el rubro
 
delete:   /rubro/:ingresoId

		URL completa: 	 http://localhost:3001/api_rubro/rubro/:ingresoId
	  	Descripción: 	  Este servicio elimina  un gasto existente  en el sistema  dado su ID.
		Ejemplo: 

Errores: 
500: Error al borrar el rubro 

 
