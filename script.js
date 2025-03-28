// Get the result input element
const result = document.getElementById('result');

// Function to append values to the display
function appendToDisplay(value) {
    result.value += value;
}

// Function to clear the display
function clearDisplay() {
    result.value = '';
}

// Function to calculate the result
function calculate() {
    try {
        // Use Function constructor to safely evaluate the expression
        result.value = new Function('return ' + result.value)();
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
    if (/[\d+\-*/.=]/.test(key)) {
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
});
