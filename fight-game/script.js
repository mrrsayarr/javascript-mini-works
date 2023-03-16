var superman = {
    life: 10,
    isAlive: true,
    attack: function () {
        return Math.floor(Math.random() * 3);
    }
};

var batman = {
    life: 10,
    isAlive: true,
    attack: function () {
        return Math.floor(Math.random() * 3);
    }
};

$('#supermanLife').text(superman.life);
$('#batmanLife').text(batman.life);

const playGame = () => {
    init();
    
    fight();
    function fight() {
        setTimeout(function () {
            var whoAttack = Math.floor(Math.random() * 2);
            if (whoAttack === 0) {

                if (superman.attack === 0) {

                } 
                else {
                    batman.life = batman.life - 1;
                }

                if (batman.life <= 0)
                    batman.isAlive = false;

                showHeroLife();
            } else {
                
                if (batman.attack === 0) {
                } 
                else {
                    superman.life = superman.life - 1;
                }
                if (superman.life <= 0)
                    superman.isAlive = false;

                showHeroLife();
            }

            checkEndGame();
            if (superman.isAlive && batman.isAlive)
                fight();
        }, 1000);
    }
    document.querySelector.disabled = false
}

const showHeroLife = () => {
    $('#supermanLife').text(superman.life);
    $('#batmanLife').text(batman.life);
}

const checkEndGame = () => {
    if (superman.isAlive === false || batman.isAlive === false) {

        if (superman.isAlive) {
            $('#gameResult').text('Superman killed Batman');
            console.log('Superman win');
            $('#heroBatman').fadeTo(1000, 0.2); 
        }
        else {
            $('#gameResult').text('Batman killed Superman');
            console.log('Batman win');
            $('#heroSuperman').fadeTo(1000, 0.2);
        }
    }
};

const init = () => {
    $('#gameResult').text('');

    superman.life = 10;
    superman.isAlive = true;
    $('#heroSuperman').fadeTo(2000, 1);

    batman.life = 10;
    batman.isAlive = true;
    $('#heroBatman').fadeTo(2000, 1);
};