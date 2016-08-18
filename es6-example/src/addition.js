export const print = (...args) => console.log(args[0] + ":" + args[1]);
const defautLine = "Starts your journey now!!!" ;
const BR = "<br />"

export function addToOutput(newLine=defautLine){
	let output = document.querySelector("#output");
	output.innerHTML = output.innerHTML + BR + newLine;
}


export var options = {
	_intro:"You can type",
	_options: ["left", "right", "up", "down", "help", "poke"],
	outputOptions(){
		this._options.forEach(f => addToOutput(this._intro + " " + f));
	}
}


