const newPostForm = document.getElementById("new-post-form")

let allPosts = document.getElementById("blog-posts")
let postsArray = []

function renderPosts() {
    let html = ""
        // for each post in the array,
        // add HTML to render post title and body on page
    for (let post of postsArray) {
        html += `
            <h3>${post.title}</h2>
            <p>${post.body}</p>
            <hr/>`
    }

    allPosts.innerHTML = html;
}

fetch("https://apis.scrimba.com/jsonplaceholder/posts")
    .then(res => res.json())
    .then(data => {
        // assign first 10 posts to an array
        postsArray = data.slice(0, 10)
        
        renderPosts()
    })

newPostForm.addEventListener("submit", function(event) {
    //prevents the page from reloading for whatever reason
    event.preventDefault()
    
    const formTitle = document.getElementById("form-post-title")
    const formBody = document.getElementById("form-post-body")

    if (formTitle.value && formBody.value) {
        const post = {
            title: formTitle.value,
            body: formBody.value
        }
        
        // fetch request to post new content to API
        fetch("https://apis.scrimba.com/jsonplaceholder/posts", {
            method: "POST",
            body: JSON.stringify(post),
            headers: {
                "Content-Type": "application/json"
            },
        })
            .then (res => res.json())
            .then (post => {
                //add new post to beginning of postsArray
                postsArray.unshift(post)
                renderPosts()

                // reset/clear form
                newPostForm.reset()
            })

    } else {
        console.log("something went wrong")
    }

})