import "./buttons.js";
import "./main.css";

export function createDom() {
    console.log("dom is created");
    const mainContainer = document.createElement("main");
    mainContainer.setAttribute("class", "main");
    document.body.appendChild(mainContainer);
    
    const title = document.createElement("h1");
    title.setAttribute("class", "title");
    title.innerHTML = "Virtual Keyboard";
    mainContainer.appendChild(title);
    
    const screen = document.createElement("textarea");
    screen.setAttribute("class", "screen");
    mainContainer.appendChild(screen);
    
    const keyboard = document.createElement("div");
    keyboard.setAttribute("class", "keyboard");
    mainContainer.appendChild(keyboard);
    
    const notes = document.createElement("p");
    notes.setAttribute("class", "notes");
    notes.innerHTML = "Создано на ОС Windows <br> Для смены языка используйте левые ctrl+ alt";
    mainContainer.appendChild(notes);

    for (let i = 1; i < 6; i++) {
        const line = document.createElement("div");
        line.setAttribute("class", `line line${i}`);
        keyboard.appendChild(line);
    }

}

