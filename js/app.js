// Enemies our player must avoid
var Enemy = function(x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    this.x += this.speed * dt;
    if (this.x > 505) {
        this.speed = this.randomSpeed();
        this.x = 0;
    }
};

// Generate a random speed for enemy bugs
Enemy.prototype.randomSpeed = function () {
    return Math.random() * 300;
};

// Render the enemy bugs on the web page
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Player class
var Player = function(x, y) {
    this.x = x;
    this.y = y;
    this.sprite = 'images/char-boy.png';
    this.speed = 5;
    this.score = 0;
};

// Reset the player when a collision is detected
Player.prototype.update = function () {
    //console.log("y" + this.y);
    if (this.y === -7) {
        document.getElementById('winStatus').innerHTML = 'YOU ARE THE HERO!';
    }

    for (var i = 0; i < allEnemies.length; i++) {
        if (this.x < allEnemies[i].x + 101 && this.x + 101 > allEnemies[i].x && this.y < allEnemies[i].y + 65 && 65 + this.y > allEnemies[i].y) {
            //console.log("player " + this.x + " " + this.y);
            //console.log("enemy " + allEnemies[i].x + " " + allEnemies[i].y);
            this.x = 202;
            this.y = 408;
        }
    }

    var gemImages = ['images/Gem Blue.png', 'images/Gem Green.png', 'images/Gem Orange.png'];
    for (var j = 0; j < allGems.length; j++) {
        if (this.x < allGems[j].x + 101 && this.x + 101 > allGems[j].x && this.y < allGems[j].y + 65 && 65 + this.y > allGems[j].y) {
            //delete the gem if player hit the gem
            allGems.splice(j,1);
            this.score += 10;
            //add a new gem to a random position
            var x = 101 * Math.floor(Math.random() * 4);
            var y = 65 * (Math.floor(Math.random() * 3) + 1);
            console.log(Math.floor(Math.random() * 2));
            var newGem = new Gem(x, y, gemImages[Math.floor(Math.random() * 2)]);
            allGems.push(newGem);
        }
    }
    document.getElementById('score').innerHTML = "SCORE IS " + this.score;
};

// Render the player on the screen
Player.prototype.render = function () {
    //console.log(this.x + " " + this.y);
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Handler for moving the player
Player.prototype.handleInput = function(keyPressed, dt) {
    if (keyPressed === 'left' && this.x > 0) {
        this.x -= 101;
    } else if (keyPressed === 'right' && this.x < 404) {
        this.x += 101;
    } else if (keyPressed === 'up' && this.y > 0) {
        this.y -= 83;
    } else if (keyPressed === 'down' && this.y < 400) {
        this.y += 83;
    } else {
        //reset player to original position
        this.x = 202;
        this.y = 408;
    }
};

// Gem class
var Gem = function(x, y, sprite) {
    this.x = x;
    this.y = y;
    this.sprite = sprite;
};

// Render the gem on the screen
Gem.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

var enemy1 = new Enemy(0, 65, Math.random() * 1000);
var enemy2 = new Enemy(0, 145, Math.random() * 1000);
var enemy3 = new Enemy(0, 225, Math.random() * 1000);
var player = new Player(202, 408);
var allEnemies = [enemy1, enemy2, enemy3];
var gem1 = new Gem(101, 65, 'images/Gem Blue.png');
var gem2 = new Gem(404, 145, 'images/Gem Green.png');
var allGems = [gem1, gem2];

// start button event handler
$('.startBtn').click(function(e) {
  //console.log('clicked element', e.target);
  player.x = 202;
  player.y = 408;
  player.score = 0;
  gem1.x = 101;
  gem1.y = 65;
  gem2.x = 404;
  gem2.y = 145;
  currentGameState = 'InGame';
  document.getElementById('winStatus').innerHTML = '';
});

// change character button event handler
$('.changeBtn').click(function(e) {
    if (player.sprite === 'images/char-boy.png') {
        player.sprite = 'images/char-pink-girl.png';
    } else {
        player.sprite = 'images/char-boy.png';
    }
});

document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    player.handleInput(allowedKeys[e.keyCode]);
});
