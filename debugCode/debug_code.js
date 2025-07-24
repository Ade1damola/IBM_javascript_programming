    
    function performOperation() {
        // Get user input from input fields
        let num1 = parseInt(document.getElementById('input1').value);
        let num2 = parseInt(document.getElementById('input2').value);
        // Check if inputs are valid numbers
        if (!isNaN(num1) && !isNaN(num2)) {
        // Perform the operation
            let result1 = add(num1, num2);
            let result2 = multiply(num1, num2);
            let result3 = divide(num1, num2);
    
            // Display the result
            displayResult(result1, result2, result3);
        } else {
                    displayResult('Please enter valid numbers');
                }
    }
    
    function multiply(a, b) {
        // Multiply the numbers
        return a * b;
    }

    function add(a, b) {
        // Add the numbers
        return a + b;
    }

    function divide(a, b) {
        // Divide the numbers
        return a / b;
    }
    
    function displayResult(result1, result2, result3) {
        // Display the results in the paragraph element
        const additionElement = document.getElementById('addition');
        additionElement.textContent = `The addition is: ${result1}`;
        const multiplicationElement = document.getElementById('multiplication');
        multiplicationElement.textContent = `The multiplication is: ${result2}`;
        const divisionElement = document.getElementById('division');
        divisionElement.textContent = `The division is: ${result3}`;
    }
            