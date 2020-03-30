const menu = document.getElementById('sideMenu');
const clients = document.getElementById('clientsContainer');

// close side menu
function closeSideMenu() {
  if (menu) {
    menu.style.width = 0;
    clients.style.width = '100vw';
  }
}

// open side menu
function openSideMenu(content) {
  if (menu) {
    clients.style.width = 'calc(100vw - 300px)';
    menu.style.width = '300px';
    menu.innerHTML = `
      <div class="sideMenuHeader">
        <button id="closeSideMenu">
          Close
        </button>
      </div>
    ` + content;

    document.getElementById('closeSideMenu').addEventListener('click', () => {
      closeSideMenu();
    })
  }
}

// participants menu
document.getElementById('peopleButton').addEventListener('click', () => {
  if (menu.style.width === 0 || menu.style.width === '0px') {
    openSideMenu(/*html*/`
      <div class="sideMenuInvite">
        <h2 class="sideMenuTitle">6 People are here</h2>
        <ul class="sideMenuList">
          <li class="sideMenuPerson">Harvey Dent</li>
          <li class="sideMenuPerson">Bruce Wayne</li>
          <li class="sideMenuPerson">Harvey Dent</li>
          <li class="sideMenuPerson">Bruce Wayne</li>
          <li class="sideMenuPerson">Harvey Dent</li>
          <li class="sideMenuPerson">Bruce Wayne</li>
        </ul>
      </div>
    `);
  }
  else {
    closeSideMenu();
  }
});

// invite menu
document.getElementById('inviteButton').addEventListener('click', () => {
  if (menu.style.width === 0 || menu.style.width === '0px') {
    openSideMenu(/*html*/`
      <div class="sideMenuInvite">
        <h2 class="sideMenuTitle">Invite Your Friends</h2>
        <button id="copyInvite">Copy Sharable Link</button>
        <span id="copyMsg"></span>
      </div>
    `);

    document.getElementById('copyInvite').addEventListener('click', () => {
      copyToClipboard({
        window,
        document,
        link: window.location.href,
        callback: () => {
          document.getElementById('copyMsg').innerText = 'Copied to clipboard!';
        }
      });
    });
  }
  else {
    closeSideMenu();
  }
});

// toggle mute button
const muteButton = document.getElementById('muteButton')
muteButton.addEventListener('click', () => {
  if (muteButton.value === 'on') {
    muteButton.value = 'off';
    muteButton.innerHTML = `
      <img src="images/mutemic.png" alt="" class="controlIcon" />
      <span style="color:var(--second)">Unmute</span>
    `;
  }
  else {
    muteButton.value = 'on';
    muteButton.innerHTML = `
      <img src="images/mic.png" alt="" class="controlIcon" />
      <span>Mute</span>
    `;
  }
});

// toggle video button
const videoButton = document.getElementById('videoButton')
videoButton.addEventListener('click', () => {
  if (videoButton.value === 'on') {
    videoButton.value = 'off';
    videoButton.innerHTML = `
      <img src="images/stopvideo.png" alt="" class="controlIcon" />
      <span style="color:var(--second)">Start Video</span>
    `;
  }
  else {
    videoButton.value = 'on';
    videoButton.innerHTML = `
      <img src="images/video.png" alt="" class="controlIcon" />
      <span>Stop Video</span>
    `;
  }
});