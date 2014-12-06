$myLink = $( "<a/>" ); //creates tag
$myLink.attr('href','http://www.makersquare.com'); //gives attr with value
$myLink.html('click this link'); //gives text\html
$myLink.appendTo( "body" ); //adding it to the DOM using the appendTo element
$myLink.prependTo( "body" ); //moving it around in the DOM to the top of the body tag
$myLink.remove(); //remove it from the DOM completely