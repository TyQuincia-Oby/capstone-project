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
    studentReply = response.choices[0].message.content;
    console.log("Hogwarts reply:", HogwartsReply);
    setText("output-display", HogwartsReply)

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

//Lumos
onEvent("lu", "click", function(){
    console.log("Lumos Spell Clicked");
    //show Lumos Spell card
    fetchLumosMaxima();
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
        console.log(result);
    
    })
    .catch((error) => console.error(error));
};

//Disarming Charm
onEvent("dc", "click", function(){
    console.log("Disarming Charm Clicked")
    //show Disarming Charm Spell Card
    fetchDisarmingCharm();
});

//variables for Levitation Charm
var nameLC = "";
var categoryLC = "";
var effectLC = "";
var creatorLC = "";
var incantationLC = "";
var handLC = "";

function fetchDisarmingCharm(){
const requestOptions = {
    method: "GET",
    redirect: "follow"
};

fetch("https://api.potterdb.com/v1/spells?filter[name_cont]=disarming charm", requestOptions)
    .then((response) => response.json())
    .then(function(result) {
        console.log(result);
    
    })
    .catch((error) => console.error(error));
};

//Levitation Charm 
onEvent("lc", "click", function(){
    console.log("Levitation Charm Clicked");
    //show Levitation Charm card
    fetchLevitationCharm();

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
        console.log(result);
    
    })
    .catch((error) => console.error(error));
};


//Patronus Charm
onEvent("pc", "click", function(){
    console.log("Patronus Charm Clicked")
    //show Patronus Charm Spell Card
    fetchPatronusCharm();
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
        console.log(result);
    
    })
    .catch((error) => console.error(error));
};


//Boggart Banishing Spell
onEvent("bbs", "click", function(){
    console.log("Boggart Banishing Spell Clicked")
    //show Boggart Banishing Spell Card
    fetchBogBan();
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
    .then(function (result) { console.log(result);

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

//Polyjuice Potion
onEvent("pp", "click", function() {
    console.log("Polyjuice Potion Clicked");
    //show Polyjuice Potion card
    fetchPolyjuice();
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

fetch("https://api.potterdb.com/v1/potions?filter[name_cont]=Polyjuice\n", requestOptions)
    .then((response) => response.json())
    .then(function (result) {
        console.log(result);

    })
    .catch((error) => console.error(error));
};

//Beautification Potion
onEvent("bp", "click", function(){
    console.log("Beautification Potion Clicked");
    //show Beautification Potion card
    fetchBeautifyPotion();
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
        console.log(result);

    })
    .catch((error) => console.error(error));
};

//Elixir of Life Potion
onEvent("eol", "click", function(){
    console.log("Elixir of Life Potion Clicked");
    //show Elixir of Life Potion card
    fetchElixirofL();
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
        console.log(result);
    
    })
.catch((error) => console.error(error));
};

//Amortentia Potion
onEvent("am", "click", function(){
    console.log("Amortentia Potion Clicked");
    //show Amortentia Potion card
    fetchAmortentia();
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
        console.log(result);
        nameAM = result.data[0].attributes.name;
        difficultyAM = result.data[0].attributes.difficulty;
        effectAM = result.data[0].attributes.effect;
        inventorAM = result.data[0].attributes.inventor;
        ingredientsAM = result.data[0].attributes.ingredients;
        sideEffectsAM = result.data[0].attributes.sideeffects;
        timeAM = result.data[0].attributes.time;
        console.log(nameAM);

        setText("potion-card", nameAM);
        setText("potion-card", difficultyAM);
        setText("potion-card", effectAM);
        setText("potion-card", inventorAM);
        setText("potion-card", ingredientsAM);
        setText("potion-card", sideEffectsAM);
        setText("potion-card", timeAM);
    
})
.catch((error) => console.error(error));
};
