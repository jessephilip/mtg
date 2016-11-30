// ---------- GLOBAL VARIABLES ----------

// ---------- INITIATORS ----------
var database = firebase.database();

// ---------- ACTIONS ----------
function logEntry(email) {
    var emailFixed = email.replace(".", "");
    console.log(emailFixed);
    database.ref(emailFixed + "/").push({
        time: "now"
    });
}