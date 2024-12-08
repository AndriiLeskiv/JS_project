# Name-Value Pair Manager

## Project Description
This project is a simple web-based application for managing **Name=Value** pairs. Users can add, view, sort, and delete pairs while persisting their data using LocalStorage. The project also includes basic styling for interactive elements using CSS.

## Technologies Used
- HTML
- CSS
- JavaScript

## File Structure
- **index.html** – The main HTML file with the structure of the application.
- **style.css** – The stylesheet for styling the application.
- **main.js** – JavaScript file managing the application logic.

## Features

### Adding Pairs
- Enter a **Name=Value** pair in the input field and click the `Add` button.
- Format must follow `Name=Value`, using alphanumeric characters only.
- Error messages are displayed if the input is invalid or empty.

### Selecting Items
- Click on any item in the list to toggle its selection.
- Selected items are visually highlighted.

### Sorting
- Click `Sort by Name` to sort pairs alphabetically by the **Name** field.
- Click `Sort by Value` to sort pairs alphabetically by the **Value** field.

### Deleting Items
- Use `Delete Selected Items` to remove all selected pairs from the list.
    - An error message is shown if no items are selected.
- Use `Delete All Items` to remove all pairs from the list after confirmation.
    - An error message is displayed if the list is already empty.

## Usage
1. Open the application in your browser.
2. Add pairs using the input field and `Add` button.
3. Interact with the list by sorting, selecting, or deleting items.
4. Data will be saved automatically in LocalStorage for persistence.


## Error Handling
- **Empty Input**: Displays an error message if the input field is left blank.
- **Invalid Format**: Displays an error if the input doesn’t match the required format (`Name=Value`).
- **Empty List**: Shows an error message when trying to delete items from an empty list.

## LocalStorage
- All added pairs are saved in the browser's LocalStorage.
- Data is automatically loaded when the page is refreshed.

## Code Overview

### Key Files
- **HTML**: Contains the structure, including buttons and input fields.
- **CSS**: Provides styling for the interactive elements and layout.
- **JavaScript**: Manages functionality like adding, selecting, sorting, and deleting pairs.

### Functions
- `showError(message)`: Displays error messages.
- `renderPairs()`: Updates the list view.
- `saveToLocalStorage()`: Saves the current list to LocalStorage.
- `toggleIsSelect(id)`: Toggles the selection state of a pair.
- Event handlers for buttons (`Add`, `Sort by Name`, `Sort by Value`, `Delete Selected`, `Delete All`):
    - **Add**: Listens for a click on the `#addButton` to add a new Name=Value pair to the list.
    - **Sort by Name**: Listens for a click on the `#sortByName` button to sort pairs alphabetically by the **Name** field.
    - **Sort by Value**: Listens for a click on the `#sortByValue` button to sort pairs alphabetically by the **Value** field.
    - **Delete Selected**: Listens for a click on the `#deleteSelected` button to remove all selected pairs from the list.
    - **Delete All**: Listens for a click on the `#deleteAll` button to remove all pairs from the list after confirmation.

## Example Input

```text
Name=Value
Item1=Data1
Example=Test
```

## Example Output

```text
Item1=Data1
Example=Test
```
## Launch Instructions
To view the project, open the `index.html` file in a browser.

## Author
Author: Andrii Leskiv