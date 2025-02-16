document.getElementById('check-btn').addEventListener('click', function() {

    const inputText = document.getElementById('text-input').value.trim();
    
    function isPalindrome(str) {
        const cleanStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
        const reversedStr = cleanStr.split('').reverse().join('');
        
        return cleanStr === reversedStr;
    }

    const resultDiv = document.getElementById('result');

    inputText == "" ? resultDiv.innerHTML = alert('Please input a value.') : isPalindrome(inputText) ? resultDiv.innerHTML = `"${inputText}" is a palindrome!` : resultDiv.innerHTML = `"${inputText}" is not a palindrome.`;
});
