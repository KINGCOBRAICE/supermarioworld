function GameSound() {
  var coin;
  var powerUpAppear;
  var powerUp;
  var marioDie;
  var killEnemy;
  var stageClear;
  var bullet;
  var powerDown;
  var jump;

  var that = this;
  var audio = document.getElementById("title");
  audio.volume = 0.0; audio.currentTime = 0;    
   var audio = document.getElementById("myaudio");
  audio.volume = 0.6; audio.currentTime = 0;  var audio = document.getElementById("sm");
  audio.volume = 0.0; audio.currentTime = 0;
  this.init = function() {
    coin = new Audio('sounds/coin.wav');
    powerUpAppear = new Audio('sounds/nsmb power.wav');
    powerUp = new Audio('sounds/power-up.wav');
    marioDie = new Audio('sounds/SMA2-PlayerDown.wav');
    marioDie.volume = 1.0;
    killEnemy = new Audio('sounds/smb_kick.wav');
    stageClear = new Audio('sounds/stage-clear.wav');
    bullet = new Audio('sounds/bullet.wav');
    powerDown = new Audio('sounds/power-down.wav');
    jump = new Audio('sounds/jump.wav');
  };

  this.play = function(element) {
    if (element == 'coin') {
      coin.pause();
      coin.currentTime = 0;
      coin.play();
    } else if (element == 'powerUpAppear') {
      var audio = new Audio('Yay.wav');
      audio.play();
      powerUpAppear.pause();
      powerUpAppear.currentTime = 0;
      powerUpAppear.play();
    } else if (element == 'powerUp') {
      var audio = new Audio('powerup Luigi.mp3');
      audio.play();
      powerUp.pause();
      powerUp.currentTime = 0;
      powerUp.play();
    } else if (element == 'marioDie') {
      var audio = new Audio('luigi-aaaamammamia.wav');
      audio.play();
      var audio = document.getElementById("myaudio");
      audio.volume = 0.0; audio.currentTime = 0;
      var audio = document.getElementById("title");
      audio.volume = 0.0; audio.currentTime = 0;
      marioDie.pause();
      marioDie.currentTime = 0;
      marioDie.play();
    } else if (element == 'killEnemy') {
      var audio = new Audio('sounds/OW!.wav');
      

      audio.play();
      killEnemy.pause();
      killEnemy.currentTime = 0;
      killEnemy.play();
   
    } else if (element == 'stageClear') {

      var audio = document.getElementById("title");
      audio.volume = 0.0; audio.currentTime = 0;
      setTimeout(function(){     var audio = document.getElementById("myaudio");
      audio.volume = 0.6; audio.currentTime = 0;}, 9000);
      stageClear.pause();
      stageClear.currentTime = 0;
      stageClear.play();
    } else if (element == 'bullet') {
      bullet.pause();
      bullet.currentTime = 0;
      bullet.play();
    } else if (element == 'powerDown') {
      var audio = new Audio('https://cdn.glitch.com/87cf3bc7-458d-4854-a551-da080ac17ea8%2Fowowowowowow.wav?v=1568999705919');
      audio.play();
      powerDown.pause();
      powerDown.currentTime = 0;
      powerDown.play();
    } else if (element == 'jump') {
      jump.pause();
      jump.currentTime = 0;
      jump.play();
    }
  };
}
