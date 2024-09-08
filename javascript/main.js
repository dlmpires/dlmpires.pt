var command = ""
// listen to keys being pressed
window.addEventListener("keydown", typeIt)

var input = document.getElementById("input")
var answer = document.createElement("p")

// function that handles typing and different keys
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
            if (key.length == 1) {
                command = command + key
            }
            break;
    }
    input.innerHTML = command
}

// function that creates a <p> tag with the command's answer
function choices() {
    switch (command.toLowerCase()) {
        case 'help':
            answer.innerHTML = help.join('')
            document.getElementsByTagName('body')[0].appendChild(answer)
            break;
        case 'whoami':
            whoami.forEach(item => {
                answer.innerHTML += item;  // Append each item to the inner HTML
            });        
            document.getElementsByTagName('body')[0].appendChild(answer)
            break;
        case 'socials':
            loopLines(socials, 'color: white')
            break;
        default:

            break;
    }
}

function loopLines(command) {
    command += index + ": " + item; 
}