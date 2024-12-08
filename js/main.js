let pairsArray = []; // Array for storing "Name=Value" pairs

// Load data from LocalStorage when the page loads
window.onload = function () {
    try {
        let storedData = localStorage.getItem("pairsArray");
        if (storedData) {
            pairsArray = JSON.parse(storedData);
            renderPairs();
        }
    } catch (e) {
        console.error("Error accessing localStorage:", e);
    }
}

// Function to show or hide error messages
function showError(message) {
    let errorField = document.getElementById("errorMessage");
    if (message) {
        errorField.style.display = 'block';
        errorField.textContent = message;
    } else {
        errorField.style.display = 'none';
        errorField.textContent = '';
    }
}

// Event handler for the "addButton" button — adds a new "Name=Value" pair
document.getElementById("addButton").addEventListener("click", () => {
    let inputElement = document.getElementById("addPair");
    let inputValue = inputElement.value.trim();

    // Check if the input field is empty
    if (!inputValue) {
        showError("Field cannot be empty. Please enter a Name/Value Pair.");
        return;
    }

    // Check input format using regular expression
    let validPairRegex = /^\s*([a-zA-Z0-9]+)\s*=\s*([a-zA-Z0-9]+)\s*$/;
    if (!validPairRegex.test(inputValue)) {
        showError('Invalid format! Please use "Name=Value" with alphanumeric characters.');
        return;
    }

    // Split the input pair into name and value
    const [pairName, pairValue] = inputValue.split("=").map(str => str.trim());

    // Add the valid Name/Value pair to the array with a unique identifier
    pairsArray.push({id: new Date().getTime(), name: pairName, value: pairValue, isSelect: false});
    inputElement.value = "";

    showError("");
    renderPairs();
    saveToLocalStorage();
});

// Function for rendering "Name=Value" pairs on the page
function renderPairs() {
    showError("");
    let pairList = document.getElementById("pairList");
    pairList.innerHTML = "";
    for (const item of pairsArray) {
        const pairLi = document.createElement("li");
        pairLi.classList.add("pair-item");
        pairLi.id = item.id;
        pairLi.classList.add(item.isSelect ? 'active' : 'note');
        pairLi.innerText = `${item.name}=${item.value}`;
        pairList.appendChild(pairLi);
    }
}

// Event handler for clicking on list items
document.addEventListener('click', function(e) {
    // Handle click on pair items to toggle selection
    if(e.target.closest('.pair-item')) {
        toggleIsSelect(e.target.id)
    }
})

// Function to toggle the selection state of a pair
function toggleIsSelect(id) {
    const findValue = pairsArray.find(item => String(item.id) === String(id));
    if(findValue) {
        findValue.isSelect = !findValue.isSelect;
        renderPairs();
        saveToLocalStorage();
    }
}

// Event handler for the sort by name button
document.getElementById("sortByName").addEventListener("click", () => {
    pairsArray.sort((a, b) => {
        if (a.name > b.name) return 1;
        if (a.name < b.name) return -1;
        return 0;
    });
    renderPairs();
    saveToLocalStorage();
});

// Event handler for the sort by value button
document.getElementById("sortByValue").addEventListener("click", () => {
    pairsArray.sort((a, b) => {
        if (a.value > b.value) return 1;
        if (a.value < b.value) return -1;
        return 0;
    });
    renderPairs();
    saveToLocalStorage();
});

// Event handler for the delete selected items button
document.getElementById("deleteSelected").addEventListener("click", () => {
    let selectedItems = pairsArray.filter(item => item.isSelect);
    if (selectedItems.length === 0) {
        showError("No items selected to delete.");
        return;
    }

    pairsArray = pairsArray.filter(item => !item.isSelect)
    saveToLocalStorage();
    renderPairs();
});

// Event handler for the delete all items button
document.getElementById("deleteAll").addEventListener("click", () => {
    pairsArray = [];
    saveToLocalStorage();
    renderPairs();
});

// Function save array to LocalStorage
function saveToLocalStorage() {
    try {
        localStorage.setItem("pairsArray", JSON.stringify(pairsArray));
    } catch (e) {
        console.error("Error saving to localStorage:", e); // Catch potential errors in saving data
    }
}