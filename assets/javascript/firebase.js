// ---------- INITIATORS ----------
var database = firebase.database();

// ---------- ACTIONS ----------
function logEntry(email) {
    // firebase does not allow any directories to have a period in the string
    var emailFixed = email.replace(".", "");

    // use moment.js to get current time
    var now = moment();
    

    database.ref(emailFixed + "/").push({
        time: "now"
    });
}

// ---------- PRESENCE THROUGH FIREBASE ----------
// All of the connections will be stored in this directory.
var connectionsRef = database.ref("/connections");

// '.info/connected' is a special location provided by Firebase that is updated every time
// the client's connection state changes.
// '.info/connected' is a boolean value, true if the client is connected and false if they are not.
var connectedRef = database.ref(".info/connected");

// When the client's connection state changes...
connectedRef.on("value", function(snap) {

  // If they are connected..
  if (snap.val()) {

    // Add user to the connections list.
    var con = connectionsRef.push(true);

    // Remove user from the connection list when he or she disconnects.
    con.onDisconnect().remove();
  }
});

// When first loaded or when the connections list changes...
connectionsRef.on("value", function(snap) {

  // Display the viewer count in the html.
  // The number of online users is the number of children in the connections list.
  $("#watchers").html(snap.numChildren());
});
