function calculateTotal() {
    // Get the selected values for the elements CPU, GPU, and RAM by their IDs
    let cpuSelect = document.getElementById('CPU');
    let gpuSelect = document.getElementById('GPU');
    let ramSelect = document.getElementById('RAM');

    // Get the selected options' text and price using 'data-price' attribute, these lines retrieve the currently selected option from each dropdown menu
    let cpuOption = cpuSelect.options[cpuSelect.selectedIndex];
    let gpuOption = gpuSelect.options[gpuSelect.selectedIndex];
    let ramOption = ramSelect.options[ramSelect.selectedIndex];

    // Extract the prices from the 'data-price' attribute of the selected options, parseInt() is used to convert the price strings into integers
    let cpuPrice = parseInt(cpuOption.getAttribute('data-price'));
    let gpuPrice = parseInt(gpuOption.getAttribute('data-price'));
    let ramPrice = parseInt(ramOption.getAttribute('data-price'));

    // Calculate total price by adding CPU, GPU, and RAM prices
    let totalPrice = cpuPrice + gpuPrice + ramPrice;

    // Generate receipt text using template literals, this creates the receipt content by inserting the selected component names and total price
    let receiptText = `
        <h1>Final Receipt</h1>
        <p>CPU: ${cpuOption.text}</p>
        <p>GPU: ${gpuOption.text}</p>
        <p>RAM: ${ramOption.text}</p>
        <p><strong>Total Price: $${totalPrice.toFixed(2)}</strong></p>
    `;

    // Display the receipt, this sets the innerHTML of the receipt <div> to the generated receiptText and makes the receipt visible by changing its display style from 'none' to 'block'
    let receiptDiv = document.getElementById('final-receipt');  // Updated ID
    receiptDiv.innerHTML = receiptText;
    receiptDiv.style.display = 'block';
}