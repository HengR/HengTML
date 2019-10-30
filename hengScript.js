

p1Pick = false;
p2Pick = false;



var pickFire = document.getElementById("fire");
var pickWater = document.getElementById("water");
var pickGrass = document.getElementById("grass");
var pickRandom = document.getElementById("random");
var p1Pokemon = document.getElementById("p1pokemon");
var p2Pokemon = document.getElementById("p2pokemon");
var p1Name = document.getElementById("p1Name");
var p2Name = document.getElementById("p2Name");
var resetButton = document.getElementById("reset");
var startButton = document.getElementById("ready");
var updateStatus = document.getElementById("status");

pickFire.onclick = function(){
	if (!p1Pick){
		p1Sel = 'fire';
		p1TurnOver();
	} else if(p1Pick) {
		p2Sel = 'fire';
		p2TurnOver();
	}
	
};


pickWater.onclick = function(){
	if (!p1Pick){
		p1Sel = 'water';
		p1TurnOver();
	} else if(p1Pick) {
		p2Sel = 'water';
	    p2TurnOver();
	}
};
pickGrass.onclick = function(){
	if (!p1Pick){
		p1Sel = 'grass';
		p1TurnOver();
	} else if(p1Pick) {
		p2Sel = 'grass';
		p2TurnOver();
	}
};

pickRandom.onclick = function(){
	num = Math.floor(Math.random() * 3) + 1;
	if(num == 1){
		selection = 'fire';
	} else if(num == 2){
		selection = 'water';
	} else {
		selection = 'grass';
	}
	if (!p1Pick){
		p1Sel = selection;
		p1TurnOver();
	} else if(p1Pick) {
		p2Sel = selection;
		p2TurnOver();
	}
};

startButton.onclick = function(){
	gReady = p1Pick&&p2Pick;
	if(gReady){
		alert("FIGHT");
		p1Name.innerHTML = nameFunc(p1Sel);
		p2Name.innerHTML = nameFunc(p2Sel);
	    p1Pokemon.innerHTML = "<img src = '" + p1Sel + ".jpg' width = '100' height = '100'>" ;
		p2Pokemon.innerHTML = "<img src = '" + p2Sel + ".jpg' width = '100' height = '100'>";
	}
};


function nameFunc(x){
	name = x;
	if (x == 'grass') {
		name = "Berlbaterd"
	} else if (x =='fire') {
		name = "Cheritard";
	} else if (x =='water') {
		name = "Skwertard";
	}
	return name;
}

function p1TurnOver(){
		p1Pick = true;
		updateStatus.innerHTML = "[Player Two], Choose your pokemon!";
		return
}

function p2TurnOver(){
		p2Pick = true;
		updateStatus.innerHTML = "Fight me 1v1 cuz";
		return
}

resetButton.onclick = function(){
		p1Pokemon.innerHTML = "<img src = 'unknown.jpg' width = '100' height = '100'>" ;
		p2Pokemon.innerHTML = "<img src = 'unknown.jpg' width = '100' height = '100'>";
		p1Name.innerHTML = "name";
		p2Name.innerHTML = "name";
		updateStatus.innerHTML = "[Player One], Choose your pokemon!";
		p1Pick = false;
		p2Pick = false;
}