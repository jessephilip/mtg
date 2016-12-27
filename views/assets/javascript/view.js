// initialize side-nav
$('.button-collapse').sideNav();

// initialize modals
$('.modal').modal();

// clicking on logo reveals sidebar
$("#logo").on("click", function() {
    $('.button-collapse').sideNav('show');
});

// initialize select forms
$('select').material_select();

// function for signing in with Google
function onSignIn(googleUser) {

    var currentURL = window.location.origin;

    // Useful data for your client-side scripts:
    var profile = googleUser.getBasicProfile();
    var profileId = profile.getId(); // Don't send this directly to your server!
    var profileName = profile.getName();
    var profileGivenName = profile.getGivenName();
    var profileFamilyName = profile.getFamilyName();
    var profileImage = profile.getImageUrl();
    var profileEmail = profile.getEmail();

    // The ID token you need to pass to your backend:
    var profileToken = googleUser.getAuthResponse().id_token;

    var dataObject = {
        givenName: profileGivenName,
        familyName: profileFamilyName,
        photo: profileImage,
        email: profileEmail
    };

    // set images and names on the main page
    $(".profileImage").attr("src", profileImage);
    $(".name").text(profileName);
    $(".email").text(profileEmail);
    $("#welcomeMessage").text("Welcome " + profileGivenName);

    $.ajax({
            url: currentURL + '/login',
            type: 'POST',
            data: dataObject
        })
        .done(function() {
            console.log("success");
            alertify.success("Welcome " + profileGivenName + ".");

        })
        .fail(function(a, b, c) {
            console.log("error");
            alertify.error("Login failed.");
            console.log("a", a);
            console.log("b", b);
            console.log("c", c);

        });

}

// clicklistener for signing out with Google
$("#signOut").on("click", signOut);

// function to sign out with Google
function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function() {
        console.log('User signed out.');
    });
}

// clicklistener for hosting a new game
$("#hostGame").on("click", hostModal);

// function to pop up host game modal
function hostModal() {
    $('#hostGameModal').modal('open');
}

// clicklistener for joining a game
$("#joinGame").on("click", joinModal);

// function to pop up join game modal
function joinModal() {
    $('#joinGameModal').modal('open');
}

// actions regarding CREATE GAME
$("#hostCreate").on("click", createGame);

// function to perform when create Game button is clicked
function createGame(e) {
    e.preventDefault();

    var gameObject = {
        gameName: $("#gameName").val().trim(),
        gameStatus: "open",
        gameLife: parseInt($("#gameLife").val().trim()),
        gameNumberPlayers: parseInt($("#gamePlayers").val().trim()),
        gameFormat: $("#gameFormat").val(),
        gamePlaneschase: $("#planeschase").prop("checked"),
        gameArchenemy: $("#archenemy").prop("checked")
    };

    if (!gameObject.gameFormat) alertify.error("Please choose a game format. It is required.");
    else {
        console.log(gameObject);

        //
        // $.ajax({
        // 	url: '/createGame',
        // 	type: 'POST',
        // 	data: gameObject
        // })
        // .done(function() {
        // 	console.log("success");
        // })
        // .fail(function() {
        // 	console.log("error");
        // });
    }

}
