// Get the result input element
const result = document.getElementById('result');
const standardMode = document.getElementById('standard-mode');
const scientificMode = document.getElementById('scientific-mode');
const aiMode = document.getElementById('ai-mode');
const standardButtons = document.querySelector('.standard-buttons');
const scientificButtons = document.querySelector('.scientific-buttons');
const aiButtons = document.querySelector('.ai-buttons');
const degRadToggle = document.getElementById('deg-rad-toggle');

// Mode state (degrees or radians)
let isRadianMode = false;

// Function to toggle between standard, scientific and AI mode
standardMode.addEventListener('click', function() {
    standardMode.classList.add('active');
    scientificMode.classList.remove('active');
    aiMode.classList.remove('active');
    standardButtons.classList.remove('hidden');
    scientificButtons.classList.add('hidden');
    aiButtons.classList.add('hidden');
});

// Function to send prompt to AI (Claude or Gemini)
async function sendToAI() {
    const prompt = document.getElementById('ai-prompt').value;
    const model = document.getElementById('ai-model').value;
    const responseElement = document.getElementById('ai-response');
    
    if (!prompt.trim()) {
        responseElement.textContent = "Veuillez entrer une question.";
        return;
    }
    
    responseElement.textContent = `Chargement... (${model})`;
    
    try {
        const response = await fetch('/api/ai', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ prompt, model }),
        });
        
        const data = await response.json();
        
        if (response.ok) {
            responseElement.textContent = data.response;
        } else {
            responseElement.textContent = `Erreur: ${data.error}\n${data.details || ''}`;
        }
    } catch (error) {
        responseElement.textContent = `Erreur de connexion: ${error.message}`;
    }
}

scientificMode.addEventListener('click', function() {
    scientificMode.classList.add('active');
    standardMode.classList.remove('active');
    aiMode.classList.remove('active');
    scientificButtons.classList.remove('hidden');
    standardButtons.classList.add('hidden');
    aiButtons.classList.add('hidden');
});

aiMode.addEventListener('click', function() {
    aiMode.classList.add('active');
    standardMode.classList.remove('active');
    scientificMode.classList.remove('active');
    aiButtons.classList.remove('hidden');
    standardButtons.classList.add('hidden');
    scientificButtons.classList.add('hidden');
});

// Function to toggle between degrees and radians
function toggleDegRad() {
    isRadianMode = !isRadianMode;
    degRadToggle.textContent = isRadianMode ? 'RAD' : 'DEG';
}

// Function to convert degrees to radians if needed
function toRadians(angle) {
    return isRadianMode ? angle : angle * (Math.PI / 180);
}

// Function to append values to the display
function appendToDisplay(value) {
    // Handle special constants like Math.PI and Math.E
    if (value === 'Math.PI') {
        result.value += 'π';
    } else if (value === 'Math.E') {
        result.value += 'e';
    } else {
        result.value += value;
    }
}

// Function to clear the display
function clearDisplay() {
    result.value = '';
}

// Function to calculate the result
function calculate() {
    try {
        // Replace π and e with their values
        let expression = result.value
            .replace(/π/g, 'Math.PI')
            .replace(/e/g, 'Math.E');
        
        // Use Function constructor to safely evaluate the expression
        result.value = new Function('return ' + expression)();
    } catch (error) {
        result.value = 'Error';
    }
}

// Scientific calculator functions
function calculateSin() {
    try {
        let value = parseFloat(result.value);
        result.value = Math.sin(toRadians(value));
    } catch (error) {
        result.value = 'Error';
    }
}

function calculateCos() {
    try {
        let value = parseFloat(result.value);
        result.value = Math.cos(toRadians(value));
    } catch (error) {
        result.value = 'Error';
    }
}

function calculateTan() {
    try {
        let value = parseFloat(result.value);
        result.value = Math.tan(toRadians(value));
    } catch (error) {
        result.value = 'Error';
    }
}

function calculateLog() {
    try {
        let value = parseFloat(result.value);
        result.value = Math.log10(value);
    } catch (error) {
        result.value = 'Error';
    }
}

function calculateLn() {
    try {
        let value = parseFloat(result.value);
        result.value = Math.log(value);
    } catch (error) {
        result.value = 'Error';
    }
}

function calculateSquareRoot() {
    try {
        let value = parseFloat(result.value);
        result.value = Math.sqrt(value);
    } catch (error) {
        result.value = 'Error';
    }
}

function calculatePower() {
    appendToDisplay('^');
}

function calculateFactorial() {
    try {
        let n = parseInt(result.value);
        if (n < 0) {
            result.value = 'Error';
            return;
        }
        let factorial = 1;
        for (let i = 2; i <= n; i++) {
            factorial *= i;
        }
        result.value = factorial;
    } catch (error) {
        result.value = 'Error';
    }
}

// Function to remove the last character (backspace)
function backspace() {
    result.value = result.value.slice(0, -1);
}

// Add keyboard support
document.addEventListener('keydown', function(event) {
    const key = event.key;
    
    // Numbers and operators
    if (/[\d+\-*/.=()]/.test(key)) {
        if (key === '=') {
            calculate();
        } else {
            appendToDisplay(key);
        }
        event.preventDefault();
    }
    
    // Enter key for calculation
    if (key === 'Enter') {
        calculate();
        event.preventDefault();
    }
    
    // Backspace key
    if (key === 'Backspace') {
        backspace();
        event.preventDefault();
    }
    
    // Escape key to clear
    if (key === 'Escape') {
        clearDisplay();
        event.preventDefault();
    }
    
    // ^ key for power
    if (key === '^') {
        appendToDisplay('^');
        event.preventDefault();
    }
});
