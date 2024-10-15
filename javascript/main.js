var command = ""
// listen to keys being pressed
window.addEventListener("keydown", typeIt)

// When body height increases, page automatically scrolls to bottom
const resizeObserver = new ResizeObserver(entries =>
    scrollToBottom()
)
resizeObserver.observe(document.body)

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
    switch (command.toLowerCase().trim()) {
        case 'help':
            res = help.join('')
            break;
        case 'whoami':
            res = whoami.join('')
            break;
        case 'socials':
            res = socials.join('')
            break;
        case 'repo':
            res = repo.join('')
            break;
        case 'email':
            res = email.join('')
            break;
        case 'projects':
            res = projects.join('')
            break;
        case 'clear':
            clearTerminal()
            return;
        default:
            res = "<div class='response'><span class='red' style='padding-left: 5vw;'>\nCommand not found. For a list of commands, type 'help'\n</span><div><br>"
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

function scrollToBottom() {
    window.scrollTo(0, document.body.scrollHeight);
}

function clearTerminal() {
    document.body.innerHTML = `
        <div class="main">
            <div class="terminalTyper" id="terminalTyper">
                <pre id="ola"></pre>
                <pre class="typer">
                    <span>dlmpires@web:~$ </span>
                    <span id="input"></span>
                    <span class="blink"><pre> </pre></span>
                </pre>
            </div>
        </div>
        <script src="./javascript/commands.js"></script>
        <script src="./javascript/main.js"></script>
    `;

    // when you clear innerHTML references to input is lost, so you have to define it again
    input = document.getElementById("input");
    command = ''

    // just ajusting the styles
    typer = document.getElementById("terminalTyper")
    typer.style.paddingTop = "5vh"
}
