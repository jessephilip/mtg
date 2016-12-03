// host game for other players to join
// button for host game
// type of game
// # of players
// load player stats
// button for join game
// player chooses deck (optional)
//

//host game parameters
function Game(type = "Commander", startingLife = 40, numberOfPlayers, players) {
    this.type = type; // string regarding type of game. ex: commander, etc.
    this.startingLife = startingLife; // beginning life total for all players
    this.numberOfPlayers = numberOfPlayers; // number of desired players in the game
    this.players = players; // array of player objects
    this.onGoing = true; // boolean stating whether game is ongoing. determined if players > 1
    this.joinGame = function (playerObject) {
        this.players.push(playerObject);
        if (players.length === this.numberOfPlayers) this.gameStart();
    }
    this.gameStart = function () {
        // set up timer for game duration
        // set starting life totals
        for (var i = 0; i < this.players.length; i++) {
            this.players[i].life = this.startingLife;
        }

        // set up display for life tracking
        for (i = 0; i < this.players.length; i++) {
            // create display card
            createPlayerCollapsible(this.players[i]);

        }
    }

}

var defaultImg = "../images/account-256x256.png";

function Player(name, email, image = defaultImg, life = 40, deck, points, poison = 0) {
    this.name = name; // player's name. string.
    this.email = email; // player's email. used for logging in and keeping stats. string.
    this.image = image; // player's profile image. string.
    this.life = life; // player's current life. number.
    this.deck = deck; // player's current deck. object.
    this.points = points; // number of points currently available to player. number.
    this.poison = poison; // number of poison counters on player. number.
    this.commanderDamage = []; // array of numbers. for commander damage from each player
    this.isAlive = function () {
        if (this.life <= 0) return false;
        else if (this.poison >= 10) return false;
        else return true;
    };
    this.changeLife = function (num) {
        this.life += num;
    };
    this.changePoints = function (num) {
        this.points += num;
    };
    this.changePoison = function (num) {
        this.poison += num;
    };
}

$("#joinGame").on("click", createPlayerCollapsible(googleInfo));

// FUNCTIONS: HTML GENERATORS
function createPlayerCollapsible(playerObject) {
    var playerUL = $("#playerUL");
    var name = playerObject.name;
    var email = playerObject.email;
    var image = playerObject.image;
    var life = playerObject.life;
    var deck = playerObject.deck;
    var points = playerObject.points;
    var poison = playerObject.poison;

    // create line item
    var li = $("<li>");
    li.addClass("hoverable");
    playerUL.append(li);

    // create div header for line item
    var divHeader = $("<div class=\"collapsible-header\">");
    li.append(divHeader);

    // create elements on the divHeader: <img> <button><button><span><button><button><span><span>

    // img for icon picture
    var img = $("<img>");
    img.attr("src", image);
    img.attr("alt", "placeholder");
    img.addClass("tinypic");
    divHeader.append(img);

    // span for name of facility
    var spanName = $("<span>");
    spanName.text(name);
    spanName.addClass("name");
    divHeader.append(spanName);

    // span for address
    var spanDeck = $("<span>");
    spanDeck.text(deck);
    spanDeck.addClass("currentDeck");
    divHeader.append(spanDeck);

    // span for address
    var spanLife = $("<span>");
    spanLife.text(life);
    spanLife.addClass("lifeTotal");
    divHeader.append(spanLife);

    // div for the body part of the collapsible (what is revealed when the line item is clicked)
    var divBody = $("<div class=\"collapsible-body\">");
    li.append(divBody);

    // placeholder text for what will go in the body
    var pBody = $("<p>");
    pBody.text("Behind the couch leave dead animals as gifts, and sniff other cat's butt and hang jaw half open thereafter chew iPad power cord asdflkjaertvlkjasntvkjn (sits on keyboard) need to chase tail, so pee in the shoe. Eat and than sleep on your face chew on cable or chirp at birds. Hide from vacuum cleaner mrow or stare at wall turn and meow stare at wall some more meow again continue staring , all of a sudden cat goes crazy chase red laser dot but run outside as soon as door open or licks your face.");
    divBody.append(pBody);
}

// ============================== PERSONAL USER EXPERIENCE ==============================
// not previously logged in or logged out. welcome screen. expanding signup/login
// when player logs on auto sign in if previously signed in
// auto populate playerObject for game -- pulling in last used deck
// welcome screen will have stats. win/loss ratio. last story, battle, favorite decks, etc.
// ============================== PERSONAL USER EXPERIENCE ==============================