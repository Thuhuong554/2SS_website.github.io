document.addEventListener('DOMContentLoaded', (event) => {
    // Function to format quantity to two digits
    function formatQuantity(quantity) {
        return quantity.toString().padStart(2, '0');
    }

    // Function to show cake detail overlay
    function showCakeDetail() {
        document.getElementById('cakeDetailOverlay').classList.remove('hidden');
    }
    
    // Function to close cake detail overlay
    function closeCakeDetail() {
        document.getElementById('cakeDetailOverlay').classList.add('hidden');
    }

    // Function to change quantity of cakes
    window.changeQuantity = function(amount) {
        const quantityElement = document.getElementById('quantity');
        let quantity = parseInt(quantityElement.value || '1') + amount;
        quantity = Math.max(1, quantity); // Ensure the quantity does not go below 1
        quantityElement.value = formatQuantity(quantity);
    }

    // Function to update quantity based on user input
    window.updateQuantity = function(input) {
        let value = parseInt(input.value);
        if (isNaN(value) || value < 1) {
            input.value = '';
        } else {
            input.value = formatQuantity(value);
        }
    }

    // Add event listeners to view detail buttons
    document.querySelectorAll('.view-detail').forEach(button => {
        button.addEventListener('click', showCakeDetail);
    });

    // Add event listener to close button
    document.getElementById('closeButton').addEventListener('click', closeCakeDetail);

    // Add event listener to overlay
    document.getElementById('cakeDetailOverlay').addEventListener('click', (event) => {
        if (event.target === document.getElementById('cakeDetailOverlay')) {
            closeCakeDetail();
        }
    });

    // Add event listeners for direct input changes
    const quantityInput = document.getElementById('quantity');
    quantityInput.addEventListener('input', function(event) {
        updateQuantity(event.target);
    });
    quantityInput.addEventListener('blur', function(event) {
        // When the input loses focus, ensure it has a valid value
        if (event.target.value === '') {
            event.target.value = '01';
        }
    });
});