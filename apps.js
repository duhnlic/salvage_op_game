//CACHED HTML ELEMENTS


diceRoll = () => {
    return Math.ceil(Math.random() * 9)
}

// console.log(diceRoll());
// The webpage opens with an initialize game button that has an event listener that will ‘load’ the game and bring up the game menu


// A music track will begin to play (menu music)


// The game menu will consist of a ‘start game’ button / a ‘reset game’ button / a ‘credits’ button


// All buttons will be on the main page, not a modal and the initialize button will no longer be displayed when in the menu


// Credits will be in the form of a modal


// When the player starts the game the buttons will disappear and a new Character Selection window pops up
class Player {
    constructor(name, accuracy) {
        this.name = name;
        this.health = 100;
        this.accuracy = accuracy;
        this.inventory = [
            this.supplies = [],
            this.weapons = []
        ];
    }
    throwDice() {
        return diceRoll();
    };

}

//create the player ship at the end
const playerShip = {
        name: "The Picus",
        health: 100,
        accuracy: (Math.floor(Math.random() * 5) + 2),
        hitpoint: 30,
        throwDice() {
            return diceRoll();
        }
    }
    //create first class for main enemies
class Drone {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.accuracy = (Math.floor((Math.random() * 3) + 6) * 0.1).toFixed(1);
        this.hitpoints = 15;
    }
    throwDice() {
        return diceRoll();
    };
}

//create bonus enemy
const pirateShip = {
        name: "The Cybelle",
        health: 150,
        accuracy: (Math.floor(Math.random() * 3)),
        hitpoints: 30,
        throwDice() {
            return diceRoll();
        }
    }
    //create my player character options
const medic = new Player('medic', '.4');
const engineer = new Player('engineer', '.7');
const pilot = new Player('pilot', '1');
const loadmaster = new Player('loadmaster', '.5');

//create my enemies
const drone1 = new Drone('drone1', '.');
const drone2 = new Drone('drone2');
const drone3 = new Drone('drone3');

//test being able to adjust hit points for larger battle

//create a weapon for the character to have/find
class Weapon {
    constructor(name, hitpoints) {
        this.name = name;
        this.hitpoints = hitpoints;
    }
}

const sideArm = new Weapon('Walther P88 Compact', '30');
const shockBaton = new Weapon('Shock Baton', '20');
// Once the character is selected, potentially a basic animation of a ship will paint the scene for the player.
// A dialog box will animate text typing and will tell the player of the beginning of the story. 


// The player will be presented with things to do (button presses)[these are not choices]
// The player must complete all button tasks before they will be allowed to move on to the next part of the first level


// The player will be presented with the option to investigate or continue past the ship.
// If the player continues past the ship they will be tantalized with an event that is designed to make them want to investigate. 


// If they still decide to go on past, the game is over. 
// If the player chooses to investigate, the game continues on to a new path.


// Player will be asked to gather supplies (Hopefully a mini game where the player must find and click on them/ most likely buttons)


// Whether the player gears up or not they will be given options for boarding methods
// Both methods will get them on board but they will have an effect later on
// Player will roll to manually open the door (easy) 


// Player is now on board and the scene changes. (Level 1 complete) 


// HTML/CSS/JS to make the scene change for the player


// Player enters the ship through the EXTERNAL AIRLOCK
// Once the player opens the inner airlock New dialog modal will animate text to paint the scene for the player.
// The player will roll(easy) to turn their headlamp.


// Dialog will tell the player of the scene and what they see.


// Player will be able to explore the ship in sequential order of open hatches. 
// Player will go from AIRLOCKS>CARGO>ENGINEERING>CREWD3>CREWD2>CREWD1>GALLEY>COMMAND>CARGO>(OPTIONAL)ENGINEERING>COMMAND
const gameCore = () => {

}

// 3 drones are on board the ship. 1 in the command deck. 1 in engineering. And one patrolling the man shaft.
// Random chance of running into the shaft drones while moving from room to room. 
// If player encounters drone and fails to beat drone, player gets a chance to roll or an escape, or the player dies. 
// Randomly, at anytime while going from room to room in the main shaft, the player may encounter the attack drone. 


// Potentially each room has it’s own atmospheric music.
// The player’s goal is to power on the ship in order to take the loot in the Cargo hold (They will also get the choice to repair and take the ship if they would like.) 


// IF player in Airlock, This is the starting room
//External airlocks must be closed in order to power on the ship.


// IF player in Cargo Hold, player encounters 2 dead pirates and the LOOT of the game.
// loot is only accessible if the ship’s power is on. 
//Potentially one of the pirates has a PW on them for powering up the reactor


// IF player in engineering, 1 Drone. 
//player will encounter and be attacked by a drone.
// IF player survives the player will be able to power on the reactor and restore life support (needed for powering on the ship)


// IF player in Crew Deck 3, The Room is Empty


// IF player in Crew Deck 2
// Player will be told the door is locked and they can roll to unlock the door.
// IF the door is unlocked the player will encounter an NPC
// 50% chance NPC will automatically join player team or drone will show up.
// IF drone shows up, player must engage.
// IF player beats drone in certain number of turns, NPC lives, ELSE NPC dies.
// (NPC has secret early win key for optional end battle)
// IF NPC joins player, Hidden Ammo will become available in this location.
// Hidden ammo will be in the form of an extra die to be roll on each roll.
// Different player newClass choices will interact with NPC differently
// IF player is medic: player gives a protein bar and water pack out of player’s med-kit, NPC health goes up by 5
// IF player is engineer: player is an old friend of NPC, both NPC and Player gain 20 base health
// IF player is pilot: player is enemy of NPC, both NPC and player loose 10 base health
// IF player is loadmaster: player does not know NPC but gains 10 base health, NPC looses 10 base health


// IF the player is in Crew Deck 1
// Player will have a chance to find a hidden health regeneration


// IF the player is in the Galley
// Player will encounter 2 dead pirates who have supplies on them the character can take if they check.


// IF player is in the Command Deck
// Player will encounter and be attacked by a drone.
// IF the player survives, they can use this deck to power on the ship and take control IF the player has already cleared the drone in the engineering bay and done repairs to the ship.
//