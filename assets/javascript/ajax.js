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
var arrayOfResults = [];

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
