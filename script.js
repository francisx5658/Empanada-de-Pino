document.addEventListener('DOMContentLoaded', () => {
  const mainImg = document.getElementById('main-img');
  const thumbs = document.querySelectorAll('.thumb');
  const likeBtn = document.getElementById('like-btn');
  const likeCountSpan = document.getElementById('like-count');

  // Cambiar la imagen principal al hacer clic en las miniaturas
  thumbs.forEach(thumb => {
    thumb.addEventListener('click', () => {
      mainImg.src = thumb.src;
      thumbs.forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');
    });
  });

  // Contador de Likes
  let likes = 15;
  let liked = false;

  likeBtn.addEventListener('click', () => {
    if (!liked) {
      likes++;
      liked = true;
    } else {
      likes--;
      liked = false;
    }
    likeCountSpan.innerText = likes;
  });
});