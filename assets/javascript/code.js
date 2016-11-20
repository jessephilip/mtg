var deckName = "trial";

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
var database = firebase.database();
var arrayOfResults = [];

// ---------- LOCATIONS ----------
var searchBox = $("#searchBox");
var submitButton = $("#submitButton");
var output = $("#output");
var cardListOutput = $("#cardListOutput");

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
            var cards = object.cards;
            showCardResults(cards);

        });

}

function clearSearchBox() {
    searchBox.val("");
}

function showCardResults(cardArray) {
    output.empty();

    for (var i = 0; i < cardArray.length; i++) {
    	createCard(cardArray[i]);

	}
}

function createCard(card) {
    var img = $("<img>");
    if (card.imageUrl) img.attr("src", card.imageUrl);
    else img.attr("src", "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=5607&type=card");
	img.attr("cardId", card.id);
	img.attr("cardName", card.name);
	img.addClass('card hvr-grow');
	output.append(img);
}

// ========== CLICKLISTENERS ==========

$(document).on("click", ".card", addCardToDeck);

// ========== DATABASE LISTENER ==========

database.ref("decks/" + deckName).on("child_added", function(snapshot) {
	//console.log(snapshot);
	var temp = snapshot.val().cardName;

	var p = $("<p>");
	p.text(temp);
	p.addClass("cardList");
	cardListOutput.append(p);
}); 	

//function add to database
function addCardToDeck() {
	var cardId = $(this).attr("cardId");
	var cardName = $(this).attr("cardName");

	database.ref("decks/" + deckName).push( {
		cardId: cardId,
		cardName: cardName
	});

	alertify.success(cardName + " added.");
}

function getDeck() {
}
