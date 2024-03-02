
const BASE_URL = "https://www.swapi.tech/api/"

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			Characters: [],
			Planet: [],
			Vehicle:[],
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			getCharacters: async () => {
				const response = await fetch (BASE_URL + "people"
				);
				const body = await response.json();
				const Characters = body.results;
				console.log (Characters)
				setStore ({Characters: Characters});
			},
			getCharacter: async (uid) => {
				const response = await fetch (BASE_URL + "people/" + uid)
				const body = await response.json();
				const character = body.result
				return character

			},

			getPlanets: async () => {
				const response = await fetch (BASE_URL + "planets"
				);
				const body = await response.json();
				const Planets = body.results;
				console.log (Planets)
				setStore ({Planet: Planets});
			},
			getPlanet: async (uid) => {
				const response = await fetch (BASE_URL + "planets/" + uid)
				const body = await response.json();
				const planet = body.result
				return planet

			},
			getVehicles: async () => {
				const response = await fetch (BASE_URL + "vehicles"
				);
				const body = await response.json();
				const Vehicles = body.results;
				console.log (Vehicles)
				setStore ({Vehicle: Vehicles});
			},
			getVehicle: async (uid) => {
				const response = await fetch (BASE_URL + "vehicles/" + uid)
				const body = await response.json();
				const vehicle = body.result
				return vehicle

			},
			

			
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;

