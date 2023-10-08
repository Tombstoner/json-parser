let inputTextArea = document.getElementById("input-text-area");
let outputTextArea = document.getElementById("output-text-area");
let convertButton = document.getElementById("convert-button");
let lineNumberSpan = document.getElementById("line-number-span");
let colNumberSpan = document.getElementById("col-number-span");

inputTextArea.addEventListener("input", () => {
    let lines = inputTextArea.value.split('\n');
    let lineCount = lines.length;
    console.log('Total number of lines: ' + lineCount);
})

inputTextArea.addEventListener("mouseup", () => {
    let textLines = inputTextArea.value.substr(0, inputTextArea.selectionStart).split("\n");
    let currentLineNumber = textLines.length;
    let currentColumnIndex = textLines[textLines.length - 1].length;
    lineNumberSpan.innerHTML = currentLineNumber
    colNumberSpan.innerHTML = currentColumnIndex
})

inputTextArea.addEventListener("keyup", () => {
    let textLines = inputTextArea.value.substr(0, inputTextArea.selectionStart).split("\n");
    let currentLineNumber = textLines.length;
    let currentColumnIndex = textLines[textLines.length-1].length;
    lineNumberSpan.innerHTML = currentLineNumber
    colNumberSpan.innerHTML = currentColumnIndex
})

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
