var pos_x, pos_y, boulder, newpos;

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function createBulder() {
    newpos = randomNumber(3, 1);
    console.log(newpos);
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
    }
}

function moveBulder() {
    $(".blocker").each(function () {
        var boulder_row = parseInt($(this).css('grid-row-start'));
        boulder_row = boulder_row + 1;
        if (boulder_row <= 16) {
            $(this).css('grid-row-start', "" + boulder_row + "");
        } else {
            $(this).remove();
            createBulder();
            $('#game-window').append(boulder);
        }
        return;
    })
}

function startGame() {
    $(".blocker").each(function () {
        var mathVal = randomNumber(6, 1);
        switch (mathVal) {
            case 1:
                $(this).css('grid-row-start', "1");
                $(this).css('grid-column-start', "1");
                break;
            case 2:
                $(this).css('grid-row-start', "1");
                $(this).css('grid-column-start', "4");
                break;
            case 3:
                $(this).css('grid-row-start', "1");
                $(this).css('grid-column-start', "7");
                break;
            case 4:
                $(this).css('grid-row-start', "5");
                $(this).css('grid-column-start', "1");
                break;
            case 5:
                $(this).css('grid-row-start', "5");
                $(this).css('grid-column-start', "4");
                break;
            case 6:
                $(this).css('grid-row-start', "5");
                $(this).css('grid-column-start', "7");
                break;
            default:
                console.log(mathVal);
                break;
        }
        window.setInterval(
            moveBulder, 1000)

    });
}


$('#game-window').ready(function () {

    $(this).keydown(function (e) {
        pos_x = parseInt($('#player').css('grid-column-start'));
        pos_y = parseInt($('#player').css('grid-row-start'));
        switch (e.keyCode) {
            case 37:
                e.preventDefault();
                if (pos_x >= 1) {
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

