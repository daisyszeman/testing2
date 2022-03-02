// Step 1: use funtion output object
function generateItem(cardno,icon){
  return {
    cardno:cardno,
    icon:icon
  }
}

// Step 2: place variable into the function
var cardArray = [
  generateItem("1","square"),
  generateItem("2","circle"),
  generateItem("3","triangle")
]

// Step 3: output HTML code from function

function getHtmlCode(card){
  var indivcode = $("<li>")
  var graphic = "<div class='icon "+card.icon+"'></div>"
  indivcode.append("<h3>"+card.cardno+"</h3>")
  indivcode.append(graphic)
  return indivcode
}

// Step 4: print HTML to the interface from function

function printHtml(card){
  for(var i=0;i<card.length;i++){
    var allcode = getHtmlCode(card[i])
    $("ul.card").append(allcode)
  }
}
  
printHtml(cardArray)