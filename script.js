const initLikes = 220;
const initDisLikes = 34;
let LikesCount = initLikes;
let DisLikeCount= initDisLikes;
let LikeBtn = document.getElementById("likeBtn");
let dislikesBtn = document.getElementById("dislikeBtn") ;

LikeBtn.innerText= "👍 " + LikesCount;
dislikesBtn.innerText="👎 " +DisLikeCount;

function doLike(){
    LikesCount++;
    LikeBtn.innerText="👍 " + LikesCount;
    disableButtons();
    setCookie();
}
function doDisLike(){
    DisLikeCount++;
    LikeBtn.innerText="👍 " + DisLikeCount;
    disableButtons();
    setCookie();
}

function disableButtons(){
    LikeBtn.disabled = true;
    dislikesBtn.disabled= true;


}
function setCookie(){
    document.cookie = "voted=true; SameSite=Strict; Max-Age="+60;
}

window.onload= function(){
    if(document.cookie && document.cookie.indexOf("voted")>-1)
    disableButtons();
}
