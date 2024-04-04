<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Timer, Counter, Like, and Pause Example</title>
</head>
<body>
<h1 id="timer">0:00</h1>
<h2 id="counter">0</h2>
<button onclick="incrementCounter()" id="plusBtn">+</button>
<button onclick="decrementCounter()" id="minusBtn">-</button>
<button onclick="likeNumber()" id="likeBtn">Like</button>
<button onclick="pauseResumeCounter()" id="pauseBtn">Pause</button>
<p id="likeCount">Likes: 0</p>
<p id="comment"></p>

<script>
  let seconds = 0;
  let count = 0;
  let likeCounts = {};
  let intervalId;
  const timerElement = document.getElementById('timer');
  const counterElement = document.getElementById('counter');
  const likeCountElement = document.getElementById('likeCount');
  const commentElement = document.getElementById('comment');
  const plusBtn = document.getElementById('plusBtn');
  const minusBtn = document.getElementById('minusBtn');
  const likeBtn = document.getElementById('likeBtn');
  const pauseBtn = document.getElementById('pauseBtn');

  function formatTime(secs) {
    const minutes = Math.floor(secs / 60);
    const remainingSeconds = secs % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  }

  function incrementTimer() {
    seconds++;
    timerElement.textContent = formatTime(seconds);
  }

  function incrementCounter() {
    count++;
    counterElement.textContent = count;
  }

  function decrementCounter() {
    count--;
    counterElement.textContent = count;
  }

  function likeNumber() {
    if (likeCounts[count]) {
      likeCounts[count]++;
    } else {
      likeCounts[count] = 1;
    }
    likeCountElement.textContent = `Likes: ${likeCounts[count]}`;
  }

  function pauseResumeCounter() {
    if (intervalId) {
      clearInterval(intervalId);
      intervalId = null;
      plusBtn.disabled = true;
      minusBtn.disabled = true;
      likeBtn.disabled = true;
      pauseBtn.textContent = 'Resume';
      commentElement.textContent = 'Game paused. Take a break!';
    } else {
      intervalId = setInterval(incrementTimer, 1000);
      plusBtn.disabled = false;
      minusBtn.disabled = false;
      likeBtn.disabled = false;
      pauseBtn.textContent = 'Pause';
      commentElement.textContent = 'Wow, what a fun game this is.';
    }
  }

  intervalId = setInterval(incrementTimer, 1000);
</script>
</body>
</html>