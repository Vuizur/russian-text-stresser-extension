// Get all the text nodes in the document
function getTextNodes() {
    let nodes = [];
    let walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    let node;
    while (node = walker.nextNode()) {
        nodes.push(node);
    }
    return nodes;
}

// Send a text node to the server and replace it with the response
function stressTextNode(node) {
    // Get the text content of the node
    let text = node.textContent;

    if (text.length == 0) {
        return;
    }
    data = {
        "text": text,
    }

    // convert the data object to JSON string
    let jsonData = JSON.stringify(data);
    // set the request options
    let options = {
        method: "POST", // specify the HTTP method
        headers: {
            "Content-Type": "application/json" // specify the content type
        },
        body: jsonData // set the request body
    };

    // Create a URL with the text as a query parameter
    let url = new URL(`http://localhost:8000/stress_text`);

    // Fetch the URL and get the response as text
    fetch(url, options)
        .then(response => {
            // Check if the status is 200
            if (response.status === 201) {
                // Call the text() method and return a promise
                return response.text();
            } else {
                // Throw an error with the status
                throw new Error(`Server returned ${response.status}`);
            }
        })
        .then(stressed => {
            // Replace the node content with the stressed text
            node.textContent = stressed;
        })
        .catch(error => {
            // Handle any errors
            console.error(error);
        });
}
//Call chrome's detect language API to detect the language of the page
// Only stress the text if the language is Russian
chrome.i18n.detectLanguage(document.body.innerText, function (result) {
    console.log("Detected languages", result);
    if (result.languages[0].language == "ru") {
        // Loop through all the text nodes and stress them
        let nodes = getTextNodes();
        console.log(nodes.length)
        for (let node of nodes) {
            stressTextNode(node);
        }
    }
});