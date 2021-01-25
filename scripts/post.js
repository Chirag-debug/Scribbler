
postDynamic();

function postDynamic() {

    let postTitle = localStorage.getItem('title');
    let postAuthor = localStorage.getItem('author');
    let postDescription = localStorage.getItem('description');
    
    
    var template = '<div class="title-container" id="title-details">'+
    '<h4 id="post-title">'+
    postTitle+
    '</h4>'+
    '</div>'+
    '<div class="author" id="author-details">'+
    '<h4 id="autr">'+
    postAuthor+
    '</h4>'+
    '</div>'+
    '<div class="body-container" id="body-details">'+
    '<p id="desc">'+
    postDescription+
    '</p>'+
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

  function editPost() {

      var edit = '<button id="editBtn" >Edit  <i class="fa fa-pencil-square-o" style="font-size:18px"></i> </button>';
      var save = '<button id="editBtn" >Save  <i class="fa fa-save" style="font-size:18px"></i> </button>';

      var editSave = document.getElementById('editPost');
      var toDo = (editSave.innerText).toString().trim();
      if(toDo.localeCompare('Edit')===0){
        var btnSave = document.getElementById('editPost');
        btnSave.innerHTML = save;
        enableEdit();
    
      }
      else{
        var btnEdit = document.getElementById('editPost');
        btnEdit.innerHTML = edit;
        updateContent();
      }
  }

  function enableEdit(){

    var postTitle = (document.getElementById('post-title').innerHTML).toString();
    var postAuthor = (document.getElementById('autr').innerHTML).toString();
    var postDescription = (document.getElementById('desc').innerHTML).toString();

    
    var div = document.getElementById('post-details');
    
    var template = 
    '<textarea class="txtTitle" id="txtTitleId">'+
    postTitle+
    '</textarea>'+
    '<br>'+
    '<br>'+

    '<textarea class="txtAuthor" id="txtAuthorId">'+
    postAuthor+
    '</textarea>'+
    '<br>'+
    '<br>'+
    '<br>'+

    '<textarea class="txtBody" id="txtBodyId" rows="10" cols="150">'+
    postDescription+
    '</textarea>';
    

    div.innerHTML = template;
  }

  function updateContent(){

    var editedTitle = (document.getElementById('txtTitleId').innerHTML).toString();
    var editedAuthor = (document.getElementById('txtAuthorId').innerHTML).toString();
    var editedDescription = (document.getElementById('txtBodyId').innerHTML).toString();

    console.log(editedTitle);
    console.log(editedAuthor);
    console.log(editedDescription);
  

    var template = '<div class="title-container" id="title-details">'+
    '<h4 id="post-title">'+
    editedTitle+
    '</h4>'+
    '</div>'+
    '<div class="author" id="author-details">'+
    '<h4 id="autr">'+
    editedAuthor+
    '</h4>'+
    '</div>'+
    '<div class="body-container" id="body-details">'+
    '<p id="desc">'+
    editedDescription+
    '</p>'+
    '</div>';

    document.getElementById("post-details").innerHTML = template;
  
  }


