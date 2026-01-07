// ROUTE PROTECTION
const token = localStorage.getItem("token");
if (!token) {
  window.location.href = "index.html";
}

// DOM ELEMENTS
const postsDiv = document.getElementById("posts");
const loader = document.getElementById("loader");
const errorDiv = document.getElementById("error");

// INITIAL LOAD
fetchPosts();

function fetchPosts() {
  loader.style.display = "block";
  errorDiv.innerText = "";
  postsDiv.innerHTML = "";

  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => {
      if (!res.ok) throw new Error("API failed");
      return res.json();
    })
    .then(data => {
      loader.style.display = "none";

      data.slice(0, 5).forEach(post => {
        const div = document.createElement("div");
        div.className = "post";
        div.innerHTML = `<h4>${post.title}</h4><p>${post.body}</p>`;
        postsDiv.appendChild(div);
      });
    })
    .catch(() => {
      loader.style.display = "none";
      errorDiv.innerHTML = `
        Failed to load data.
        <button onclick="fetchPosts()">Retry</button>
      `;
    });
}

function logout() {
  localStorage.removeItem("token");
  window.location.href = "index.html";
}

