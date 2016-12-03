var paras = [];

$(".lifeButton").click(lifeButtonClick);

function lifeButtonClick(event) {
    event.preventDefault();
    var name = $(this).data("name");
    var value = $(this).data("value");
    var life = $("#" + name + "Life").text();
    life = parseInt(life) + value;
    $("#" + name + "Life").text(life);

    var info = {
        name: name,
        value: value
    }

    printToHistory(info);
    return false;

}

function printToHistory(infoObject) {
    var historyContent = $("#historyContent");
    var p = $("<p>");
    if (paras.length === 12) paras.shift();

    if (infoObject.value < 0) {
        infoObject.value = infoObject.value.toString().replace("-", "");
        p.css("color", "red");
        p.html(infoObject.name + " took " + infoObject.value + " damage!");
        paras.push(p);

    } else {
        p.css("color", "green");
        p.html(infoObject.name + " gained " + infoObject.value + " life!");
        paras.push(p);
    }

    historyContent.html("");

    for (var i = 0; i < paras.length; i++) {
        historyContent.append(paras[paras.length - i]);
    }
}