// layout will create a collapsible unordered list. each player will get his or her own line item
// icon / name / minus buttons / life / plus buttons / Deck Title or Commander Name / Status?
// commander or deck picture will precede name. will be like a small icon. 

// to stop the opening of the collapsible on button clicks:  http://stackoverflow.com/questions/16772061/adding-the-button-to-the-collapsible-set-and-getting-the-value-of-the-collapsibl

// html will have: <ul class="collapsible" data-collapsible="expandable">
var ul = $("#playerUL");

// use jQuery to add the relevant line items and elements

function createPlayerLine() {
    // create line item
    var li = $("<li>");
    li.addClass("hoverable valign-wrapper");
    ul.append(li);

    // create div header for line item
    var divHeader = $("<div class=\"collapsible-header valign \">");
    li.append(divHeader);

    // create elements on the divHeader: <img> <button><button><span><button><button><span><span>

    // img for icon picture
    var img = $("<img>");
    img.attr("src", "assets/images/feldon.jpg");
    img.attr("alt", "placeholder");
    img.addClass("tinypic");
    divHeader.append(img);

    // span for name of player text
    var span = $("<span>");
    span.text("Jesse Matherne");
    span.addClass("name");
    divHeader.append(span);

    // buttons for life input
    var buttonMinusOne = $("<button>");
    buttonMinusOne.text("-1");
    buttonMinusOne.addClass("btn red waves-effect waves-light");
    divHeader.append(buttonMinusOne);

    var buttonMinusFive = $("<button>");
    buttonMinusFive.text("-5");
    buttonMinusFive.addClass("btn red waves-effect waves-light")
    divHeader.append(buttonMinusFive);

    // span for life total
    var spanLife = $("<span>");
    spanLife.text("40");
    spanLife.addClass("lifeTotal")
    divHeader.append(spanLife);

    var buttonPlusFive = $("<button>");
    buttonPlusFive.text("+5");
    buttonPlusFive.addClass("btn green waves-effect waves-light");
    divHeader.append(buttonPlusFive);

    var buttonPlusOne = $("<button>");
    buttonPlusOne.text("+1");
    buttonPlusOne.addClass("btn green waves-effect waves-light");
    divHeader.append(buttonPlusOne);

    // span to hodl the text for deck title or commander
    var spanTitle = $("<span>");
    spanTitle.text("Deck Title or Commander");
    spanTitle.addClass("name");
    divHeader.append(spanTitle);

    // div for the body part of the collapsible (what is revealed when the line item is clicked)
    var divBody = $("<div class=\"collapsible-body\">");
    li.append(divBody);

    // placeholder text for what will go in the body
    var pBody = $("<p>");
    pBody.text("Behind the couch leave dead animals as gifts, and sniff other cat's butt and hang jaw half open thereafter chew iPad power cord asdflkjaertvlkjasntvkjn (sits on keyboard) need to chase tail, so pee in the shoe. Eat and than sleep on your face chew on cable or chirp at birds. Hide from vacuum cleaner mrow or stare at wall turn and meow stare at wall some more meow again continue staring , all of a sudden cat goes crazy chase red laser dot but run outside as soon as door open or licks your face.");
    divBody.append(pBody);

}

// start up code
createPlayerLine();