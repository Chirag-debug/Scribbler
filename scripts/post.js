
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
    
    '<div class="author" id="autr">'+
    postAuthor +
    '</div>'+
    '<div class="body-container">'+
    postDescription +
    '</div>';

    document.getElementById("post-details").innerHTML = template;
    
}

function addComment(){
  
    var txt = document.getElementById("commentText").value;
    
    var element = '<p >'+ txt + '</p>';
    var div = document.getElementById('listAllComments');
    div.innerHTML = element + div.innerHTML;
  }


