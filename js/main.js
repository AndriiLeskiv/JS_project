let nameValuePairs = [];

function showError(message) {
    const errorField = document.getElementById("errorMessage");
    errorField.style.display = 'block';
    errorField.textContent = message;
}

document.getElementById("addButton").addEventListener("click", () => {
    let inputValue = document.getElementById("addPair").value.trim();

    if (!inputValue) {
        showError("Field cannot be empty. Please enter a Name/Value pair.");
        return;
    }

    if (!inputValue.includes("=")) {
        showError("Invalid format! Pair must contain an equal sign '='.");
        return;
    }

    const [rawName, rawValue] = inputValue.split("=").map(str => str.trim());

    console.log(rawValue);
    console.log(rawName);

    // Checking if name and value are not empty
    if (!rawName || !rawValue) {
        showError("Invalid format! Name and Value must not be empty.");
        return;
    }
    //
    // // Перевірка на алфавітно-цифрові символи
    // const alphanumericRegex = /^[a-zA-Z0-9]+$/;
    // if (!alphanumericRegex.test(rawName) || !alphanumericRegex.test(rawValue)) {
    //     alert("Invalid characters! Name and Value must contain only alphanumeric characters.");
    //     return;
    // }
    //
    // // Додаємо пару до масиву
    // nameValuePairs.push({ name: rawName, value: rawValue });
    // input.value = ""; // Очищуємо поле вводу
    //
    // console.log(nameValuePairs); // Для перевірки додаємо лог
    // alert(`Pair "${rawName}=${rawValue}" added successfully!`);
});
