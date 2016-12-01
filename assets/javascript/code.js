// variable to hold sign in info from google sign in
var googleInfo = {};

$(".button-collapse").sideNav();

// ---------- LOCATIONS ----------
var searchBox = $("#searchBox");
var submitButton = $("#submitButton");
var output = $("#output");
var cardListOutput = $("#cardListOutput");
var content = $("#content");
var addPlayer = $("#addPlayer");
var logo = $("#logo");
var profileImage = $(".profileImage");
var profileName = $("#profileName");
var profileEmail = $("#profileEmail");

// ---------- CLICKLISTENERS ----------
submitButton.on("click", function (e) {
    e.preventDefault();
    searchTerm = searchBox.val().trim();
    console.log(searchTerm);
    //search();
    clearSearchBox();
});

addPlayer.on("click", function () {
    createDeckCard();
});

logo.on("click", function() {
      $('.button-collapse').sideNav('show');
});

// ---------- FUNCTIONS ----------

function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  var id = profile.getId(); // Do not send to your backend! Use an ID token instead.
  var name = profile.getName();
  var image = profile.getImageUrl();
  var email = profile.getEmail();

  googleInfo = {
      id: id,
      name: name,
      image: image,
      email: email
  }

  setProfileInformation(googleInfo);
  logEntry(email);
}

function setProfileInformation(profile) {
    profileImage.attr("src", profile.image);
    profileName.text(profile.name);
    profileEmail.text(profile.email);
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

//$(document).on("click", ".card", addCardToDeck);

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

function getDeck() {};

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

    var button = $("<button class=\"waves-effect waves-teal btn\">");
    button.text("-1");
    button.val("-1");
    button.css("width", "5px");
    colS3.append(button);

    button = $("<button class=\"waves-effect waves-teal btn\">");
    button.text("-5");
    button.val("-5");
    colS3.append(button);

    var span = $("<span>");
    span.text("40");
    colS3.append(span);

    button = $("<button class=\"waves-effect waves-teal btn\">");
    button.text("+5");
    button.val("5");
    colS3.append(button);

    button = $("<button class=\"waves-effect waves-teal btn\">");
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

// this function creates a card to be used in creating a deck placeholder
// todo control the size of the image created
function createDeckCard(deck) {
    var divCard = $("<div class=\"card medium\">");
    divCard.width("300px");
    content.append(divCard);

    var divCardImage = $("<div class=\"card-image waves-effect waves-block waves-light\">");
    divCard.append(divCardImage);

    var img = $("<img class=\"activator\">");
    img.attr("src", "assets/images/feldon.jpg");
    divCardImage.append(img);

    var divCardContent = $("<div class=\"card-content\">");
    divCard.append(divCardContent);

    var span = $("<span class=\"card-title activator grey-text text-darken-4\">");
    span.text("Deck Title on Card Side");
    divCardContent.append(span);

    var i = $("<i class=\"material-icons right\">");
    i.text("more_vert");
    span.append(i);

    var p = $("<p>");
    span.append(p);

    var a = $("<a>");
    a.attr("href", "#");
    a.text("Link to the deck list");
    p.append(a);

    var divCardReveal = $("<div class=\"card-reveal\">");
    divCard.append(divCardReveal);

    var spanCardTitle = $("<span class=\"card-title grey-text text-darken-4\">");
    spanCardTitle.text("Deck Name on Reveal Side");
    divCardReveal.append(spanCardTitle);

    i = $("<i class=\"material-icons right\">");
    i.text("close");
    spanCardTitle.append(i);

    p = $("<p>");
    p.text("Here is some more information about this product that is only revealed once clicked on.");
    divCardReveal.append(p);
}
// Things to do on startUp
// 1. auto login player
// 2. update presence
// 3. initiae firebase
// 4. initiate sidebar
// 5. generate welcome screen / main page
// 6. auto create playerObject from firebase
// 7. personalize user experience
// startUp Code
function start() {

}