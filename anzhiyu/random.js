var posts=["2025/03/29/hello-world/","2025/03/31/post/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };