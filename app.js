console.log("Hello from app.js");
setProperty("spellBtn", "border", "3px solid black");
setProperty("potionBtn", "border", "3px solid black");
console.log(document.getElementById("generateBtn"));

onEvent("generateBtn", "click", function() {
    console.log("Generate button clicked");
    
    setText("output-display", "You generated a question!");
});


//All things Spells
onEvent("spellBtn", "click", function() {
    console.log("Spell button clicked");
    //show list of spells
    document.getElementById("spellList").classList.remove("d-none");
    document.getElementById("spell-display").classList.add("d-none");
    console.log("List of Spells Shown in spell-display")
});

//Lumos
onEvent("lu", "click", function(){
    console.log("Lumos Spell Clicked");
    //show Lumos Spell card

});

//Disarming Charm
onEvent("dc", "click", function(){
    console.log("Disarming Charm Clicked")
    //show Disarming Charm Spell Card


});

//Patronus Charm
onEvent("lc", "click", function(){
    console.log("Patronus Charm Clicked")
    //show Patronus Charm Spell Card

});

//Boggart Banishing Spell
onEvent("bbs", "click", function(){
    console.log("Boggart Banishing Spell Clicked")
    //show Boggart Banishing Spell Card

});




//All things Potions
onEvent("potionBtn", "click", function() {
    console.log("Potion button clicked");
    //show list of potions
    document.getElementById("potionList").classList.remove("d-none");
    document.getElementById("potion-display").classList.add("d-none");
    console.log("List of Potions Shown in potion-display")
});

//Polyjuice Potion
onEvent("pp", "click", function() {
    console.log("Polyjuice Potion Clicked");
    //show Polyjuice Potion card

});

//Beautification Potion
onEvent("bp", "click", function(){
    console.log("Beautification Potion Clicked");
    //show Beautification Potion card

});

//Elixir of Life Potion
onEvent("eol", "click", function(){
    console.log("Elixir of Life Potion Clicked");
    //show Elixir of Life Potion card

});

//Amortentia Potion
onEvent("am", "click", function(){
    console.log("Amortentia Potion Clicked");
    //show Amortentia Potion card

});