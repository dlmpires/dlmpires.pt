var command = ""
// listen to keys being pressed
window.addEventListener("keydown", typeIt)

var input = document.getElementById("input")
var answer = document.createElement("p")

// function that handles typing and different keys
function typeIt(event) {
    key = event.key

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
    var res = ''
    switch (command.toLowerCase()) {
        case 'help':
            res = help.join('')
            break;
        case 'whoami':
            res = whoami.join('')
            break;
        case 'socials':
            res = socials.join('')
            break;
        default:
            res = "<span class=\"oi\">\nSorry, that command doesn't exist\n</span>"
            break;
    }
    //creates new line after the command's answer
    newLine(res)
    // reseting new input's text
    command = ''
}

function newLine(res) {
    var container = document.getElementById("ola")

    // clone's old input
    var span_command = document.createElement('span')
    span_command.innerHTML = "dlmpires@web:~$ " + command

    // creates response to user's command
    var span_response = document.createElement('span')
    span_response.innerHTML = res

    container.appendChild(span_command)
    container.appendChild(span_response)
}