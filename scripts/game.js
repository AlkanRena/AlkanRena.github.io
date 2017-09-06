var pos_x, pos_y, boulder, newpos, points, endgame, interval_1, interval_2;

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function createBulder() {
    if (endgame) {
        return;
    }
    console.log(true);
    newpos = randomNumber(1, 6);
    switch (newpos) {
        case 1:
            boulder = '<div class="blocker" style="grid-row-start:1;grid-column-start:1;"><img src="img/block.png"><img src="img/block.png"><img src="img/block.png"></div>';
            break;
        case 2:
            boulder = '<div class="blocker" style="grid-row-start:1;grid-column-start:4;"><img src="img/block.png"><img src="img/block.png"><img src="img/block.png"></div>';
            break;
        case 3:
            boulder = '<div class="blocker" style="grid-row-start:1;grid-column-start:7;"><img src="img/block.png"><img src="img/block.png"><img src="img/block.png"></div>';
            break;
        case 4:
            boulder = '<div class="blocker" style="grid-row-start:1;grid-column-start:1;"><img src="img/block.png"><img src="img/block.png"><img src="img/block.png"></div><div class="blocker" style="grid-row-start:1;grid-column-start:7;"><img src="img/block.png"><img src="img/block.png"><img src="img/block.png"></div>';
            break;
        case 5:
            boulder = '<div class="blocker" style="grid-row-start:1;grid-column-start:4;"><img src="img/block.png"><img src="img/block.png"><img src="img/block.png"></div><div class="blocker" style="grid-row-start:1;grid-column-start:7;"><img src="img/block.png"><img src="img/block.png"><img src="img/block.png"></div>';
            break;
        case 6:
            boulder = '<div class="blocker" style="grid-row-start:1;grid-column-start:1;"><img src="img/block.png"><img src="img/block.png"><img src="img/block.png"></div><div class="blocker" style="grid-row-start:1;grid-column-start:7;"><img src="img/block.png"><img src="img/block.png"><img src="img/block.png"></div>';
            break;
    }
    $('#game-window').append(boulder);
}

function moveBulder() {
    if (endgame) {
        $('#points').empty();
        return;
    }
    updatePoints();
    $(".blocker").each(function () {
        var boulder_row = +$(this).css('grid-row-start');
        boulder_row = boulder_row + 1;
        if (boulder_row <= 16) {
            $(this).css('grid-row-start', "" + boulder_row + "");
        } else {
            $(this).remove();

        }
        if (
            (
              ($('#player').css('grid-row-start') == $(this).css('grid-row-start')) && ($('#player').css('grid-column-start') == $(this).css('grid-column-start'))
            ) || (
              ((parseInt($('#player').css('grid-row-start')) + 1) == $(this).css('grid-row-start')) && (($('#player').css('grid-column-start') == $(this).css('grid-column-start')))
            ) || (
              ((parseInt($('#player').css('grid-row-start')) + 2) == $(this).css('grid-row-start')) && (($('#player').css('grid-column-start') == $(this).css('grid-column-start')))
            ) || (
              ((parseInt($('#player').css('grid-row-start')) + 3) == $(this).css('grid-row-start')) && (($('#player').css('grid-column-start') == $(this).css('grid-column-start')))
            )
        {
            endgame = true
        }
        return;
    })
}

function updatePoints () {
    points += 1;
    $('#points').text(points);
}

function intervalStart () {
    interval_1 = window.setInterval(
        moveBulder, 1000
    );
    interval_2 = window.setInterval(
        createBulder, 6000
    );
}



function intervalStop () {
    interval_1 = 0;
    interval_2 = 0;
}

function startGame() {
    if (endgame) {
        intervalStop();
    }
        points = 0;
        endgame = false;
        createBulder();

        intervalStart();

}


$('#game-window').ready(function () {
    $(this).keydown(function (e) {
        if (endgame) {
            return;
        }
        pos_x = parseInt($('#player').css('grid-column-start'));
        pos_y = parseInt($('#player').css('grid-row-start'));
        switch (e.keyCode) {
            case 37:
                e.preventDefault();
                if (pos_x >= 4) {
                    pos_x = pos_x - 3;
                    $('#player').css('grid-column-start', "" + pos_x + "");
                }
                break;
            case 38:
                e.preventDefault();
                if (pos_y >= 1) {
                    pos_y = pos_y - 1;
                    $('#player').css('grid-row-start', "" + pos_y + "");
                }
                break;
            case 39:
                e.preventDefault();
                if (pos_x < 7) {
                    pos_x = pos_x + 3;
                    $('#player').css('grid-column-start', "" + pos_x + "");
                }
                break;
            case 40:
                e.preventDefault();
                if (pos_y < 13) {
                    pos_y = pos_y + 1;
                    $('#player').css('grid-row-start', "" + pos_y + "");
                }
                break;
        }
    });


});
