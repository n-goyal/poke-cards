const apiUrl = "https://api.pokemontcg.io/v2/cards?q=name:gardevoir";

const cardsEle = document.querySelector("#cards");

async function getCharizardCards() {
	const response = await fetch(apiUrl);
	const json = await response.json();
	console.log(json);
	json.data.forEach((card) => {
		const image = document.createElement("img");
		image.src = card.images.small;
		cardsEle.append(image);
	});
}

getCharizardCards();
