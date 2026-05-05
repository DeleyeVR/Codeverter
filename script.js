// Import languages from languages.json
fetch('languages.json')
    .then(response => response.json())
    .then(languages => {
        // Populate language selection options
        populateLanguageOptions(languages);
    })
    .catch(error => console.error('Error loading languages:', error));

// Function to handle code conversion
function convertCode(inputLanguage, outputLanguage, code) {
    // Add code conversion logic here
    console.log(`Converting code from ${inputLanguage} to ${outputLanguage}: ${code}`);
}

// Function to search/filter language options
function searchLanguages(query) {
    // Implement search logic here
    console.log(`Searching for languages matching: ${query}`);
}

// Function for dynamic DOM manipulation
function populateLanguageOptions(languages) {
    const languageSelect = document.getElementById('languageSelect');
    languages.forEach(language => {
        const option = document.createElement('option');
        option.value = language.code;
        option.textContent = language.name;
        languageSelect.appendChild(option);
    });
}