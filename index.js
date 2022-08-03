const allPosts = document.getElementById("blog-posts")

fetch("https://apis.scrimba.com/jsonplaceholder/posts")
    .then(res => res.json())
    .then(data => {
        // assign first 5 posts to an array
        const postsArr = data.slice(0, 10)
        
        // for each post in the array,
        // add HTML to render post title and body on page
        for (let post of postsArr) {
            allPosts.innerHTML += `
                <h3>${post.title}</h2>
                <p>${post.body}</p>
                <hr/>`
        }
    })