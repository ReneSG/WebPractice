let express = require('express');
let morgan = require('morgan');

let app = express();

app.use( morgan( 'dev' ) );

let nameOfPets = [
	{
		name : "Burbuja",
		typeOfPet : "Dog"
	},
	{
		name : "Kia",
		typeOfPet : "Dog"
	},
	{
		name : "Jagger",
		typeOfPet : "Dog"
	},
	{
		name : "Kirby",
		typeOfPet : "Dog"
	}
];

app.get( '/api/pets', (req, res, next) =>{
	console.log( "Req query", req.query );
	return res.status(200).json( nameOfPets );
});

app.get( '/api/pets/:id', (req, res, next) =>{
	console.log( "Req param", req.params );
	console.log( "Req query", req.query );

	return res.status(200).json( nameOfPets );
});

app.listen( '8080', () => {
	console.log( "App running on localhost:8080" );
});