// References to DOM elements
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Event listener for the Add Chapter button
button.addEventListener('click', function () {
    // Check if the input is not blank
    if (input.value.trim() !== '') {
        // Create a new list item (li) element
        const li = document.createElement('li');

        // Populate the li element with the input value
        li.textContent = input.value;

        // Create a delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';

        // Append the delete button to the li element
        li.append(deleteButton);

        // Append the li element to the unordered list
        list.append(li);

        // Add an event listener to the delete button to remove the li element
        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus(); // Return focus to the input field after deleting
        });

        // Clear the input field and set focus back to it
        input.value = '';
    } else {
        // If input is blank, return focus to the input field
        alert('Please enter a Book of Mormon chapter.'); // Optional: User feedback
    }
    input.focus(); // Ensure focus remains on the input field
});
