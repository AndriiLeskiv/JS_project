let nameValuePairs = [];
window.onload = function () {
    let storageData = localStorage.getItem("nameValuePairs");
    if (storageData) {
        nameValuePairs = JSON.parse(storageData);
        renderPairs();
    }
}

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

document.getElementById("addButton").addEventListener("click", () => {
    let inputElement = document.getElementById("addPair");
    let inputValue = inputElement.value.trim();

    // Check if the input field is empty
    if (!inputValue) {
        showError("Field cannot be empty. Please enter a Name/Value Pair.");
        return;
    }

    // Check the input format
    let alphanumericRegex = /^\s*([a-zA-Z0-9]+)\s*=\s*([a-zA-Z0-9]+)\s*$/;
    if (!alphanumericRegex.test(inputValue)) {
        showError('Invalid format! Please use "Name=Value" with alphanumeric characters.');
        return;
    }

    const [rawName, rawValue] = inputValue.split("=").map(str => str.trim());
    console.log(rawName);
    console.log(rawValue);

    // Add the valid Name/Value pair to the array
    nameValuePairs.push({name: rawName, value: rawValue});
    inputElement.value = "";

    console.log(nameValuePairs);
    showError("");
    renderPairs();
    saveToLocalStorage();

    // Check if the input contains an equal sign '='
    // if (!inputValue.includes("=")) {
    //     showError("Invalid format! Pair must contain an equal sign '='.");
    //     return;
    // }
    // Checking if name and value are not empty
    // if (!rawName || !rawValue) {
    //     showError("Invalid format! Name and Value must not be empty.");
    //     return;
    // }
    // // Check for alphanumeric characters
    // let alphanumericRegex = /^[a-zA-Z0-9]+$/;
    // if (!alphanumericRegex.test(rawName) || !alphanumericRegex.test(rawValue)) {
    //     showError("Invalid characters! Name and Value must contain only alphanumeric characters.");
    //     return;
    // }
});

function renderPairs() {
    let pairList = document.getElementById("pairList");
    pairList.innerHTML = "";
    for (const item of nameValuePairs) {
        const pairDiv = document.createElement("li");
        pairDiv.classList.add("pair-item");
        pairDiv.innerHTML = `${item.name}=${item.value}`;
        pairList.appendChild(pairDiv);
    }
}

document.getElementById("sortByName").addEventListener("click", () => {
    nameValuePairs.sort((a, b) => {
        if (a.name > b.name) return 1;
        if (a.name < b.name) return -1;
        return 0;
    });
    renderPairs();
    saveToLocalStorage();
});

document.getElementById("sortByValue").addEventListener("click", () => {
    nameValuePairs.sort((a, b) => {
        if (a.value > b.value) return 1;
        if (a.value < b.value) return -1;
        return 0;
    });
    renderPairs();
    saveToLocalStorage();
});
//
// document.getElementById("deleteSelected").addEventListener("click", () => {
//     nameValuePairs = [];
//     renderPairs();
//     saveToLocalStorage();
// });
//

// Function save array to LocalStorage
function saveToLocalStorage() {
    localStorage.setItem("nameValuePairs", JSON.stringify(nameValuePairs));
}