var command = ""
window.addEventListener("keydown", typeIt)

var input = document.getElementById("input")

function logKey(event) {

    key = event.key
    console.log(key)
}

function typeIt(event) {
    key = event.key

    // input.innerHTML += key 

    switch (key) {
        case 'Enter':
            choices()
            break;
        case 'Backspace':
            command = command.slice(0, -1)
            break;
        default:
            command = command + key
            break;
    }
    input.innerHTML = command
}

function choices(choice) {
    switch(choice.toLowerCase()) {
        case 'help':
            loopLines(help, 'color: white')
            break;
        case 'whoami':
            loopLines(whoami, 'color: white')
            break;
        case 'socials':
            loopLines(socials, 'color: white')
            break;
        default:
            
            break;
    }
}

function typeCommand(input) {
    document.getElementById("input")
}

function loopLines(name, style) {
}