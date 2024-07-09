function transformString() {
    const stringInput = document.getElementById('stringInput').value;
    const resultDiv = document.getElementById('result');
    
    const length = stringInput.length;
    
    if (length % 15 === 0) {
        // If length is divisible by 15, reverse the string and then replace with ASCII codes
        const reversedStr = stringInput.split('').reverse().join('');
        const asciiCodes = Array.from(reversedStr).map(char => char.charCodeAt(0)).join(' ');
        resultDiv.textContent = asciiCodes;
    } else if (length % 3 === 0) {
        // If length is divisible by 3 but not 15, reverse the string
        resultDiv.textContent = stringInput.split('').reverse().join('');
    } else if (length % 5 === 0) {
        // If length is divisible by 5 but not 15, replace each character with its ASCII code
        const asciiCodes = Array.from(stringInput).map(char => char.charCodeAt(0)).join(' ');
        resultDiv.textContent = asciiCodes;
    } else {
        // If none of the conditions are met, return the original string
        resultDiv.textContent = stringInput;
    }
}
