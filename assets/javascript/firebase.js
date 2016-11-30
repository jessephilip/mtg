// ---------- GLOBAL VARIABLES ----------
var user = googleInfo.email;

// ---------- INITIATORS ----------
var database = firebase.database();
var userbase = database.ref(user);

// ---------- ACTIONS ----------
function logEntry() {
    userbase.push({
        time: "now"
    });
}