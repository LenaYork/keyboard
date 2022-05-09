console.log("buttons!");
import "./index";
import "./buttons.css";
import { createDom } from "./index";

let isShifted = false;

let displayedText = "";

createDom();
document.querySelector(".screen").value = displayedText;

const ENGLINES = [
    [
        {
            "type": "letter",
            "initial": "`",
            "shifted": "~",
        },
        {
            "type": "letter",
            "initial": "1",
            "shifted": "!",
        },
        {
            "type": "letter",
            "initial": "2",
            "shifted": "@",
        },
        {
            "type": "letter",
            "initial": "3",
            "shifted": "#",
        },
        {
            "type": "letter",
            "initial": "4",
            "shifted": "$",
        },
        {
            "type": "letter",
            "initial": "5",
            "shifted": "%",
        },
        {
            "type": "letter",
            "initial": "6",
            "shifted": "^",
        },
        {
            "type": "letter",
            "initial": "7",
            "shifted": "&",
        },
        {
            "type": "letter",
            "initial": "8",
            "shifted": "*",
        },
        {
            "type": "letter",
            "initial": "9",
            "shifted": "(",
        },
        {
            "type": "letter",
            "initial": "0",
            "shifted": ")",
        },
        {
            "type": "letter",
            "initial": "-",
            "shifted": "_",
        },
        {
            "type": "letter",
            "initial": "=",
            "shifted": "+",
        },
        {
            "type": "non-letter backspace",
            "initial": "Backspace",
            "shifted": "Backspace",
        },
        
    ],
    [
        {
            "type": "non-letter",
            "initial": "Tab",
            "shifted": "Tab",
        },
        {
            "type": "letter",
            "initial": "q",
            "shifted": "Q",
        },
        {
            "type": "letter",
            "initial": "w",
            "shifted": "W",
        },
        {
            "type": "letter",
            "initial": "e",
            "shifted": "E",
        },
        {
            "type": "letter",
            "initial": "r",
            "shifted": "T",
        },
        {
            "type": "letter",
            "initial": "t",
            "shifted": "T",
        },
        {
            "type": "letter",
            "initial": "y",
            "shifted": "Y",
        },
        {
            "type": "letter",
            "initial": "u",
            "shifted": "U",
        },
        {
            "type": "letter",
            "initial": "i",
            "shifted": "I",
        },
        {
            "type": "letter",
            "initial": "o",
            "shifted": "O",
        },
        {
            "type": "letter",
            "initial": "p",
            "shifted": "P",
        },
        {
            "type": "letter",
            "initial": "[",
            "shifted": "{",
        },
        {
            "type": "letter",
            "initial": "]",
            "shifted": "}",
        },
        {
            "type": "letter",
            "initial": "\\",
            "shifted": "|",
        },
        {
            "type": "non-letter",
            "initial": "Del",
            "shifted": "Del",
        },
    ],
    [
        {
            "type": "non-letter",
            "initial": "CapsLock",
            "shifted": "CapsLock",
        },
        {
            "type": "letter",
            "initial": "a",
            "shifted": "A",
        },
        {
            "type": "letter",
            "initial": "s",
            "shifted": "S",
        },
        {
            "type": "letter",
            "initial": "d",
            "shifted": "D",
        },
        {
            "type": "letter",
            "initial": "f",
            "shifted": "F",
        },
        {
            "type": "letter",
            "initial": "g",
            "shifted": "G",
        },
        {
            "type": "letter",
            "initial": "h",
            "shifted": "H",
        },
        {
            "type": "letter",
            "initial": "j",
            "shifted": "J",
        },
        {
            "type": "letter",
            "initial": "k",
            "shifted": "K",
        },
        {
            "type": "letter",
            "initial": "l",
            "shifted": "L",
        },
        {
            "type": "letter",
            "initial": ";",
            "shifted": ":",
        },
        {
            "type": "letter",
            "initial": "'",
            "shifted": '"',
        },
        {
            "type": "non-letter",
            "initial": "Enter",
            "shifted": "Enter",
        },
    ],
    [
        {
            "type": "non-letter",
            "initial": "Shift",
            "shifted": "Shift",
        },
        {
            "type": "letter",
            "initial": "z",
            "shifted": "Z",
        },
        {
            "type": "letter",
            "initial": "x",
            "shifted": "X",
        },
        {
            "type": "letter",
            "initial": "c",
            "shifted": "C",
        },
        {
            "type": "letter",
            "initial": "v",
            "shifted": "V",
        },
        {
            "type": "letter",
            "initial": "b",
            "shifted": "B",
        },
        {
            "type": "letter",
            "initial": "n",
            "shifted": "N",
        },
        {
            "type": "letter",
            "initial": "m",
            "shifted": "M",
        },
        {
            "type": "letter",
            "initial": ",",
            "shifted": "<",
        },
        {
            "type": "letter",
            "initial": ".",
            "shifted": ">",
        },
        {
            "type": "letter",
            "initial": "/",
            "shifted": "?",
        },
        {
            "type": "non-letter",
            "initial": "↑",
            "shifted": "↑",
        },
        {
            "type": "non-letter",
            "initial": "Shift",
            "shifted": "Shift",
        },
    ],
    [
        {
            "type": "non-letter",
            "initial": "Ctrl",
            "shifted": "Ctrl",
        },
        {
            "type": "non-letter",
            "initial": "Win",
            "shifted": "Win",
        },
        {
            "type": "non-letter",
            "initial": "Alt",
            "shifted": "Alt",
        },
        {
            "type": "letter",
            "initial": "spb",
            "shifted": "spb",
        },
        {
            "type": "non-letter",
            "initial": "Alt",
            "shifted": "Alt",
        },
        {
            "type": "non-letter",
            "initial": "←",
            "shifted": "←",
        },
        {
            "type": "non-letter",
            "initial": "↓",
            "shifted": "↓",
        },
        {
            "type": "non-letter",
            "initial": "→",
            "shifted": "→",
        },
        {
            "type": "non-letter",
            "initial": "Ctrl",
            "shifted": "Ctrl",
        },
    ]
]

function createKeys(line, number) {
    line.forEach( elem => {
        let newEl = document.createElement("div");
        newEl.setAttribute("class", elem.type);
        newEl.setAttribute("id", isShifted ? elem.shifted : elem.initial);
        let elText = document.createElement("p");
        elText.setAttribute("class", "letter-text");
        elText.innerHTML = isShifted ? elem.shifted : elem.initial;

        if (elem.type.includes("non-letter")) {
            newEl.addEventListener("click", doCommand);
        } else newEl.addEventListener("click", typeALetter);

        switch(true) {
            case (elText.innerHTML.toLowerCase().includes("shift") 
                || elText.innerHTML.includes("Enter")):
                newEl.classList.add("shift");
                break;

            case (elText.innerHTML.includes("Del") 
                || elText.innerHTML.includes("Tab")):
                    newEl.classList.add("tab");
                    break;
            
            case (elText.innerHTML.includes("↑")
                || elText.innerHTML.includes("←")
                || elText.innerHTML.includes("→")
                || elText.innerHTML.includes("↓")):
                    newEl.classList.add("arrow");
                    break;

            case (elText.innerHTML.includes("spb")):
                newEl.classList.add("spb");
                elText.innerHTML = " ";
                break;
        }
        newEl.appendChild(elText);
        document.querySelector(`.line${number}`).appendChild(newEl);
    } )
}

ENGLINES.forEach( (elem, index) => createKeys(elem, index+1));

function typeALetter(event) {
    console.log(event.target.id);
    if (event.target.classList.contains("letter")) {
        displayedText += event.target.id;
    } else {
        displayedText += event.target.parentNode.id;
    }
    document.querySelector(".screen").value = displayedText;
}

function doCommand(event) {
    console.log(event.target.id);
}

document.addEventListener("keydown", function(event) {
    displayedText += event.key;
})