let inputTextArea = document.getElementById("input-text-area");
let outputTextArea = document.getElementById("output-text-area");
let convertButton = document.getElementById("convert-button");

convertButton.addEventListener("click", () => {
    try {
        const parsedData = JSON.parse(inputTextArea.value);
        const formattedJson = JSON.stringify(parsedData, null, 4);
        outputTextArea.value = formattedJson;
    } catch (error) {
        console.error("Invalid JSON input:", error);
        outputTextArea.value = "Invalid JSON input: " + error.message;
    }
});