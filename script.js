// Select DOM Elements
const blogForm = document.getElementById('blogForm');
const postTitle = document.getElementById('postTitle');
const postPoster = document.getElementById('postPoster');
const postContent = document.getElementById('postContent');
const postsContainer = document.getElementById('postsContainer');
const postDate = document.getElementById('postDate');
postDate.valueAsDate = new Date();

// Load posts from localStorage or default to empty array
let posts = JSON.parse(localStorage.getItem('blogPosts')) || [];

//
let editingIndex = null;

// Function to render all posts on the screen
function displayPosts() {
    postsContainer.innerHTML = ''; // Clear container

    if (posts.length === 0) {
        postsContainer.innerHTML = '<p>No posts yet. Write something above!</p>';
        return;
    }

    posts.forEach((post, index) => {
        // Create card element
        const postCard = document.createElement('div');
        postCard.className = 'blog-card';

        // Populate card content
        postCard.innerHTML = `
        <div class="review-layout">
            ${post.poster ? `
                <img
                    src="${post.poster}"
                    alt="$post.title} poster"
                    class="movie-poster"
                >
            ` : ''}
                
            <div class="review-content">
                <h3>${post.title}</h3>
                <small>date_watched: "${post.date}"</small>
                <p>${post.content}</p>
                <button
                    class="edit-btn"
                    onclick="editPost(${index})"
                >
                    edit()
                </button>
                <button
                    class="delete-btn"
                    onclick="deletePost(${index})"
                >
                    delete()
                </button>
            </div>
        </div>
    `;

        postsContainer.appendChild(postCard);
    });
}

// Function to handle form submission
blogForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent page refresh

    // Create new post object
    const newPost = {
        title: postTitle.value,
        poster: postPoster.value,
        content: postContent.value,
        date: postDate.value
    };

    // Add to array, update storage, and refresh display
    if (editingIndex === null) {
        // Creating new review
        posts.unshift(newPost);
    } else {
        // Updating existing review
        posts[editingIndex] = newPost;
        
        editingIndex = null;
    }

    localStorage.setItem('blogPosts', JSON.stringify(posts));
    displayPosts();

    // Reset the form inputs
    blogForm.reset();
    blogForm.querySelector('button[type="submit"]').textContent = 'Publish Review';
    postDate.valueAsDate = new Date();
});

// Function to delete a post
window.deletePost = function(index) {
    posts.splice(index, 1); // Remove post from the array
    localStorage.setItem('blogPosts', JSON.stringify(posts));
    displayPosts(); // Refresh view
};

// FUnction to edit a post
window.editPost = function(index) {
    const post = posts[index];

    postTitle.value = post.Title;
    postPoster.value = post.poster || '';
    postDate.value = post.date;
    postContent.value = post.content;

    editingIndex = index;

    blogForm.querySelector('button[type="submit"]').textContent = 'Save Changes';

    windown.scrollTo({top: 0, behavior: 'smooth'});
};

// Initial render when page loads
displayPosts();