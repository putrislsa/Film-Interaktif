const video = document.getElementById('myVideo');
const choiceContainer = document.getElementById('choice-container');
const choice1Button = document.getElementById('choice1');
const choice2Button = document.getElementById('choice2');

video.addEventListener('ended', () => {
  video.style.display = 'none';
  choiceContainer.style.display = 'block';
});

choice1Button.addEventListener('click', () => {
  video.src = 'aset/film/vid2.mp4';
  video.style.display = 'block';
  choiceContainer.style.display = 'none';
  video.play();

  video.addEventListener('ended', () => {
    displayClothingChoices();
  }, { once: true });
});

choice2Button.addEventListener('click', () => {
  video.src = 'aset/film/vid3.mp4';
  video.style.display = 'block';
  choiceContainer.style.display = 'none';
  video.play();

  video.addEventListener('ended', () => {
    choiceContainer.innerHTML = `
     <div class="video-overlay">
      <div class="intro">Pilih Jalan Cerita yang kamu mau!</div>
      <div class="choice">
        <button id="choice6">Diberi Nomor</button>
      </div>
      <div class="choice">
        <button id="choice7">Tidak Diberi Nomor</button>
      </div>
      </div>
    `;
    choiceContainer.style.display = 'block';

    document.getElementById('choice6').addEventListener('click', () => {
      video.src = 'aset/film/vid6.mp4';
      video.style.display = 'block';
      choiceContainer.style.display = 'none';
      video.play();

      video.addEventListener('ended', () => {
        displayClothingChoices();
      }, { once: true });
    });

    document.getElementById('choice7').addEventListener('click', () => {
      video.src = 'aset/film/vid7.mp4';
      video.style.display = 'block';
      choiceContainer.style.display = 'none';
      video.play();

      video.addEventListener('ended', () => {
        displayRestartOption();
      }, { once: true });
    });
  }, { once: true });
});

function displayClothingChoices() {
  choiceContainer.innerHTML = `
  <div class="video-overlay">
    <div class="intro">Pilih Pakaian yang kamu mau!</div>
    <div class="choice">
      <button id="choice4">Vest</button>
    </div>
    <div class="choice">
      <button id="choice5">Rajut</button>
    </div>
    </div>
  `;
  choiceContainer.style.display = 'block';

  document.getElementById('choice4').addEventListener('click', () => {
    video.src = 'aset/film/vid4.mp4';
    video.style.display = 'block';
    choiceContainer.style.display = 'none';
    video.play();

    video.addEventListener('ended', () => {
      displayFinalChoices('vest');
    }, { once: true });
  });

  document.getElementById('choice5').addEventListener('click', () => {
    video.src = 'aset/film/vid5.mp4';
    video.style.display = 'block';
    choiceContainer.style.display = 'none';
    video.play();

    video.addEventListener('ended', () => {
      displayFinalChoices('rajut');
    }, { once: true });
  });
}

function displayFinalChoices(clothing) {
  choiceContainer.innerHTML = `
  <div class="video-overlay">
    <div class="intro">Pilih Jalan Cerita yang kamu mau!</div>
    <div class="choice">
      <button id="choice8">Tolak Bashkara</button>
    </div>
    <div class="choice">
      <button id="choice9">Terima Bashkara</button>
    </div>
    </div>
  `;
  choiceContainer.style.display = 'block';

  document.getElementById('choice8').addEventListener('click', () => {
    if (clothing === 'vest') {
      video.src = 'aset/film/vid9_vest.mp4';
    } else {
      video.src = 'aset/film/vid11_rajut.mp4';
    }
    video.style.display = 'block';
    choiceContainer.style.display = 'none';
    video.play();

    video.addEventListener('ended', () => {
      displayRestartOption();
    }, { once: true });
  });

  document.getElementById('choice9').addEventListener('click', () => {
    if (clothing === 'vest') {
      video.src = 'aset/film/vid8_vest.mp4';
    } else {
      video.src = 'aset/film/vid10_rajut.mp4';
    }
    video.style.display = 'block';
    choiceContainer.style.display = 'none';
    video.play();

    video.addEventListener('ended', () => {
      displayRestartOption();
    }, { once: true });
  });
}

function displayRestartOption() {
  choiceContainer.innerHTML = `
  <div class="video-overlay">
    <div class="intro">Video Selesai. Ingin Memulai Lagi?</div>
    <div class="choice">
      <button id="restart">Putar Kembali</button>
    </div>
    </div>
  `;
  choiceContainer.style.display = 'block';

  document.getElementById('restart').addEventListener('click', () => {
    video.src = 'aset/film/vid1.mp4';
    video.style.display = 'block';
    choiceContainer.style.display = 'none';
    video.play();

    video.addEventListener('ended', () => {
      choiceContainer.innerHTML = `
      <div class="video-overlay">
        <div class="intro">Pilih Jalan Cerita yang kamu mau!</div>
        <div class="choice">
          <button id="choice1">Izinkan Duduk</button>
        </div>
        <div class="choice">
          <button id="choice2">Tidak Izinkan Duduk</button>
        </div>
        </div>
      `;
      choiceContainer.style.display = 'block';

      document.getElementById('choice1').addEventListener('click', () => {
        video.src = 'aset/film/vid2.mp4';
        video.style.display = 'block';
        choiceContainer.style.display = 'none';
        video.play();

        video.addEventListener('ended', () => {
          displayClothingChoices();
        }, { once: true });
      });

      document.getElementById('choice2').addEventListener('click', () => {
        video.src = 'aset/film/vid3.mp4';
        video.style.display = 'block';
        choiceContainer.style.display = 'none';
        video.play();

        video.addEventListener('ended', () => {
          choiceContainer.innerHTML = `
          <div class="video-overlay">
            <div class="intro">Pilih Jalan Cerita yang kamu mau!</div>
            <div class="choice">
              <button id="choice6">Diberi Nomor</button>
            </div>
            <div class="choice">
              <button id="choice7">Tidak Diberi Nomor</button>
            </div>
            </div>
          `;
          choiceContainer.style.display = 'block';

          document.getElementById('choice6').addEventListener('click', () => {
            video.src = 'aset/film/vid6.mp4';
            video.style.display = 'block';
            choiceContainer.style.display = 'none';
            video.play();

            video.addEventListener('ended', () => {
              displayClothingChoices();
            }, { once: true });
          });

          document.getElementById('choice7').addEventListener('click', () => {
            video.src = 'aset/film/vid7.mp4';
            video.style.display = 'block';
            choiceContainer.style.display = 'none';
            video.play();

            video.addEventListener('ended', () => {
              displayRestartOption();
            }, { once: true });
          });
        }, { once: true });
      });
    });
  });
}
