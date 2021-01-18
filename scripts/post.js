
postDynamic();

function postDynamic() {

    let postTitle = localStorage.getItem('title');
    let postAuthor = localStorage.getItem('author');
    let postDescription = localStorage.getItem('description');
    
    
    var template = '<div class="title-container">'+
    postTitle +
    '</div>'+
    '<div class="post-btn">'+
    '<button id="edit-btn">Edit</button>'+
    
    '</div>'+
    postAuthor +
    '<div class="author">'+
    
    '</div>'+
    '<div class="body-container">'+
    postDescription +
    '</div>';

    
    document.getElementById("post-details").innerHTML = template;
    
}
