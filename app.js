console.log("Hello from app.js");
setProperty("spellBtn", "border", "3px solid black");
setProperty("potionBtn", "border", "3px solid black");
console.log(document.getElementById("generateBtn"));

onEvent("generateBtn", "click", function() {
    console.log("Generate button clicked");
    setText("output-display", "You generated a question!");
});

onEvent("spellBtn", "click", function() {
    console.log("Spell button clicked");
        
});

onEvent("potionBtn", "click", function() {
    console.log("Potion button clicked");
    
});