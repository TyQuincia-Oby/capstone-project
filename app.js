console.log("Hello from app.js");
setProperty("spellBtn", "border", "3px solid black");
setProperty("potionBtn", "border", "3px solid black");
console.log(document.getElementById("generateBtn"));

//AI Huggingface Integration

var studentQuestion = ""; //student question
var HogwartsReply = ""; //response to student question

onEvent("generateBtn", "click", function() {
    console.log("Generate button clicked");

    //getValue from userPrompt to comfirm input value
    studentQuestion = getValue("user-input");

    if (studentQuestion === ""){
        //validation if student doesn't enter a message
        setText("output-display", "ENTER A MESSAGE TO PROCEED");   
        setProperty("output-display", "color", "red");
    }
    else {
        setText("output-display", "Remember: Magic Lives Within You...Response Loading...");
        console.log("Response loading...");
        //confirms output-display will print response from AI
    }

    fetchHogwartsReply();
    //calls function for response to studentQuestion
    console.log("Sending Hogwarts Response:", studentQuestion);
    
});

function fetchHogwartsReply(){
//fetch AI Model Code
    async function query(data) {
	const response = await fetch(
		"https://router.huggingface.co/v1/chat/completions",
		{
			headers: {
				Authorization: `Bearer ${HF_TOKEN}`,
				"Content-Type": "application/json",
			},
			method: "POST",
			body: JSON.stringify(data),
		}
	);
	const result = await response.json();
	return result;
}

query({ 
    messages: [
        {
            role: "user",
            content: studentQuestion,
        },
    ],
    model: "meta-llama/Llama-3.1-8B-Instruct:fireworks-ai",
}).then((response) => {
    console.log(JSON.stringify(response));
    HogwartsReply = response.choices[0].message.content;
    console.log("Hogwarts reply:", HogwartsReply);
    setText("output-display", HogwartsReply);

});
};


//----------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------

//All things Spells
onEvent("spellBtn", "click", function() {
    console.log("Spell button clicked");
    //show list of spells
    document.getElementById("spellList").classList.remove("d-none");
    document.getElementById("spell-display").classList.add("d-none");
    console.log("List of Spells Shown in spell-display")
});

function clearSpellCards(){
    document.getElementById("lumosCard").classList.add("d-none");
    document.getElementById("disarmingCard").classList.add("d-none");
    document.getElementById("patronusCard").classList.add("d-none");
    document.getElementById("levitationCard").classList.add("d-none");
    document.getElementById("banishingCard").classList.add("d-none");
    
};



//Lumos
onEvent("lu", "click", function(){
    console.log("Lumos Spell Clicked");
    setProperty("lu", "background-color", "red");
    clearSpellCards();
    
    fetchLumosMaxima();

    //show page spell card
    document.getElementById("spell-card").classList.remove("d-none");

    //show Lumos Spell card
    document.getElementById("lumosCard").classList.remove("d-none");
    document.getElementById("spell-display").classList.remove("d-none");

});

//variables for Lumos Spell
var nameLU = "";
var categoryLU = "";
var effectLU = "";
var creatorLU = "";
var incantationLU = "";
var handLU = "";

function fetchLumosMaxima(){
const requestOptions = {
    method: "GET",
    redirect: "follow"
};

fetch("https://api.potterdb.com/v1/spells?filter[name_cont]=Lumos maxima", requestOptions)
    .then((response) => response.json())
    .then(function(result) {
        console.log(result.data[0].attributes);

        //pulls live data into variables and creates json pojo in console (streamlined)
        nameLU = (result.data[0].attributes.name);
        categoryLU = (result.data[0].attributes.category);
        effectLU = (result.data[0].attributes.effect);
        creatorLU = (result.data[0].attributes.creator);
        handLU = (result.data[0].attributes.hand);
        incantationLU = (result.data[0].attributes.incantation);

        //prints live data from variables into console 
        console.log("Name: ", nameLU);
        console.log("Category: ", categoryLU);
        console.log("Effect: ", effectLU);
        console.log("Creator: ", creatorLU);
        console.log("Hand: ", handLU);
        console.log("Incantation: ", incantationLU);

        //setText in spell card Lumos Maxima
        setText("nameLU", nameLU);
        setText("categoryLU", categoryLU);
        setText("effectLU", effectLU);
        setText("creatorLU", creatorLU);
        setText("handLU", handLU);
        setText("incantationLU", incantationLU);
    
    })
    .catch((error) => console.error(error));
};

//Disarming Charm
onEvent("dc", "click", function(){
    console.log("Disarming Charm Clicked")
    setProperty("dc", "background-color", "red");
    clearSpellCards();
    
    //show Disarming Charm Spell Card
    fetchDisarmingCharm();
    //show page spell card
    document.getElementById("spell-card").classList.remove("d-none");
    document.getElementById("disarmingCard").classList.remove("d-none");
    document.getElementById("spell-display").classList.remove("d-none");
});

//variables for Disarming Charm
var nameDC = "";
var categoryDC = "";
var effectDC = "";
var creatorDC = "";
var incantationDC = "";
var handDC = "";

function fetchDisarmingCharm(){
const requestOptions = {
    method: "GET",
    redirect: "follow"
};

fetch("https://api.potterdb.com/v1/spells?filter[name_cont]=disarming charm", requestOptions)
    .then((response) => response.json())
    .then(function(result) {
        console.log(result.data[0].attributes);

        //pulls live data into variables and creates json pojo in console (streamlined)
        nameDC = (result.data[0].attributes.name);
        categoryDC = (result.data[0].attributes.category);
        effectDC = (result.data[0].attributes.effect);
        creatorDC = (result.data[0].attributes.creator);
        handDC = (result.data[0].attributes.hand);
        incantationDC = (result.data[0].attributes.incantation);

        //prints live data from variables into console 
        console.log("Name: ", nameDC);
        console.log("Category: ", categoryDC);
        console.log("Effect: ", effectDC);
        console.log("Creator: ", creatorDC);
        console.log("Hand: ", handDC);
        console.log("Incantation: ", incantationDC);

        //setText in spell card Disarming Charm
        setText("nameDC", nameDC);
        setText("categoryDC", categoryDC);
        setText("effectDC", effectDC);
        setText("creatorDC", creatorDC);
        setText("handDC", handDC);
        setText("incantationDC", incantationDC);
    
    })
    .catch((error) => console.error(error));
};

//Levitation Charm 
onEvent("lc", "click", function(){
    console.log("Levitation Charm Clicked");
    setProperty("lc", "background-color", "red");
    clearSpellCards();
    
    //show Levitation Charm card
    fetchLevitationCharm();
    //show page spell card
    document.getElementById("spell-card").classList.remove("d-none");
    document.getElementById("levitationCard").classList.remove("d-none");
    document.getElementById("spell-display").classList.remove("d-none");

});

//variables for Levitation Charm
var nameLC = "";
var categoryLC = "";
var effectLC = "";
var creatorLC = "";
var incantationLC = "";
var handLC = "";

function fetchLevitationCharm(){
const requestOptions = {
    method: "GET",
    redirect: "follow"
};

fetch("https://api.potterdb.com/v1/spells?filter[name_cont]=Levitation charm", requestOptions)
    .then((response) => response.json())
    .then(function (result) {
        console.log(result.data[0].attributes);

        //pulls live data into variables and creates json pojo in console (streamlined)
        nameLC = (result.data[0].attributes.name);
        categoryLC = (result.data[0].attributes.category);
        effectLC = (result.data[0].attributes.effect);
        creatorLC = (result.data[0].attributes.creator);
        handLC = (result.data[0].attributes.hand);
        incantationLC = (result.data[0].attributes.incantation);

        //prints live data from variables into console 
        console.log("Name: ", nameLC);
        console.log("Category: ", categoryLC);
        console.log("Effect: ", effectLC);
        console.log("Creator: ", creatorLC);
        console.log("Hand: ", handLC);
        console.log("Incantation: ", incantationLC);

        //setText in spell card Levitation Charm
        setText("nameLC", nameLC);
        setText("categoryLC", categoryLC);
        setText("effectLC", effectLC);
        setText("creatorLC", creatorLC);
        setText("handLC", handLC);
        setText("incantationLC", incantationLC);
    
    })
    .catch((error) => console.error(error));
};


//Patronus Charm
onEvent("pc", "click", function(){
    console.log("Patronus Charm Clicked")
    setProperty("pc", "background-color", "red");
    clearSpellCards();
    
    //show Patronus Charm Spell Card
    fetchPatronusCharm();
        //show page spell card
    document.getElementById("spell-card").classList.remove("d-none");
    document.getElementById("patronusCard").classList.remove("d-none");
    document.getElementById("spell-display").classList.remove("d-none");
});

//variables for Patronus Charm
var namePC = "";
var categoryPC = "";
var effectPC = "";
var creatorPC = "";
var incantationPC = "";
var handPC = "";

function fetchPatronusCharm(){
const requestOptions = {
    method: "GET",
    redirect: "follow"
};

fetch("https://api.potterdb.com/v1/spells?filter[name_cont]=Patronus charm", requestOptions)
    .then((response) => response.json())
    .then(function (result) {
        console.log(result.data[0].attributes);

        //pulls live data into variables and creates json pojo in console (streamlined)
        namePC = (result.data[0].attributes.name);
        categoryPC = (result.data[0].attributes.category);
        effectPC = (result.data[0].attributes.effect);
        creatorPC = (result.data[0].attributes.creator);
        handPC = (result.data[0].attributes.hand);
        incantationPC = (result.data[0].attributes.incantation);

        //prints live data from variables into console 
        console.log("Name: ", namePC);
        console.log("Category: ", categoryPC);
        console.log("Effect: ", effectPC);
        console.log("Creator: ", creatorPC);
        console.log("Hand: ", handPC);
        console.log("Incantation: ", incantationPC);

        //setText in spell card Patronus Charm
        setText("namePC", namePC);
        setText("categoryPC", categoryPC);
        setText("effectPC", effectPC);
        setText("creatorPC", creatorPC);
        setText("handPC", handPC);
        setText("incantationPC", incantationPC);
    
    })
    .catch((error) => console.error(error));
};


//Boggart Banishing Spell
onEvent("bbs", "click", function(){
    console.log("Boggart Banishing Spell Clicked")
    setProperty("bbs", "background-color", "red");
    clearSpellCards();
    
    //show Boggart Banishing Spell Card
    fetchBogBan();
    //show page spell card
    document.getElementById("spell-card").classList.remove("d-none");
    document.getElementById("banishingCard").classList.remove("d-none");
    document.getElementById("spell-display").classList.remove("d-none");
});

//variables for Boggart Banishing Spell
var nameBBS = "";
var categoryBBS = "";
var effectBBS = "";
var creatorBBS = "";
var incantationBBS = "";
var handBBS = "";

function fetchBogBan(){
    const requestOptions = {
    method: "GET",
    redirect: "follow"
};

fetch("https://api.potterdb.com/v1/spells?filter[incantation_cont]=riddikulus", requestOptions)
    .then((response) => response.json())
    .then(function (result) { 
        console.log(result.data[0].attributes);

        //pulls live data into variables and creates json pojo in console (streamlined)
        nameBBS = (result.data[0].attributes.name);
        categoryBBS = (result.data[0].attributes.category);
        effectBBS = (result.data[0].attributes.effect);
        creatorBBS = (result.data[0].attributes.creator);
        handBBS = (result.data[0].attributes.hand);
        incantationBBS = (result.data[0].attributes.incantation);

        //prints live data from variables into console 
        console.log("Name: ", nameBBS);
        console.log("Category: ", categoryBBS);
        console.log("Effect: ", effectBBS);
        console.log("Creator: ", creatorBBS);
        console.log("Hand: ", handBBS);
        console.log("Incantation: ", incantationBBS);

        //setText in spell card Boggart Banishing Spell
        setText("nameBBS", nameBBS);
        setText("categoryBBS", categoryBBS);
        setText("effectBBS", effectBBS);
        setText("creatorBBS", creatorBBS);
        setText("handBBS", handBBS);
        setText("incantationBBS", incantationBBS);


    })
    .catch((error) => console.error(error));
}

//----------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------

//All things Potions
onEvent("potionBtn", "click", function() {
    console.log("Potion button clicked");
    //show list of potions
    document.getElementById("potionList").classList.remove("d-none");
    document.getElementById("potion-display").classList.add("d-none");
    console.log("List of Potions Shown in potion-display")
});

function clearPotionCards(){
    document.getElementById("polyjuiceCard").classList.add("d-none");
    document.getElementById("beautificationCard").classList.add("d-none");
    document.getElementById("elixirCard").classList.add("d-none");
    document.getElementById("amortentiaCard").classList.add("d-none");

};

//Polyjuice Potion
onEvent("pp", "click", function() {
    console.log("Polyjuice Potion Clicked");
    setProperty("pp", "background-color", "blue");
    clearPotionCards();
    
    //show Polyjuice Potion card
    fetchPolyjuice();
    //show page spell card
    document.getElementById("potion-card").classList.remove("d-none");
    document.getElementById("polyjuiceCard").classList.remove("d-none");
    document.getElementById("potion-display").classList.remove("d-none");
});

//variables for Polyjuice Potion
var namePP = "";
var difficultyPP = "";
var effectPP = "";
var inventorPP = "";
var ingredientsPP = "";
var sideEffectsPP = "";
var timePP = "";

function fetchPolyjuice(){
    const requestOptions = {
    method: "GET",
    redirect: "follow"
};

fetch("https://api.potterdb.com/v1/potions?filter[name_cont]=Polyjuice", requestOptions)
    .then((response) => response.json())
    .then(function (result) {
        console.log(result.data[0].attributes);
        //pulls live data into variables and creates json pojo in console (streamlined)
        namePP = (result.data[0].attributes.name);
        difficultyPP = (result.data[0].attributes.difficulty);
        effectPP = (result.data[0].attributes.effect);
        inventorPP = (result.data[0].attributes.inventors);
        ingredientsPP = (result.data[0].attributes.ingredients);
        sideEffectsPP = (result.data[0].attributes.side_effects);
        timePP = (result.data[0].attributes.time);

        //prints live data from variables into console 
        console.log("Name: ", namePP);
        console.log("Difficulty: ", difficultyPP);
        console.log("Effect: ", effectPP);
        console.log("Inventor: ", inventorPP);
        console.log("Ingredients: ", ingredientsPP);
        console.log("Side Effects: ", sideEffectsPP);
        console.log("Time: ", timePP);

        //setText in potion card Polyjuice Potion
        setText("namePP", namePP);
        setText("difficultyPP", difficultyPP);
        setText("effectPP", effectPP);
        setText("inventorPP", inventorPP);
        setText("ingredientsPP", ingredientsPP);
        setText("sideEffectsPP", sideEffectsPP);
        setText("timePP", timePP);
    })
    .catch((error) => console.error(error));
};

//Beautification Potion
onEvent("bp", "click", function(){
    console.log("Beautification Potion Clicked");
    setProperty("bp", "background-color", "blue");
    clearPotionCards();
    
    //show Beautification Potion card
    fetchBeautifyPotion();
    //show page spell card
    document.getElementById("potion-card").classList.remove("d-none");
    document.getElementById("beautificationCard").classList.remove("d-none");
    document.getElementById("potion-display").classList.remove("d-none");
});

//variables for Beautification Potion
var nameBP = "";
var difficultyBP = "";
var effectBP = "";
var inventorBP = "";
var ingredientsBP = "";
var sideEffectsBP = "";
var timeBP = "";

function fetchBeautifyPotion(){
    const requestOptions = {
    method: "GET",
    redirect: "follow"
};

fetch("https://api.potterdb.com/v1/potions?filter[name_cont]=Beautification\n", requestOptions)
    .then((response) => response.json())
    .then(function (result) {
        console.log(result.data[0].attributes);
        //pulls live data into variables and creates json pojo in console (streamlined)
        nameBP = (result.data[0].attributes.name);
        difficultyBP = (result.data[0].attributes.difficulty);
        effectBP = (result.data[0].attributes.effect);
        inventorBP = (result.data[0].attributes.inventors);
        ingredientsBP = (result.data[0].attributes.ingredients);
        sideEffectsBP = (result.data[0].attributes.side_effects);
        timeBP = (result.data[0].attributes.time);

        //prints live data from variables into console 
        console.log("Name: ", nameBP);
        console.log("Difficulty: ", difficultyBP);
        console.log("Effect: ",  effectBP);
        console.log("Inventor: ", inventorBP);
        console.log("Ingredients: ", ingredientsBP);
        console.log("Side Effects: ", sideEffectsBP);
        console.log("Time: ", timeBP);

        //setText in potion card Beautification Potion
        setText("nameBP", nameBP);
        setText("difficultyBP", difficultyBP);
        setText("effectBP", effectBP);
        setText("inventorBP", inventorBP);
        setText("ingredientsBP", ingredientsBP);
        setText("sideEffectsBP", sideEffectsBP);
        setText("timeBP", timeBP);
    })
    .catch((error) => console.error(error));
};

//Elixir of Life Potion
onEvent("eol", "click", function(){
    console.log("Elixir of Life Potion Clicked");
    setProperty("eol", "background-color", "blue");
    clearPotionCards();
    
    //show Elixir of Life Potion card
    fetchElixirofL();
    //show page spell card
    document.getElementById("potion-card").classList.remove("d-none");
    document.getElementById("elixirCard").classList.remove("d-none");
    document.getElementById("potion-display").classList.remove("d-none");
});

//variables for Elixir of Life
var nameEOL = "";
var difficultyEOL = "";
var effectEOL = "";
var inventorEOL = "";
var ingredientsEOL = "";
var sideEffectsEOL = "";
var timeEOL = "";

function fetchElixirofL(){
    const requestOptions = {
    method: "GET",
    redirect: "follow"
};

fetch("https://api.potterdb.com/v1/potions?filter[name_cont]=Elixir of life", requestOptions)
    .then((response) => response.json())
    .then(function(result) {
        console.log(result.data[0].attributes);
        //pulls live data into variables and creates json pojo in console (streamlined)
        nameEOL = (result.data[0].attributes.name);
        difficultyEOL = (result.data[0].attributes.difficulty);
        effectEOL = (result.data[0].attributes.effect);
        inventorEOL = (result.data[0].attributes.inventors);
        ingredientsEOL = (result.data[0].attributes.ingredients);
        sideEffectsEOL = (result.data[0].attributes.side_effects);
        timeEOL = (result.data[0].attributes.time);

        //prints live data from variables into console 
        console.log("Name: ", nameEOL);
        console.log("Difficulty: ", difficultyEOL);
        console.log("Effect: ", effectEOL);
        console.log("Inventor: ", inventorEOL);
        console.log("Ingredients:", ingredientsEOL);
        console.log("Side Effects: ", sideEffectsEOL);
        console.log("Time: ", timeEOL);

        //setText in potion card Elixir of Life
        setText("nameEOL", nameEOL);
        setText("difficultyEOL", difficultyEOL);
        setText("effectEOL", effectEOL);
        setText("inventorEOL", inventorEOL);
        setText("ingredientsEOL", ingredientsEOL);
        setText("sideEffectsEOL", sideEffectsEOL);
        setText("timeEOL", timeEOL);
    
    })
.catch((error) => console.error(error));
};

//Amortentia Potion
onEvent("am", "click", function(){
    console.log("Amortentia Potion Clicked");
    setProperty("am", "background-color", "blue");
    clearPotionCards();
    
    //show Amortentia Potion card
    fetchAmortentia();
    //show page spell card
    document.getElementById("potion-card").classList.remove("d-none");
    document.getElementById("amortentiaCard").classList.remove("d-none");
    document.getElementById("potion-display").classList.remove("d-none");
});

//variables for Amortentia
var nameAM = "";
var difficultyAM = "";
var effectAM = "";
var inventorAM = "";
var ingredientsAM = "";
var sideEffectsAM = "";
var timeAM = "";

function fetchAmortentia() {
    const requestOptions = {
    method: "GET",
    redirect: "follow"
};

fetch("https://api.potterdb.com/v1/potions?filter[name_cont]=Amortentia", requestOptions)
    .then((response) => response.json())
    .then(function(result) {
        console.log(result.data[0].attributes);

        //pulls live data into variables and creates json pojo in console (streamlined)
        nameAM = (result.data[0].attributes.name);
        difficultyAM = (result.data[0].attributes.difficulty);
        effectAM = (result.data[0].attributes.effect);
        inventorAM = (result.data[0].attributes.inventors);
        ingredientsAM = (result.data[0].attributes.ingredients);
        sideEffectsAM = (result.data[0].attributes.side_effects);
        timeAM = (result.data[0].attributes.time);

        //prints live data from variables into console 
        console.log("Name: ", nameAM);
        console.log("Difficulty: ", difficultyAM);
        console.log("Effect: ", effectAM);
        console.log("Inventor: ", inventorAM);
        console.log("Ingredients: ",ingredientsAM);
        console.log("Side Effects: ", sideEffectsAM);
        console.log("Time: ", timeAM);

        //setText in potion card Amortentia
        setText("nameAM", nameAM);
        setText("difficultyAM", difficultyAM);
        setText("effectAM", effectAM);
        setText("inventorAM", inventorAM);
        setText("ingredientsAM", ingredientsAM);
        setText("sideEffectsAM", sideEffectsAM);
        setText("timeAM", timeAM);
    
})
.catch((error) => console.error(error));
};
