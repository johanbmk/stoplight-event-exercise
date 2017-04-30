(function() {
  'use strict';

  let stopButton = document.querySelector('#stopButton');
  let slowButton = document.querySelector('#slowButton');
  let goButton = document.querySelector('#goButton');

  let stopLight = document.querySelector('#stopLight');
  let slowLight = document.querySelector('#slowLight');
  let goLight = document.querySelector('#goLight');

  stopButton.addEventListener('click', event => {
    stopLight.classList.toggle("stop");
  });

  slowButton.addEventListener('click', event => {
    slowLight.classList.toggle("slow");
  });

  goButton.addEventListener('click', event => {
    goLight.classList.toggle("go");
  });

  stopButton.addEventListener('mouseenter', event => {
    console.log(`Entered ${event.target.id} button`);
  });

  stopButton.addEventListener('mouseleave', event => {
    console.log(`Left ${event.target.id} button`);
  });

  slowButton.addEventListener('mouseenter', event => {
    console.log(`Entered ${event.target.id} button`);
  });

  slowButton.addEventListener('mouseleave', event => {
    console.log(`Left ${event.target.id} button`);
  });

  goButton.addEventListener('mouseenter', event => {
    console.log(`Entered ${event.target.id} button`);
  });

  goButton.addEventListener('mouseleave', event => {
    console.log(`Left ${event.target.id} button`);
  });


})();
