document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('exercise-form');
    const listItems = document.getElementById('list-items');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // Get form values
        const name = document.getElementById('exercise-name').value;
        const description = document.getElementById('exercise-description').value;
        const date = document.getElementById('exercise-date').value;

        // Create new list item
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <strong>${name}</strong><br>
            <p>${description}</p><br>
            <small>${date}</small>
            <button class="remove-btn">Remover</button>
        `;

        // Add remove button functionality
        listItem.querySelector('.remove-btn').addEventListener('click', function () {
            listItems.removeChild(listItem);
        });

        // Append to list
        listItems.appendChild(listItem);

        // Clear form
        form.reset();
    });
});
