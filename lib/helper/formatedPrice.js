function formatPrice(input) {
    // Ensure input is a number (either string or number)
    const number = parseFloat(input);

    // If the input is not a valid number, return it as is
    if (isNaN(number)) {
        return input;
    }

    // Format the number with commas as thousands separators
    return number.toLocaleString();
}

export default formatPrice;