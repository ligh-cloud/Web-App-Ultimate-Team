
const players = [
    {
        "id": 1,
        "name": "Lionel Messi",
        "photo": "https://cdn.sofifa.net/players/158/023/25_120.png",
        "position": "RW",
        "nationality": "Argentina",
        "flag": "https://cdn.sofifa.net/flags/ar.png",
        "club": "Inter Miami",
        "logo": "https://cdn.sofifa.net/meta/team/239235/120.png",
        "rating": 93,
        "pace": 85,
        "shooting": 92,
        "passing": 91,
        "dribbling": 95,
        "defending": 35,
        "physical": 65
    },
    {
        "id": 2,
        "name": "Cristiano Ronaldo",
        "photo": "https://cdn.sofifa.net/players/020/801/25_120.png",
        "position": "ST",
        "nationality": "Portugal",
        "flag": "https://cdn.sofifa.net/flags/pt.png",
        "club": "Al Nassr",
        "logo": "https://cdn.sofifa.net/meta/team/2506/120.png",
        "rating": 91,
        "pace": 84,
        "shooting": 94,
        "passing": 82,
        "dribbling": 87,
        "defending": 34,
        "physical": 77
    },
    {
        "id": 3,
        "name": "Kevin De Bruyne",
        "photo": "https://cdn.sofifa.net/players/192/985/25_120.png",
        "position": "LCM",
        "nationality": "Belgium",
        "flag": "https://cdn.sofifa.net/flags/be.png",
        "club": "Manchester City",
        "logo": "https://cdn.sofifa.net/players/239/085/25_120.png",
        "rating": 91,
        "pace": 74,
        "shooting": 86,
        "passing": 93,
        "dribbling": 88,
        "defending": 64,
        "physical": 78
    },
    {
        "id": 4,
        "name": "Kylian Mbappé",
        "photo": "https://cdn.sofifa.net/players/231/747/25_120.png",
        "position": "ST",
        "nationality": "France",
        "flag": "https://cdn.sofifa.net/flags/fr.png",
        "club": "Real Madrid",
        "logo": "https://cdn.sofifa.net/meta/team/3468/120.png",
        "rating": 92,
        "pace": 97,
        "shooting": 89,
        "passing": 80,
        "dribbling": 92,
        "defending": 39,
        "physical": 77
    },
    {
        "id": 5,
        "name": "Virgil van Dijk",
        "photo": "https://cdn.sofifa.net/players/203/376/25_120.png",
        "position": "RCB",
        "nationality": "Netherlands",
        "flag": "https://cdn.sofifa.net/flags/nl.png",
        "club": "Liverpool",
        "logo": "https://cdn.sofifa.net/meta/team/8/120.png",
        "rating": 90,
        "pace": 75,
        "shooting": 60,
        "passing": 70,
        "dribbling": 72,
        "defending": 92,
        "physical": 86
    },
    {
        "id": 6,
        "name": "Antonio Rudiger",
        "photo": "https://cdn.sofifa.net/players/205/452/25_120.png",
        "position": "LCB",
        "nationality": "Germany",
        "flag": "https://cdn.sofifa.net/flags/de.png",
        "club": "Real Madrid",
        "logo": "https://cdn.sofifa.net/meta/team/3468/120.png",
        "rating": 88,
        "pace": 82,
        "shooting": 55,
        "passing": 73,
        "dribbling": 70,
        "defending": 86,
        "physical": 86
    },
    {
        "id": 7,
        "name": "Neymar Jr",
        "photo": "https://cdn.sofifa.net/players/190/871/25_120.png",
        "position": "LW",
        "nationality": "Brazil",
        "flag": "https://cdn.sofifa.net/flags/br.png",
        "club": "Al-Hilal",
        "logo": "https://cdn.sofifa.net/meta/team/7011/120.png",
        "rating": 90,
        "pace": 91,
        "shooting": 83,
        "passing": 86,
        "dribbling": 94,
        "defending": 37,
        "physical": 61
    },
    {
        "id": 8,
        "name": "Mohamed Salah",
        "photo": "https://cdn.sofifa.net/players/209/331/25_120.png",
        "position": "RW",
        "nationality": "Egypt",
        "flag": "https://cdn.sofifa.net/flags/eg.png",
        "club": "Liverpool",
        "logo": "https://cdn.sofifa.net/meta/team/8/120.png",
        "rating": 89,
        "pace": 93,
        "shooting": 87,
        "passing": 81,
        "dribbling": 90,
        "defending": 45,
        "physical": 75
    },
    {
        "id": 9,
        "name": "Joshua Kimmich",
        "photo": "https://cdn.sofifa.net/players/212/622/25_120.png",
        "position": "RCM",
        "nationality": "Germany",
        "flag": "https://cdn.sofifa.net/flags/de.png",
        "club": "Bayern Munich",
        "logo": "https://cdn.sofifa.net/meta/team/503/120.png",
        "rating": 89,
        "pace": 70,
        "shooting": 75,
        "passing": 88,
        "dribbling": 84,
        "defending": 84,
        "physical": 81
    },
    {
        "id": 10,
        "name": "Jan Oblak",
        "photo": "https://cdn.sofifa.net/players/200/389/25_120.png",
        "position": "GK",
        "nationality": "Slovenia",
        "flag": "https://cdn.sofifa.net/flags/si.png",
        "club": "Atletico Madrid",
        "logo": "https://cdn.sofifa.net/meta/team/7980/120.png",
        "rating": 91,
        "diving": 89,
        "handling": 90,
        "kicking": 78,
        "reflexes": 92,
        "speed": 50,
        "positioning": 88
    },
    {
        "id": 11,
        "name": "Luka Modrić",
        "photo": "https://cdn.sofifa.net/players/177/003/25_120.png",
        "position": "LCM",
        "nationality": "Croatia",
        "flag": "https://cdn.sofifa.net/flags/hr.png",
        "club": "Real Madrid",
        "logo": "https://cdn.sofifa.net/meta/team/3468/120.png",
        "rating": 88,
        "pace": 74,
        "shooting": 78,
        "passing": 89,
        "dribbling": 90,
        "defending": 72,
        "physical": 65
    },
    {
        "id": 12,
        "name": "Vinicius Junior",
        "photo": "https://cdn.sofifa.net/players/238/794/25_120.png",
        "position": "LW",
        "nationality": "Brazil",
        "flag": "https://cdn.sofifa.net/flags/br.png",
        "club": "Real Madrid",
        "logo": "https://cdn.sofifa.net/meta/team/3468/120.png",
        "rating": 89,
        "pace": 91,
        "shooting": 88,
        "passing": 85,
        "dribbling": 94,
        "defending": 39,
        "physical": 61
    },
    {
        "id": 13,
        "name": "Brahim Diáz",
        "photo": "https://cdn.sofifa.net/players/231/410/25_120.png",
        "position": "LW",
        "nationality": "Morocco",
        "flag": "https://cdn.sofifa.net/flags/ma.png",
        "club": "Real Madrid",
        "logo": "https://cdn.sofifa.net/meta/team/3468/120.png",
        "rating": 82,
        "pace": 85,
        "shooting": 74,
        "passing": 78,
        "dribbling": 85,
        "defending": 31,
        "physical": 56
    },
    {
        "id": 14,
        "name": "Karim Benzema",
        "photo": "https://cdn.sofifa.net/players/165/153/25_120.png",
        "position": "ST",
        "nationality": "France",
        "flag": "https://cdn.sofifa.net/flags/fr.png",
        "club": "Al-Ittihad",
        "logo": "https://cdn.sofifa.net/meta/team/476/120.png",
        "rating": 90,
        "pace": 77,
        "shooting": 90,
        "passing": 83,
        "dribbling": 88,
        "defending": 40,
        "physical": 78
    },
    {
        "id": 15,
        "name": "Erling Haaland",
        "photo": "https://cdn.sofifa.net/players/239/085/25_120.png",
        "position": "ST",
        "nationality": "Norway",
        "flag": "https://cdn.sofifa.net/flags/no.png",
        "club": "Manchester City",
        "logo": "https://cdn.sofifa.net/players/239/085/25_120.png",
        "rating": 91,
        "pace": 89,
        "shooting": 94,
        "passing": 65,
        "dribbling": 80,
        "defending": 45,
        "physical": 88
    },
    {
        "id": 16,
        "name": "N'Golo Kanté",
        "photo": "https://cdn.sofifa.net/players/215/914/25_120.png",
        "position": "CDM",
        "nationality": "France",
        "flag": "https://cdn.sofifa.net/flags/fr.png",
        "club": "Al-Ittihad",
        "logo": "https://cdn.sofifa.net/meta/team/476/120.png",
        "rating": 87,
        "pace": 77,
        "shooting": 66,
        "passing": 75,
        "dribbling": 82,
        "defending": 88,
        "physical": 82
    },
    {
        "id": 17,
        "name": "Alphonso Davies",
        "photo": "https://cdn.sofifa.net/players/234/396/25_120.png",
        "position": "LB",
        "nationality": "Canada",
        "flag": "https://cdn.sofifa.net/flags/ca.png",
        "club": "Bayern Munich",
        "logo": "https://cdn.sofifa.net/meta/team/503/120.png",
        "rating": 84,
        "pace": 96,
        "shooting": 68,
        "passing": 77,
        "dribbling": 82,
        "defending": 76,
        "physical": 77
    },
    {
        "id": 18,
        "name": "Yassine Bounou",
        "photo": "https://cdn.sofifa.net/players/209/981/25_120.png",
        "position": "GK",
        "nationality": "Morocco",
        "flag": "https://cdn.sofifa.net/flags/ma.png",
        "club": "Al-Hilal",
        "logo": "https://cdn.sofifa.net/meta/team/7011/120.png",
        "rating": 84,
        "diving": 81,
        "handling": 82,
        "kicking": 77,
        "reflexes": 86,
        "speed": 38,
        "positioning": 83
    },
    {
        "id": 19,
        "name": "Bruno Fernandes",
        "photo": "https://cdn.sofifa.net/players/212/198/25_120.png",
        "position": "RCM",
        "nationality": "Portugal",
        "flag": "https://cdn.sofifa.net/flags/pt.png",
        "club": "Manchester United",
        "logo": "https://cdn.sofifa.net/meta/team/14/120.png",
        "rating": 88,
        "pace": 75,
        "shooting": 85,
        "passing": 89,
        "dribbling": 84,
        "defending": 69,
        "physical": 77
    },
    {
        "id": 20,
        "name": "Jadon Sancho",
        "photo": "https://cdn.sofifa.net/players/233/049/25_120.png",
        "position": "LW",
        "nationality": "England",
        "flag": "https://cdn.sofifa.net/flags/gb-eng.png",
        "club": "Manchester United",
        "logo": "https://cdn.sofifa.net/meta/team/14/120.png",
        "rating": 84,
        "pace": 85,
        "shooting": 74,
        "passing": 78,
        "dribbling": 88,
        "defending": 34,
        "physical": 63
    },
    {
        "id": 21,
        "name": "Trent Alexander-Arnold",
        "photo": "https://cdn.sofifa.net/players/231/281/25_120.png",
        "position": "RB",
        "nationality": "England",
        "flag": "https://cdn.sofifa.net/flags/gb-eng.png",
        "club": "Liverpool",
        "rating": 87,
        "pace": 76,
        "shooting": 66,
        "passing": 89,
        "dribbling": 80,
        "defending": 79,
        "physical": 71
    },
    {
        "id": 22,
        "name": "Achraf Hakimi",
        "photo": "https://cdn.sofifa.net/players/235/212/25_120.png",
        "position": "RB",
        "nationality": "Morocco",
        "flag": "https://cdn.sofifa.net/flags/ma.png",
        "club": "Paris Saint-Germain",
        "logo": "https://cdn.sofifa.net/meta/team/591/120.png",
        "rating": 84,
        "pace": 91,
        "shooting": 76,
        "passing": 80,
        "dribbling": 80,
        "defending": 75,
        "physical": 78
    },
    {
        "id": 23,
        "name": "Youssef En-Nesyri",
        "photo": "https://cdn.sofifa.net/players/235/410/25_120.png",
        "position": "ST",
        "nationality": "Morocco",
        "flag": "https://cdn.sofifa.net/flags/ma.png",
        "club": "Fenerbahçe",
        "logo": "https://cdn.sofifa.net/meta/team/88/120.png",
        "rating": 83,
        "pace": 82,
        "shooting": 82,
        "passing": 63,
        "dribbling": 77,
        "defending": 36,
        "physical": 80
    },
    {
        "id": 24,
        "name": "Noussair Mazraoui",
        "photo": "https://cdn.sofifa.net/players/236/401/25_120.png",
        "position": "LB",
        "nationality": "Morocco",
        "flag": "https://cdn.sofifa.net/flags/ma.png",
        "club": "Manchester United",
        "logo": "https://cdn.sofifa.net/meta/team/14/120.png",
        "rating": 81,
        "pace": 78,
        "shooting": 66,
        "passing": 77,
        "dribbling": 83,
        "defending": 77,
        "physical": 71
    },
    {
        "id": 25,
        "name": "Ismael Saibari",
        "photo": "https://cdn.sofifa.net/players/259/480/25_120.png",
        "position": "LCM",
        "nationality": "Morocco",
        "flag": "https://cdn.sofifa.net/flags/ma.png",
        "club": "PSV",
        "logo": "https://cdn.sofifa.net/meta/team/682/120.png",
        "rating": 83,
        "pace": 89,
        "shooting": 78,
        "passing": 80,
        "dribbling": 86,
        "defending": 55,
        "physical": 84
    },
    {
        "id": 26,
        "name": "Gianluigi Donnarumma",
        "photo": "https://cdn.sofifa.net/players/230/621/25_120.png",
        "position": "GK",
        "nationality": "Italy",
        "flag": "https://cdn.sofifa.net/flags/it.png",
        "club": "Paris Saint-Germain",
        "logo": "https://cdn.sofifa.net/meta/team/591/120.png",
        "rating": 89,
        "diving": 88,
        "handling": 84,
        "kicking": 75,
        "reflexes": 90,
        "speed": 50,
        "positioning": 85
    }
];

let addingButton = document.querySelectorAll('.player-button');
let playerCards = document.querySelector('.player-card');
let cardContainer = document.querySelector('.cards-container');
let form = document.querySelector('.pop-up');
const overlay = document.querySelector("#popup-overlay");
let closeForm = document.querySelector('.close-form');
let addPlayer = document.querySelector('.add-button');
let stadium = document.querySelector('.stadium');
addingButton.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        const position = e.currentTarget.dataset.position;
        let filtredPlayer = players.filter(function (player) {
            if (player.position === position) {
                return player;
            }

        });
        filtredPlayer.forEach(player => {
            displayList(player);


        });
        form.classList.toggle("hidden");
        overlay.classList.remove("hidden");
        console.log(filtredPlayer);
    });
    closeForm.addEventListener('click', () => {
        form.classList.add("hidden");
        overlay.classList.add("hidden");
        form.innerHTML = "";
    })
    overlay.addEventListener("click", () => {
        form.classList.add("hidden");
        overlay.classList.add("hidden");
        form.innerHTML = "";

    });

});


function displayList(player) {


    let popUpCard = document.createElement('div');
    popUpCard.classList.add('card-add')
    popUpCard.innerHTML = `
<div class="bg-[#e7e6f2] flex rounded-lg justify-evenly">
  <img class="lg:h-14 lg:w-14 h-10 w-10" src="${player.photo}">
  <div class="flex flex-col lg:w-[20vw] w-32 font-[16px]">
    <h2>Name: ${player.name}</h2>
    <p>Rating: ${player.rating}</p>
  </div>
  <button 
    
    id="${player.id}" 
    class="add-button lg:h-9 my-auto bg-[#1d6315] rounded-md">
    Add player
  </button>   
</div>`;
    form.appendChild(popUpCard);

}

form.addEventListener('click', (e) => {
    e.preventDefault();

    if (e.target.classList.contains('add-button')) {
        const id = e.target.id;
        console.log("ID:", id);
        


        const player = players.find(player => player.id == id);



        if (player.position != 'GK') {
            console.log("Players array:", players);
            const playerCard = document.createElement('div');
            playerCard.classList.add("lg:h-[60px]")
            htmlAddPlayers(playerCard, player);
            stadium.appendChild(playerCard);
            playerPos(playerCard, player.position);
            console.log(cardContainer);
            hidePopup();
            removeBtn(playerCard);
        }

        
        
        if (player.position == 'GK') {
            console.log("Players array:", players);
            const playerCard = document.createElement('div');
            htmlAddGardien(playerCard, player);
            stadium.appendChild(playerCard);
            playerPos(playerCard, player.position);
            console.log(cardContainer);
            hidePopup();
            removeBtn(playerCard);  
        }
        
    }
});





function playerPos(playerElement, position) {
    switch (position) {
        case 'LW':
            playerElement.classList.add("absolute", "top-[13%]", "left-[10%]", "p-0", "z-10");
            break;
        case 'ST':
            playerElement.classList.add("absolute", "top-[3%]", "left-[50%]", "z-10");
            break;
        case 'RW':
            playerElement.classList.add("absolute", "top-[13%]", "right-[10%]", "p-0", "z-10");
            break;
        case 'CDM':
            playerElement.classList.add("absolute", "top-[43%]", "left-[50%]", "p-0", "z-10");
            break;
        case 'LCM':
            playerElement.classList.add("absolute", "top-[33%]", "left-[20%]", "p-0", "z-10");
            break;
        case 'RCM':
            playerElement.classList.add("absolute", "top-[33%]", "right-[20%]", "p-0", "z-10");
            break;
        case 'RB':
            playerElement.classList.add("absolute", "top-[77%]", "right-[10%]", "p-0", "z-10");
            break;
        case 'LB':
            playerElement.classList.add("absolute", "top-[77%]", "left-[10%]", "p-0", "z-10");
            break;
        case 'LCB':
            playerElement.classList.add("absolute", "top-[67%]", "left-[30%]", "p-0", "z-10");
            break;
        case 'RCB':
            playerElement.classList.add("absolute", "top-[67%]", "right-[30%]", "p-0", "z-10");
            break;
        case 'GK':
            playerElement.classList.add("absolute", "top-[85%]", "left-[50%]", "p-0", "z-10");
            break;
        default:
            console.warn("Unknown position:", position);
    }
}
const addPlayerBtn = document.getElementById('addPlayerBtn');
const popupForm = document.getElementById('popupForm');
const cancelBtn = document.getElementById('cancelBtn');

addPlayerBtn.addEventListener('click', () => {
    popupForm.classList.remove('hidden');
});

cancelBtn.addEventListener('click', () => {
    popupForm.classList.add('hidden');
});
let positionSelect = document.querySelector('#position');
let playerForm = document.querySelector('#players-stats');
let GKForm = document.querySelector('#GK-stats');


let photo = 'https://static.vecteezy.com/system/resources/thumbnails/001/840/618/small/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg'
console.log(photo)
positionSelect.addEventListener('change', (e) => {
    const selectedValue = e.target.value;


    if (selectedValue === 'GK') {
        GKForm.classList.remove('hidden');
        playerForm.classList.add('hidden');
    } else {
        playerForm.classList.remove('hidden');
        GKForm.classList.add('hidden');
    }
});
let newPlayerBtn = document.querySelector('#submit-btn');
newPlayerBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let id = players.length + 1;
    let name = document.querySelector('#name').value.trim();
    let positionSelect = document.querySelector('#position').value;
    
    let pace = document.querySelector('#pace').value.trim();
    let shooting = document.querySelector('#shooting').value.trim();
    let dribbling = document.querySelector('#dribbling').value.trim();
    let defending = document.querySelector('#defending').value.trim();
    let diving = document.querySelector('#diving').value.trim();
    let physical = document.querySelector('#physical').value.trim();
    let handling = document.querySelector('#handling').value.trim();
    let passing = document.querySelector('#passing').value.trim();
    let reflexes = document.querySelector('#reflexes').value.trim();
    let speed = document.querySelector('#speed').value.trim();
    let kicking = document.querySelector('#kicking').value.trim();
    let positioning = document.querySelector('#positioning').value.trim();
    let photo = 'https://static.vecteezy.com/system/resources/thumbnails/001/840/618/small/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg';
    let flag = "https://www.pikpng.com/pngvi/hbmobR_logo-anonymous-computer-icons-brazil-hacker-anonymous-brasil-png-clipart/";
    let logo = "https://w7.pngwing.com/pngs/248/997/png-transparent-t-shirt-anonymous-hoodie-logo-million-mask-march-anonymous-emblem-trademark-poster-thumbnail.png"
    if (positionSelect == 'GK') {
        
        const formData = {
            "id": id,
            "name": name,
            "photo": photo,
            "position": positionSelect,
            "nationality": "none",
            "flag": flag,
            "club": "Unknown",
            "logo": logo,
            "rating": Math.floor((Number(diving) + Number(handling) + Number(kicking) + Number(reflexes) + Number(speed) + Number(positioning)) / 6),
            "diving": diving,
            "handling": handling,
            "kicking": kicking,
            "reflexes": reflexes,
            "speed": speed,
            "positioning": positioning

        }
        players.push(formData)
        console.log(formData);
        popupForm.classList.add("hidden");
        setTimeout(() => {
            popupForm.classList.add("hidden");
            overlay.classList.add("hidden");
        }, 300);
        
    }
    else {
        const formData = {
            "id": id ,
            "name": name,
            "photo": photo,
            "position": positionSelect,
            "nationality": "none",
            "flag": flag,
            "club": "Unknown",
            "logo": logo,
            "rating": Math.floor((Number(pace) + Number(shooting) + Number(passing) + Number(dribbling) + Number(defending) + Number(physical)) / 6),
            "pace": pace,
            "shooting": shooting,
            "passing": passing,
            "dribbling": dribbling,
            "defending": defending,
            "physical": physical

        }
        if (!positionSelect || !name) {
            alert("Please fill the form");
            return;
        }
        
        if (positionSelect === 'GK' && (!diving || !handling || !kicking || !reflexes || !speed || !positioning)) {
           
                alert("Please fill all goalkeeper attributes");
                return;
            
        } else if(positionSelect !== 'GK' && (!pace || !shooting || !passing || !dribbling || !defending || !physical)) {
           
                alert("Please fill all outfield player attributes");
                return;
            
        }
        
        else if (positionSelect === 'GK' || positionSelect !== 'GK'){
        alert("Player added successfully!");
        players.push(formData)
        console.log(formData);
        addPlayer.addEventListener('click') , ()=>{
    
            popupForm.classList.add("hidden");
            form.innerHTML = "";
        
    }
        
        
    }
  
    }
    console.log(id);
    id++;
    console.log(id);
    
    console.log(players)  
    newPlayerBtn.addEventListener('click', () => {
           
    });

})
function hidePopup() {
    form.classList.add("hidden");
    overlay.classList.add("hidden");
    form.innerHTML = ""; 
}
function removeBtn(playerCard) {
    let removePlayerBtn = playerCard.querySelector('.player-close');

   
        removePlayerBtn.classList.add('cursor-pointer');

        playerCard.addEventListener('mouseover', () => {
            removePlayerBtn.style.opacity = '1';
        });
        playerCard.addEventListener('mouseleave', () => {
            removePlayerBtn.style.opacity = '0';
        });

        removePlayerBtn.addEventListener('click', () => {
            playerCard.remove();
        });
}



// function addToSub(playerCard){
//     let cardAdd = document.querySelector('.card-add');
//     let subsContainer = document.querySelector('#sub-container');
//     let addPlayer = cardAdd.querySelector('.add-button');
//     let subButton = cardAdd.querySelectorAll('.sub-button');
    
//     subButton.addEventListener('click' , ()=>{
//         subsContainer.appendChild(playerCard);
//     })
//     subButton.addEventListener('click' , ()=>{
//         addPlayer.appendChild(playerCard);
//     })
    
    
// }
function htmlAddPlayers(playerCard, player) {
    playerCard.innerHTML = `
        <div class="wrapper">
            <div class="fut-player-card">
                <div class="player-card-top">
                    <div class="player-master-info">
                        <div class="player-close"><img src="img/close.svg"></div>
                        <div class="player-rating"><span>${player.rating}</span></div>
                        <div class="player-position"><span>${player.position}</span></div>
                        <div class="player-nation"><img src=${player.flag} alt="Argentina" draggable="false"/></div>
                        <div class="player-club"><img src=${player.logo} alt="Barcelona" draggable="false"/></div>
                    </div>
                    <div class="player-picture"><img src=${player.photo} alt="Messi" draggable="false"/></div>
                </div>
                <div class="player-card-bottom">
                    <div class="player-info">
                        <div class="player-name"><span>${player.name}</span></div>
                        <div class="player-features">
                            <div class="player-features-col">
                                <span>
                                    <div class="player-feature-value">${player.pace}</div>
                                    <div class="player-feature-title">PAC</div>
                                </span>
                                <span>
                                    <div class="player-feature-value">${player.shooting}</div>
                                    <div class="player-feature-title">SHO</div>
                                </span>
                                <span>
                                    <div class="player-feature-value">${player.passing}</div>
                                    <div class="player-feature-title">PAS</div>
                                </span>
                            </div>
                            <div class="player-features-col">
                                <span>
                                    <div class="player-feature-value">${player.dribbling}</div>
                                    <div class="player-feature-title">DRI</div>
                                </span>
                                <span>
                                    <div class="player-feature-value">${player.defending}</div>
                                    <div class="player-feature-title">DEF</div>
                                </span>
                                <span>
                                    <div class="player-feature-value">${player.physical}</div>
                                    <div class="player-feature-title">PHY</div>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
}
function htmlAddGardien(playerCard, player){
    playerCard.innerHTML = `
            <div class="wrapper">
                <div class="fut-player-card">
                
                
                
                    <div class="player-card-top">
                    
                        <div class="relative player-master-info">
                            
                            <div id='${player.id}' class="player-close"><img src="img/close.svg"></div>
                            <div class="player-rating"><span>${player.rating}</span></div>
                            <div class="player-position"><span>${player.position}</span></div>
                            <div class="player-nation"><img src=${player.flag} alt="Argentina" draggable="false"/></div>
                            <div class="player-club"><img src=${player.logo} alt="Barcelona" draggable="false"/></div>
                        </div>
                        <div class="player-picture"><img src=${player.photo} alt="Messi" draggable="false"/></div>
                    </div>
                    <!-- Player Card Bottom-->
                    <div class="player-card-bottom">
                        <div class="player-info">
                            <div class="player-name"><span>${player.name}</span></div>
                            <div class="player-features">
                                <div class="player-features-col">
                                    <span>
                                        <div class="player-feature-value">${player.diving}</div>
                                        <div class="player-feature-title">DIV</div>
                                    </span>
                                    <span>
                                        <div class="player-feature-value">${player.handling}</div>
                                        <div class="player-feature-title">HAN</div>
                                    </span>
                                    <span>
                                        <div class="player-feature-value">${player.kicking}</div>
                                        <div class="player-feature-title">KIC</div>
                                    </span>
                                </div>
                                <div class="player-features-col">
                                    <span>
                                        <div class="player-feature-value">${player.reflexes}</div>
                                        <div class="player-feature-title">REF</div>
                                    </span>
                                    <span>
                                        <div class="player-feature-value">${player.speed}</div>
                                        <div class="player-feature-title">SPE</div>
                                    </span>
                                    <span>
                                        <div class="player-feature-value">${player.positioning}</div>
                                        <div class="player-feature-title">POS</div>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;

}
 
let subContainer = document.querySelector('#sub-container');
let addSubs = document.querySelector('#addPlayerSubs');


addSubs.addEventListener('click', (e) => {
    e.preventDefault();
    form.classList.toggle("hidden");
    overlay.classList.remove("hidden");

    // Clear previous content to avoid duplicates
    form.innerHTML = '';

    players.forEach(player => {
        displaySubs(player);
    });
});

function displaySubs(player) {
    // Create the pop-up card for each player
    let popUpCard = document.createElement('div');
    popUpCard.classList.add('card-add');
    popUpCard.innerHTML = `
        <div class="bg-[#e7e6f2] flex rounded-lg justify-evenly">
            <img class="lg:h-14 lg:w-14 h-10 w-10" src="${player.photo}">
            <div class="flex flex-col lg:w-[20vw] w-32 font-[16px]">
                <h2>Name: ${player.name}</h2>
                <p>Rating: ${player.rating}</p>
            </div>
            <button 
                id="${player.id}" 
                class="subs-button lg:h-9 my-auto bg-[#1d6315] rounded-md">
                Add Subs
            </button> 
        </div>`;
    
    // Append the pop-up card to the form
    form.appendChild(popUpCard);
}
//     e.preventDefault();
    
//     if (e.target.classList.contains('subs-button')){
   

//     console.log('Button clicked:', button.id);
    
    let subsContainer = document.querySelector('#sub-container');

    players.forEach(player => {
        const playerCard = document.createElement('div');
        playerCard.classList.add("lg:h-[60px]");
        
        if (player.position !== 'GK') {
            htmlAddPlayers(playerCard, player);
            
        } else {
            htmlAddGardien(playerCard, player);
            
        }

        
        hidePopup();
        removeBtn(playerCard);
    });


form.addEventListener('click', (e) => {
    e.preventDefault();

    if (e.target.classList.contains('subs-button')) {
        const id = e.target.id;
        console.log("ID:", id);
        


        const player = players.find(player => player.id == id);



        if (player.position != 'GK') {
            console.log("Players array:", players);
            const playerCard = document.createElement('div');
            playerCard.classList.add("lg:h-[60px]")
            htmlAddPlayers(playerCard, player);
            subsContainer.appendChild(playerCard);
            console.log(cardContainer);
            hidePopup();
            removeBtn(playerCard);
        }

        
        
        if (player.position == 'GK') {
            console.log("Players array:", players);
            const playerCard = document.createElement('div');
            htmlAddGardien(playerCard, player);
            subsContainer.appendChild(playerCard);
            console.log(cardContainer);
            hidePopup();
            removeBtn(playerCard);  
        }
        
    }
});
