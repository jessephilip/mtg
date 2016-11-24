"use strict";

var deckName = "trial";

var coin = coinFlip();
var d6 = d6();
var d10 = d10();
var d20 = d20();
var dSpecial = customDie();

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
var content = $("#content");
var addPlayer = $("#addPlayer");

// ---------- CLICKLISTENERS ----------
submitButton.on("click", function (e) {
    e.preventDefault();
    searchTerm = searchBox.val().trim();
    console.log(searchTerm);
    search();
    clearSearchBox();
});

addPlayer.on("click", function () {
    createPlayerRow();
});

// ---------- FUNCTIONS ----------

function search() {
    $.ajax({
            url: mtgQuery.urls.cardSearch + mtgQuery.parameters.name + searchTerm,
            type: "GET",
            dataType: "json",
        })
        .done(function (object) {
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

function diceRoll(func) {
    alertify.alert(func);
}

// ========== CLICKLISTENERS ==========

$(document).on("click", ".card", addCardToDeck);

$(".dropdown-button").dropdown();

// ========== DATABASE LISTENER ==========

/*database.ref("decks/" + deckName).on("child_added", function(snapshot) {
	//console.log(snapshot);
	var temp = snapshot.val().cardName;

	var p = $("<p>");
	p.text(temp);
	p.addClass("cardList");
	cardListOutput.append(p);
});*/

//function add to database
function addCardToDeck() {
    var cardId = $(this).attr("cardId");
    var cardName = $(this).attr("cardName");

    database.ref("decks/" + deckName).push({
        cardId: cardId,
        cardName: cardName
    });

    alertify.success(cardName + " added.");
}

function getDeck() {}

// visual functions
function createPlayerRow(playerObject) {
    var row = $("<div class=\"row\">");
    content.append(row);

    // player name column
    var colS2 = $("<div class=\"col s2\">");
    row.append(colS2);

    // append playerName
    var p = $("<p>");
    p.text("Jesse");
    colS2.append(p);

    // Life total and buttons
    var colS3 = $("<div class=\"col s3\">");
    row.append(colS3);

    var button = $("<button>");
    button.text("-1");
    button.val("-1");
    colS3.append(button);

    button = $("<button>");
    button.text("-5");
    button.val("-5");
    colS3.append(button);

    var span = $("<span>");
    span.text("40");
    colS3.append(span);

    button = $("<button>");
    button.text("+5");
    button.val("5");
    colS3.append(button);

    button = $("<button>");
    button.text("+1");
    button.val("1");
    colS3.append(button);

    // Commander damage section
    colS3 = $("<div class=\"col s3\">");
    row.append(colS3);

    p = $("<p>");
    p.text("Commander Damage");
    colS3.append(p);

    // Commander card area
    colS2 = $("<div class=\"col s2\">");
    row.append(colS2);

    var img = $("<img>");
    img.attr("src", "http://placekitten.com/100/100");
    img.attr("alt", "placeholder kitten");
    colS2.append(img);

    // Deck name area
    colS2 = $("<div class=\"col s2\">");
    row.append(colS2);

    var img = $("<img>");
    p = $("<p>");
    p.text("Feldon");
    colS2.append(p);

}