// Toggle Hamburger
const navbarNav = document.querySelector(`.navbar-nav`);
document.querySelector(`#hamburger-menu`).onclick = () => {
  navbarNav.classList.toggle(`active`);
};

// click outside sidenav to exit
const hamburgerExit = document.querySelector(`#hamburger-menu`);

document.addEventListener(`click`, function (e) {
  if (!hamburgerExit.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove(`active`);
  }
});
//POP UP
function showPopup(title, text) {
  document.getElementById('popup-title').innerText = title;
  document.getElementById('popup-text').innerText = text;
  document.getElementById('popup').style.display = 'block';
}

function closePopup() {
  document.getElementById('popup').style.display = 'none';
}

// Close the popup when clicking outside of the popup content
window.onclick = function(event) {
  var popup = document.getElementById('popup');
  if (event.target === popup) {
      closePopup();
  }
};
function showPopup(title, text, showVideo = false) {
  document.getElementById('popup-title').innerText = title;
  document.getElementById('popup-text').innerText = text;
  
  const videoContainer = document.getElementById('video-container');
  
  if (showVideo) {
      videoContainer.style.display = 'block'; // Show the video
  } else {
      videoContainer.style.display = 'none'; // Hide the video
  }
  
  document.getElementById('popup').style.display = 'block'; // Show popup
}