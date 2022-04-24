// const mobileMenu = document.querySelector("#mobile-menu");
// mobileMenu.addEventListener("click", function() {
//     mobileMenu.classList.toggle("active");
//     document.querySelector("#header").classList.toggle("mobile-bar");
//     // document.body.classList.toggle(".overflow");
// })

const windowInnerWidth = document.documentElement.clientWidth;
    // const windowInnerHeight = document.documentElement.clientHeight;
    

    console.log(windowInnerWidth);   
    let cardsOnPage = 0;

    switch(true) {
        case (windowInnerWidth >= 1280): 
            cardsOnPage = 8;
            break;

        case (windowInnerWidth >= 768 && windowInnerWidth < 1280): 
            cardsOnPage = 6;
            break;

        case (windowInnerWidth < 768): 
            cardsOnPage = 3;
            break;

            default:
                cardsOnPage = 0;
                break;
    }

let mobileBar; 
const mobileMenu = document.querySelector("#mobile-menu");

function toggleMenu() {
    mobileMenu.classList.toggle("active");
    document.querySelector("#header").classList.toggle("mobile-bar");
    document.body.classList.toggle("overflow");
    document.querySelector("#wrapper").classList.toggle("inactive-bg");
    document.querySelector("#fade-wrapper").classList.toggle("fade-wrapper");
}

mobileMenu.addEventListener("click", function(e) {
    toggleMenu();
    mobileBar = document.querySelector(".mobile-bar");
    e.stopPropagation();
})

document.addEventListener("click", function(event) {
    if (mobileBar && (!event.path.includes(mobileBar) || event.target.classList.contains("header-nav-link"))) {
        toggleMenu();
        mobileBar = null;
    }
})

const pets = [
    {
        "name": "Jennifer",
        "img": "../../assets/images/jennifer.png",
        "type": "Dog",
        "breed": "Labrador",
        "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
        "age": "2 months",
        "inoculations": ["none"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Sophia",
        "img": "../../assets/images/sophia.png",
        "type": "Dog",
        "breed": "Shih tzu",
        "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
        "age": "1 month",
        "inoculations": ["parvovirus"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Woody",
        "img": "../../assets/images/woody.png",
        "type": "Dog",
        "breed": "Golden Retriever",
        "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
        "age": "3 years 6 months",
        "inoculations": ["adenovirus", "distemper"],
        "diseases": ["right back leg mobility reduced"],
        "parasites": ["none"]
    },
    {
        "name": "Scarlett",
        "img": "../../assets/images/scarlett.png",
        "type": "Dog",
        "breed": "Jack Russell Terrier",
        "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
        "age": "3 months",
        "inoculations": ["parainfluenza"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Katrine",
        "img": "../../assets/images/katrine.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
        "age": "6 months",
        "inoculations": ["panleukopenia"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Timmy",
        "img": "../../assets/images/timmy.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
        "age": "2 years 3 months",
        "inoculations": ["calicivirus", "viral rhinotracheitis"],
        "diseases": ["kidney stones"],
        "parasites": ["none"]
    },
    {
        "name": "Freddie",
        "img": "../../assets/images/freddie.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
        "age": "2 months",
        "inoculations": ["rabies"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Charly",
        "img": "../../assets/images/charly.png",
        "type": "Dog",
        "breed": "Jack Russell Terrier",
        "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
        "age": "8 years",
        "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
        "diseases": ["deafness", "blindness"],
        "parasites": ["lice", "fleas"]
    }
]

let currentPets = [];
let newPets = [];

function getRandomNums() {
    
        for (let i = 0; i < cardsOnPage; i++) {
            let randomPetNum = Math.floor(0 + Math.random() * (7 + 1 - 0));
            if (!newPets.includes(randomPetNum) && !currentPets.includes(randomPetNum)) {
                newPets.push(randomPetNum); 
            } else i--;
        }
    
        currentPets = newPets;
        newPets = [];
        console.log("currentPets",currentPets)
    }

function createPetCard(index) {
    console.log("index", index);
    console.log("pets[index]",pets[index]);
    let petDiv = document.createElement("div");
    petDiv.setAttribute("class", "friend-item");

    let petImage = document.createElement("img");
    petImage.setAttribute("src", pets[index].img);
    petImage.setAttribute("alt", pets[index].name);

    let petText = document.createElement("p");
    petText.setAttribute("class", "pet-name");
    petText.innerHTML = pets[index].name;

    let petButton = document.createElement("button");
    petButton.setAttribute("class", "button pet-button");
    petButton.setAttribute("id", `${pets[index].name}-about`);
    petButton.innerHTML = "Learn more";

    petDiv.appendChild(petImage);
    petDiv.appendChild(petText);
    petDiv.appendChild(petButton);
    document.querySelector(".friends-items").insertBefore(petDiv, document.querySelector("#right-pet-arrow"));
}

window.onload = function() {

    const windowInnerWidth = document.documentElement.clientWidth;
    const windowInnerHeight = document.documentElement.clientHeight;
    

    console.log(windowInnerWidth, windowInnerHeight);   

    switch(true) {
        case (windowInnerWidth >= 1280): 
            cardsOnPage = 8;
            break;

        case (windowInnerWidth >= 768 && windowInnerWidth < 1280): 
            cardsOnPage = 6;
            break;

        case (windowInnerWidth < 768): 
            cardsOnPage = 3;
            break;

            default:
                cardsOnPage = 0;
                break;
    }
    console.log("cardsOnPage",cardsOnPage);
    getRandomNums();

    for (let i = 0; i < cardsOnPage; i++) {
        createPetCard(currentPets[i]);
    }
}

window.addEventListener("resize", function() {
    let windowInnerWidth = document.documentElement.clientWidth;
    if (windowInnerWidth >= 768 ) {
        console.log("зашли в консол!!!!!!!!!!!!!!", windowInnerWidth);
        mobileMenu.classList.remove("active");
        document.querySelector("#header").classList.remove("mobile-bar");
        document.body.classList.remove("overflow");
        document.querySelector("#wrapper").classList.remove("inactive-bg");
        document.querySelector("#fade-wrapper").classList.remove("fade-wrapper");
    }
})