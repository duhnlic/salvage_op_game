//CACHED HTML ELEMENTS
const battleModal1 = document.querySelector('.battle-modal1');
const battleModal2 = document.querySelector('.battle-modal2');
const commandModal = document.querySelector('#command-modal');
const galleyModal = document.querySelector('#galley-modal');
const crew1Modal = document.querySelector('#crew1-modal');
const crew2Modal = document.querySelector('#crew2-modal');
const crew3Modal = document.querySelector('#crew3-modal');
const airlockModal = document.querySelector('#airlock-modal');
const cargoModal = document.querySelector('#cargo-modal');
const engineeringModal = document.querySelector('#engineering-modal');
const reactorStartModal = document.querySelector('#reactor-startup-modal');
const commandPwModal = document.querySelector('#command-password-modal');
// const testButton = document.querySelector('.test-button');
const initMenu = document.querySelector('#init-menu')
const initButton = document.querySelector('.init-button')
const gameMenuModal = document.querySelector('.game-menu-modal');



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









//create an object for my npc
const npc = {
    name: "Kay Tolen",
    health: 75,
    alive: "true"
}

//create an object for my player
const player = {
    health: 100,
    supplies: [],
    weapons: [],

}

//create a class for my occupations for my user
// const occupation = {
//     medic: npc.health += 5,
//     engineer: (npc.health += 20) && (player.health += 20),
//     pilot: (npc.health -= 10) && (player.health -= 10),
//     loadmaster: (npc.health -= 10) && (player.health += 10),
// }

//create the player ship at the end(GAME BONUS)
// const playerShip = {
//     name: "The Picus",
//     health: 100,
//     hitpoint: 30,
// }

//create class for main enemies
class Drone {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.hitpoints = 15;
        this.alive = 'true';
    }

}

//create my enemies
const drone1 = new Drone('drone1');
const drone2 = new Drone('drone2');
const drone3 = new Drone('drone3');

const droneArray = [drone1, drone2, drone3];

//create bonus enemy
// const pirateShip = {
//     name: "The Cybelle",
//     health: 150,
//     hitpoints: 30,

// }

//create a weapon for the character to have/find
class Weapon {
    constructor(name, hitpoints) {
        this.name = name;
        this.hitpoints = hitpoints;
    }
}

const sideArm = new Weapon('Walther P88 Compact', '30');
const shockBaton = new Weapon('Shock Baton', '20');









//test
player.weapons.push(shockBaton);
console.log(player.weapons[0].hitpoints)



// create a battle function
const playerBattleCore = () => {
    if ((player.health > 0) && (droneArray[0].health > 0)) {
        diceRoll();
        if (diceRoll() >= 4) {
            droneArray[0].health -= player.weapons[0].hitpoints;
            console.log(`It's a Hit! Drone is at ${droneArray[0].health} HP`);
        } else {
            console.log(`You missed! Fuck!`)
        }
    } else if ((player.health > droneArray[0].health) && (droneArray[0].health <= 0)) {
        console.log(`You've survived`)
        droneArray.pop();

    }
}


const aiBattleCore = () => {
    if ((player.health > 0) && (droneArray[0].health > 0)) {
        diceRoll();
        if (diceRoll() >= 6) {
            player.health = (player.health - droneArray[0].hitpoints);
            console.log(`Ouch! You're hit! Your health is at ${player.health} HP`);
        } else {
            console.log(`It's a miss! That was too close for comfort...`)
        }
    } else if ((player.health < droneArray[0].health) && (player.health <= 0)) {
        console.log(`You Are Dead. Game Over!`)
    }
}

const battleCore = () => {
    playerBattleCore();
    aiBattleCore();
}

// battleCore();
// console.log(droneArray);

//test my battle functions in the browswer with player input
// testButton.addEventListener('click', battleCore);



//create a function for my hidden health regeneration
const healthRegen = () => {
    if (player.heath < 100) {
        player.health = 100
        console.log(`Oh Thank God! You've found a med-kit! Your health is now at ${player.health} HP`)
    } else {
        consnsole.log(`You already have full health.`)
    }
}

//create a function for my reactor start up procedures
const reactorNote = () => {
    player.supplies.push("note")
}

//create a function for my command deck password
const picusPassword = () => {
    player.supplies.push("password");
}

//test my functions
// reactorNote();
// picusPassword();
// console.log(player.supplies);



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
// The player’s goal is to power on the ship in order to take the loot in the Cargo hold (They will also get the choice to repair and take the ship if they would like.) 
// 3 drones are on board the ship. 1 in the command deck. 1 in engineering. And one patrolling the man shaft.
// Random chance of running into the shaft drones while moving from room to room. 
// If player encounters drone and fails to beat drone, player gets a chance to roll or an escape, or the player dies. 
// Randomly, at anytime while going from room to room in the main shaft, the player may encounter the attack drone. 
// Potentially battling has it’s own atmospheric music.


const gameCore = () => {
    // IF player in Airlock,
    //show airlock div 
    //show 'to cargo hold' button

    // IF player in Cargo Hold, player encounters 2 dead pirates and the LOOT of the game.
    //show pirate div
    //show <p>
    // loot is only accessible if the ship’s power is on. 
    //Potentially one of the pirates has a PW on them for powering up the reactor

}









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

//EVENT LISTENERS


initButton.addEventListener('click', () => {
    initMenu.classList.add('close');
    setTimeout(() => { gameMenuModal.classList.add('open'); }, 350);
    //play menu music
})