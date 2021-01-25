
postDynamic();

function postDynamic() {

    let postTitle = localStorage.getItem('title');
    let postAuthor = localStorage.getItem('author');
    let postDescription = localStorage.getItem('description');
    
    
    var template = '<div class="title-container">'+
    '<h4 id="post-title">'+
    postTitle +
    '</h4>'+
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

  function addLike() {
      var countValue = document.getElementById("likeCount").innerHTML;
      countValue++;
      var newCount = countValue;
      var div = document.getElementById("likeCount");
      div.innerHTML = newCount;
  }


