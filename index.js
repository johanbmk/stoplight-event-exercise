(function() {
  'use strict';

  let stopButton = document.querySelector('#stopButton');
  let slowButton = document.querySelector('#slowButton');
  let goButton = document.querySelector('#goButton');

  let stopLight = document.querySelector('#stopLight');
  let slowLight = document.querySelector('#slowLight');
  let goLight = document.querySelector('#goLight');

  stopButton.addEventListener('click', (event) => {
    stopLight.classList.toggle("stop");
  });

  slowButton.addEventListener('click', (event) => {
    slowLight.classList.toggle("slow");
  });

  goButton.addEventListener('click', (event) => {
    goLight.classList.toggle("go");
  });

})();
