function likePost(button) {
  let count = button.querySelector("span");
  count.innerHTML = Number(count.innerHTML) + 1;
}

function follow(button) {
  button.innerHTML = "Following";
}

function viewProfile(name) {
  alert("Viewing " + name + "'s profile");
}

function post() {
  let text = document.getElementById("postText").value;

  if (text != "") {
    document.getElementById("newPost").innerHTML =
      "<div class='post'><b>My Post</b><p>" +
      text +
      "</p><button onclick='likePost(this)'>♡ Like <span>0</span></button></div>";

    document.getElementById("postText").value = "";
  }
}
