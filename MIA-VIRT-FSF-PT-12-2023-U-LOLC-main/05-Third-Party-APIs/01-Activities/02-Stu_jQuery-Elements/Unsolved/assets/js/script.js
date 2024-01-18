// Select the existing DOM element with ID 'root' and assign it to a variable
var rootEl = $('#root');

// Create a `<p>` element to store the author's name and assign it to a new variable
var p = $('<p>');
// Add the text "~ Carol Dweck" to the newly created `<p>` element
p.text("~ Carol Dweck");
// Add the class `plain` to the author element
p.addClass('plain');

// Create a new `<h1>` element to store the author's quote and assign it to a new variable
var h1 = $('<h1>');
// Add the quote text to the `<h1>` element
h1.text("Love Challenges, Be Intrigued by Mistakes, Enjoy Effort, and Keep Learning.");
// Apply the class `fancy` to the quote element
h1.addClass('fancy');

// Append the author element to the quote element
h1.append(p);

// Append the title element to the HTML element with ID 'root'
rootEl.append(h1);
