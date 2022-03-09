let words = ["noles", "melas", "waist", "ohias", "mummy", "shakt", "plume", "azurn", "aiyee", "rewth", "linum", "jembe", "porch", "moron", "vaute", "wahoo", "raile", "gimpy", "linac", "gyoza", "sword", "cooey", "knurs", "safes", "mites", "eathe", "easle", "zeals", "bunjy", "claes", "alkos", "boxed", "lammy", "braks", "begem", "ghyll", "unbid", "taxus", "sigil", "crepy", "emove", "sists", "beany", "kants", "cardy", "tiros", "octas", "sowne", "simis", "chons", "rhyta", "bases", "bitsy", "grrls", "innit", "reefs", "trant", "hushy", "grill", "vexer", "posed", "treat", "rello", "kutch", "yahoo", "sibbs", "annul", "vertu", "unsew", "tatou", "dewed", "stour", "gamut", "vlogs", "lemme", "cheth", "parrs", "sclim", "genty", "input", "boppy", "lefte", "broch", "stroy", "cauls", "ribby", "auger", "urena", "belly", "suite", "crops", "pedal", "decor", "grovy", "kynde", "hydro", "fusil", "curli", "chasm"]
// words = ["happy", "mummy"];
let theWord = words[Math.floor(Math.random() * words.length)]

let theWordArr = theWord.split('');
console.log(theWordArr)

function isItInTheWord(letter){
    let thing = false;
    for(let i=0;i<5;i++) {
        if(letter==theWordArr[i]) {
            thing = true
        }
    }
    return thing;
}


function guess(that,number) {
    let letter = that.value;
    console.log(that)
    console.log(that.value)
    console.log(number)
    if(isItInTheWord(letter)) {
        console.log("yes")
        $(that).css("background-color", "yellow");
        if(letter == theWordArr[number-1]) {
            $(that).css("background-color", "lime");
        }
    }
    else {
        $(that).css("background-color", "gray");
    }
    if(letter==''||letter==' ') {
        $(that).css("background-color", "dark-gray");
        
    }
}