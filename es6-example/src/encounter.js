import "babel-core/register";
import "babel-polyfill";

export class Encounter {
	constructor(introText=""){
		this.introText = introText;
	}

	whenEncounter(){
		return this.introText;
	}

	* poke(){
		yield "what's up!";
	}
}

export class Bear extends Encounter {
	constructor(){
		super("grr grow, you encountered a Bear")
	}

	* poke(){
		yield "Grr ......";
		yield "Bear is aggressive";
		yield "Bear is attacking you, watch out!"
	}
}

export class Angel extends Encounter {
	constructor(){
		super("grr grow, you encountered a Angel! This will give you strength and healing possibilities")
	}

	* poke(){
		yield "You can't catch me ......";
		yield "Leave me alone";
		yield "I Love you :)"
	}
}

export class Ghost extends Encounter {
	constructor(){
		super()
		this.introText = "Booh, you encountered a Ghost!"
	}
}

export function generate() {
	var number = Math.floor(Math.random() * (3)) + 1;
	
	if(number == 1) {
		return new Bear();
	} else if (number == 2) {
		return new Angel();
	} else if (number == 3) {
		return new Ghost();
	} else {
		return new Encounter();
	}
}