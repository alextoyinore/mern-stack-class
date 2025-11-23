// Prompt a simple greeting message when the page loads. request for name and greet name in alert
window.onload = function() {
    const name = prompt("Please enter your name:");
    if (name) {
        alert(`Hello, ${name}! Welcome to the blog page.`);
    }
};
