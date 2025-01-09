const topB = document.querySelector('#top');
const bottomB = document.querySelector('#bottom');

topB.addEventListener("click", function () {
    window.scrollTo(
        {
            top: 0,
            behavior: "smooth"
        }
    );
});

bottomB.addEventListener("click", function () {
    window.scrollTo(
        {
            top: document.body.scrollHeight,
            behavior: "smooth"
        }
    );
});


// ------------------------------------------

// Function to search and highlight words
function searchWords() {
    // Get the search input value
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    
    // Get all course details boxes
    const courseDetails = document.querySelectorAll('.course-details-box');
    
    courseDetails.forEach(box => {
      // Get the text content of the title, description, and meaning
      const title = box.querySelector('h2').textContent.toLowerCase();
      const meaning = box.querySelector('h5').textContent.toLowerCase();
      const description = box.querySelector('h6').textContent.toLowerCase();
      
      // Check if the search term matches any part of the word or description
      if (title.includes(searchTerm) || meaning.includes(searchTerm) || description.includes(searchTerm)) {
        box.style.display = 'block'; // Show the box if a match is found
      } else {
        box.style.display = 'none'; // Hide the box if no match is found
      }
      
      // Highlight the term in the text if it matches
      highlightText(box, searchTerm);
    });
  }

  // Function to highlight the text in the boxes
  function highlightText(box, searchTerm) {
    // Reset the highlighted text
    const elements = box.querySelectorAll('h2, h5, h6');
    elements.forEach(element => {
      const text = element.innerHTML;
      const regex = new RegExp(`(${searchTerm})`, 'gi');
      element.innerHTML = text.replace(regex, '<span class="highlight">$1</span>');
    });
  }