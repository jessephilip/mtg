// object of ajax queries
var mtgQuery = {
	urls: {
		cardSearch: "https://api.magicthegathering.io/v1/cards?",
		idSearch: "https://api.magicthegathering.io/v1/cards/"
	},
	parameters: {
		name: "&name=",
		layout: "&layout=",
		cmc: "&cmc=",
		colors: "&colors=",
		colorIdentity: "&colorIdentity=",
		type: "&type=",
		supertypes: "&supertypes=",
		types: "&types=",
		subtypes: "&subtypes=",
		rarity: "&rarity=",
		set: "&set=",
		setName: "&setName=",
		text: "&text=",
		flavor: "&flavor=",
		artist: "&artist=",
		number: "&number=",
		power: "&power=",
		toughness: "&toughness=",
		loyalty: "&loyalty=",
		foreignName: "&foreignName",
		language: "&language",
		gameFormat: "&gameFormat",
		legality: "&legality=",
		page: "&page=",
		pageSize: "&pageSize=",
		orderBy: "&orderBy="

	}

}

// ---------- GLOBAL VARIABLES ----------
var searchTerm;

// ---------- LOCATIONS ----------
var searchBox = $("#searchBox");
var submitButton = $("#submitButton");
var output = $("#output");

// ---------- CLICKLISTENERS ----------
submitButton.on("click", function(e) {
	e.preventDefault();
	searchTerm = searchBox.val().trim();
	console.log(searchTerm);
	search();
	clearSearchBox();
});

// ---------- FUNCTIONS ----------

function search() {
	$.ajax({
		url: mtgQuery.urls.cardSearch + mtgQuery.parameters.name + searchTerm,
		type: "GET",
		dataType: "json",
	})
	.done(function(object) {
		console.log(object);
	});
	
}

function clearSearchBox() {
	searchBox.val("");
}

