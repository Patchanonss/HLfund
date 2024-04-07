async function fetchChatBotResponse(inputText) {
    const apiUrl = `https://49a9-35-231-73-17.ngrok-free.app/chat_bot?input_text=${encodeURIComponent(inputText)}`;

    try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Assuming the API returns JSON. Use .text() if it returns plain text.
        const data = await response.json();

        // Assuming 'data' contains the response message. Adjust based on the actual API response structure.
        console.log('API Response:', data);

        // Here you can call a function to display this message in your UI, for example:
        // addBotMessage(data.message);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Example usage:
fetchChatBotResponse("hello");