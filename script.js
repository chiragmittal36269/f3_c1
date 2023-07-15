// https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json

let data = [];
//way1:- steps:-
// a) firstly we fetch the data with the help of fetch function by passing the api link.
// b)
fetch(
	"https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
)
	.then((response) => response.json()) // it converts the received body into the json object.
	.then((dataResponse) => {
		data = dataResponse; // here i am only doing to fill the data array with the dataResponse which is having response.json
		// console.log(data);
		renderTable(data);
	})
	.catch((error) => {
		console.error("Error", error);
	});

// way2: -
async function fetchData() {
	try {
		const response = await fetch(
			"https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
		);
		const data = await response.json();
		renderTable(data);
	} catch {
		console.log(error);
	}
}

fetchData();
