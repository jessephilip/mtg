// ---------- GLOBAL VARIABLES ----------

// ---------- INITIATORS ----------
var database = firebase.database();

// ---------- ACTIONS ----------
function logEntry(email) {
    database.ref(email + "/").push({
        time: "now"
    });
}