//CACHED HTML ELEMENTS
const battleModal1 = document.querySelector('.battle-modal1');
const battleModal2 = document.querySelector('.battle-modal2');
const battleDialog1 = document.querySelector('#battle-dialog1');
const battleDialog2 = document.querySelector('#battle-dialog2');
//attack button
const attackDrone = document.querySelector('#attack-drone');
// const testButton = document.querySelector('.test-button');
const initMenu = document.querySelector('#init-menu')
const initButton = document.querySelector('.init-button')
const gameMenuModal = document.querySelector('.game-menu-modal');
const videobgModal = document.querySelector('.videobg-modal');
const startButton = document.querySelector('.start-button');
const introModal = document.querySelector('.intro-modal');
const ceresModal = document.querySelector('.ceres-modal');
const shipGifModal = document.querySelector('.ship-gif-modal');
const startShipModal = document.querySelector('.start-ship-modal')
const introTextModal1 = document.querySelector('.intro-text-modal1');
const firstNextButton = document.querySelector('#first-next');
const introTextModal2 = document.querySelector('.intro-text-modal2');
const secondNextButton = document.querySelector('#second-next');
const shipScanModal = document.querySelector('.ship-scan-modal');
const resultsModal = document.querySelector('.results-modal');
const thirdNextButton = document.querySelector('#third-next');
const evaModal = document.querySelector('.eva-modal');
const fourthNextButton = document.querySelector('#fourth-next');
const airlocksModal = document.querySelector('.airlocks-modal');
const fifthNextButton = document.querySelector('#fifth-next');
//cargo level 1
const cargoModal = document.querySelector('.cargo-modal');
const sixthNextButton = document.querySelector('#sixth-next');
const reactorNoteModal = document.querySelector('.reactor-startup-modal');
const secretNote = document.querySelector('#secret-note');
const addReactorNote = document.querySelector('#reactor-note-add');
const lootCrateButton1 = document.querySelector('#loot-locked1');
const lootNoNoModal = document.querySelector('.loot1')
    //engineering level
const engineeringModal = document.querySelector('.engineering-modal');
const seventhNextButton = document.querySelector('#seventh-next');
const drone1 = document.querySelector('#drone1');
const reactor = document.querySelector('#reactor');
const lifeSupport = document.querySelector('#life-support');
const engineeringDialog = document.querySelector('#engineering-dialog');
//cargo level 2
const cargoModal2 = document.querySelector('.cargo-modal2');
const eigthNextButton = document.querySelector('#eigth-next');
const lootCrateButton2 = document.querySelector('#loot-locked2');

//crew deck 3 level
const crew3Modal = document.querySelector('.crew3-modal');
const ninthNextButton = document.querySelector('#ninth-next');
//crew deck 2 level
const crew2Modal = document.querySelector('.crew2-modal');
const tenthNextButton = document.querySelector('#tenth-next');
// const drone2 = document.querySelector('#drone2');
//crew deck 1 level
const crew1Modal = document.querySelector('.crew1-modal');
const eleventhNextButton = document.querySelector('#eleventh-next');
const healthButton = document.querySelector('#health-regen');
//galley level
const galleyModal = document.querySelector('.galley-modal');
const twelfthNextButton = document.querySelector('#twelfth-next');
const commandPwModal = document.querySelector('.command-password-modal');
const addPasswordNote = document.querySelector('#password-note-add');
const secretPw = document.querySelector('#pw-note');
//command Deck level
const commandModal = document.querySelector('.command-modal');
const powerButton = document.querySelector('#power-button');
const prizeModal = document.querySelector('.prize-button-modal');
const thirteenthNextButton = document.querySelector('#thirteenth-next');
const drone3 = document.querySelector('#drone3');
const cmdDialog = document.querySelector('#command-dialog');
//cargo hold PRIZE level
const cargoModal3 = document.querySelector('.cargo-modal3');
const lootPrizeModal = document.querySelector('.loot2');
const lootCrateButton3 = document.querySelector('.loot-win');
//audio units
const menuAudio = document.querySelector('#menu-audio');
const gameAudio = document.querySelector('#game-audio');
const fightAudio = document.querySelector('#fight-audio');





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
const drone_1 = new Drone('drone1');
const drone_2 = new Drone('drone2');
const drone_3 = new Drone('drone3');

let droneArray = [drone_1, drone_2, drone_3];

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
            //check health
            if ((player.health > droneArray[0].health) && (droneArray[0].health <= 0)) {
                battleDialog1.innerHTML = (`You've survived`)
                droneArray.shift();
                setTimeout(() => { battleModal1.classList.remove('open'); }, 1000);
                setTimeout(() => { fightAudio.pause(); }, 1000);
                setTimeout(() => { fightAudio.currentTime = 0; }, 1000);
                setTimeout(() => { gameAudio.play(); }, 1000);
                setTimeout(() => { drone1.classList.add('open'); }, 1000);
                // setTimeout(() => { drone2.classList.add('open'); }, 1000);
                setTimeout(() => { drone3.classList.add('open'); }, 1000);
            } else {
                battleDialog1.innerHTML = (`It's a Hit! Drone is at ${droneArray[0].health} HP`);
            }
        } else {
            battleDialog1.innerHTML = (`You missed! Crap!`)
        }
    } 
}




const aiBattleCore = () => {
    if ((player.health > 0) && (droneArray[0].health > 0)) {
        diceRoll();
        if (diceRoll() >= 6) {
            player.health = (player.health - droneArray[0].hitpoints);
            //check health
            if ((droneArray[0].health > player.health) && (player.health <= 0)) {
                battleDialog2.innerHTML = (`You Are Dead. Game Over!`)
                setTimeout(() => { battleModal1.classList.remove('open'); }, 1000);
                setTimeout(() => { fightAudio.pause(); }, 1000);
                setTimeout(() => { fightAudio.currentTime = 0; }, 1000);
                setTimeout(() => { resetGame(); }, 1000);
            } else {
                battleDialog2.innerHTML = (`Ouch! You're hit! Your health is at ${player.health} HP`);
            }
        } else {
            battleDialog2.innerHTML = (`It's a miss! That was too close for comfort...`)
        }
    }
}


const battleCore = () => {
    playerBattleCore();
    aiBattleCore();
    setTimeout(() => { battleDialog1.innerHTML = (` `); }, 2275);
    setTimeout(() => { battleDialog2.innerHTML = (` `); }, 2275);


}

// battleCore();
// console.log(droneArray);

//test my battle functions in the browswer with player input
// testButton.addEventListener('click', battleCore);



//create a function for my hidden health regeneration
const healthRegen = () => {
    console.log(`${player.health}`)
    if (player.heath <= 99) {
        player.health = 100
        console.log(`Oh Thank God! You've found a med-kit! Your health is now at ${player.health} HP`)
    } else if (player.health = 100) {
        console.log(`You already have full health.`)
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

// IF player in Airlock,
//show airlock div 
//show 'to cargo hold' button

// IF player in Cargo Hold, player encounters 2 dead pirates and the LOOT of the game.
//show pirate div
//show <p>
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

//EVENT LISTENERS

const resetDroneImages = () => {
    drone1.classList.remove('open');
    // drone2.classList.remove('open');
    drone3.classList.remove('open');
}

initButton.addEventListener('click', () => {
    initMenu.classList.add('close');
    setTimeout(() => { gameMenuModal.classList.add('open'); }, 350);
    setTimeout(() => { menuAudio.play(); }, 350);
    //play menu music
})

startButton.addEventListener('click', () => {
    gameMenuModal.classList.remove('open');
    setTimeout(() => { videobgModal.classList.add('close'); }, 350);
    setTimeout(() => { gameAudio.play(); }, 350);
    setTimeout(() => { menuAudio.pause(); }, 350);
    setTimeout(() => { introModal.classList.add('open'); }, 1200);
    ceresModal.classList.add('open');
    introTextModal1.classList.add('open');

})

firstNextButton.addEventListener('click', () => {
    ceresModal.classList.remove('open');
    shipGifModal.classList.add('open');
    introTextModal1.classList.remove('open');
    setTimeout(() => { introTextModal2.classList.add('open'); }, 13600);
    setTimeout(() => { shipGifModal.classList.remove('open'); }, 13600);
    setTimeout(() => { startShipModal.classList.add('open'); }, 13600);
})

secondNextButton.addEventListener('click', () => {
    introTextModal2.classList.remove('open');
    introModal.classList.remove('open');
    startShipModal.classList.remove('open');
    shipScanModal.classList.add('open');
    setTimeout(() => { resultsModal.classList.add('open'); }, 4500);

})

thirdNextButton.addEventListener('click', () => {
    shipScanModal.classList.remove('open');
    evaModal.classList.add('open');

})

fourthNextButton.addEventListener('click', () => {
    evaModal.classList.remove('open');
    airlocksModal.classList.add('open');
})

fifthNextButton.addEventListener('click', () => {
    airlocksModal.classList.remove('open');
    cargoModal.classList.add('open');
})

sixthNextButton.addEventListener('click', () => {
    battleModal1.classList.add('open');
    gameAudio.pause();
    gameAudio.currentTime = 0;
    fightAudio.play();
    cargoModal.classList.remove('open');
    engineeringModal.classList.add('open');
})

seventhNextButton.addEventListener('click', () => {
    engineeringModal.classList.remove('open');
    resetDroneImages();
    cargoModal2.classList.add('open');
})

eigthNextButton.addEventListener('click', () => {
    cargoModal2.classList.remove('open');
    crew3Modal.classList.add('open');

})

ninthNextButton.addEventListener('click', () => {
    crew3Modal.classList.remove('open');
    crew2Modal.classList.add('open');
})

tenthNextButton.addEventListener('click', () => {
    crew2Modal.classList.remove('open');
    resetDroneImages();
    crew1Modal.classList.add('open');
})

eleventhNextButton.addEventListener('click', () => {
    crew1Modal.classList.remove('open');
    galleyModal.classList.add('open');
})

twelfthNextButton.addEventListener('click', () => {
    gameAudio.pause();
    gameAudio.currentTime = 0;
    fightAudio.play();
    galleyModal.classList.remove('open');
    commandModal.classList.add('open');
    battleModal1.classList.add('open');
})

thirteenthNextButton.addEventListener('click', () => {
    commandModal.classList.remove('open');
    cargoModal3.classList.add('open');
})

powerButton.addEventListener('click', () => {
    prizeModal.classList.add('open');
    cmdDialog.innerHTML = (`Now that the power is on, you can go get the loot!`)
})

secretNote.addEventListener('click', () => {
    reactorNoteModal.classList.add('open');
})

addReactorNote.addEventListener('click', () => {
    reactorNoteModal.classList.remove('open');
    reactorNote();
    console.log(`Here are your notes: ${player.supplies}`);
})

addPasswordNote.addEventListener('click', () => {
    commandPwModal.classList.remove('open');
    picusPassword();
    console.log(`Here are your notes: ${player.supplies}`)
})

lootCrateButton1.addEventListener('click', () => {
    lootNoNoModal.classList.add('open');
    setTimeout(() => { lootNoNoModal.classList.remove('open'); }, 6000);
})

reactor.addEventListener('click', () => {
    engineeringDialog.innerHTML = (`The Reactor is back online. You still have to turn on the power from the Command Deck.`)
})

lifeSupport.addEventListener('click', () => {
    engineeringDialog.innerHTML = (`Life Support is in Stand-by and will cycle on once the power is restored.`)
})

lootCrateButton2.addEventListener('click', () => {
    lootNoNoModal.classList.add('open');
    setTimeout(() => { lootNoNoModal.classList.remove('open'); }, 6000);
})




healthButton.addEventListener('click', healthRegen);

secretPw.addEventListener('click', () => {
    commandPwModal.classList.add('open');
})

lootCrateButton3.addEventListener('click', () => {
    lootPrizeModal.classList.add('open');
    setTimeout(() => { lootPrizeModal.classList.remove('open'); }, 7000)
    setTimeout(() => { resetGame(); }, 7500);
})

attackDrone.addEventListener('click', battleCore);

//reset game function
const droneArrayIndex = [drone_1, drone_2, drone_3];
const resetGame = () => {
    cargoModal3.classList.remove('open');
    commandModal.classList.remove('open');
    galleyModal.classList.remove('open');
    crew1Modal.classList.remove('open');
    crew2Modal.classList.remove('open');
    crew3Modal.classList.remove('open');
    cargoModal2.classList.remove('open');
    commandPwModal.classList.remove('open');
    reactorNoteModal.classList.remove('open');
    engineeringModal.classList.remove('open');
    cargoModal.classList.remove('open');
    airlocksModal.classList.remove('open');
    evaModal.classList.remove('open');
    resultsModal.classList.remove('open');
    shipScanModal.classList.remove('open');
    introTextModal2.classList.remove('open');
    introTextModal1.classList.remove('open');
    startShipModal.classList.remove('open');
    shipGifModal.classList.remove('open');
    ceresModal.classList.remove('open');
    introModal.classList.remove('open');
    videobgModal.classList.remove('close');
    gameMenuModal.classList.add('open');
    resetDroneImages();
    gameAudio.pause();
    menuAudio.currentTime = 0;
    gameAudio.currentTime = 0;
    fightAudio.currentTime = 0;
    menuAudio.play();
    player.health = 100;
    player.supplies = [];
    player.weapons = [];
    droneArray = droneArrayIndex;
}