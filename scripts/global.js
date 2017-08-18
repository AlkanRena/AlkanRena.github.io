'use strict';
var newClass;

function clearAll() {
    $('section').removeClass('active');
}

$(function () {
    var includes = $('[data-include]');
    jQuery.each(includes, function () {
        var file = 'html/' + $(this).data('include') + '.html';
        $(this).load(file);
    });
});



$(document).ready(function () {

    //Sterowanie nadawaniem klas //

    $('#gridButton').on('click', function () {
        $('.uk-grid').removeClass('uk-grid');
        $('.main').addClass('uk-grid');
    });

    $('#addClassButton').on('click', function () {
        $('#autoAdd').find('.main').find('div').removeClass(newClass);
        newClass = $('#addClass').val();
        if (newClass.lenght != 0) {
            $('#autoAdd').find('.main').find('div').addClass(newClass);
        } else {
            alert('Nie dodałeś klasy !')
        }
    });

    $('#autoAdd_panel').ready(function () {
        $('.close').on('click', function () {
            clearAll();
        });
    });

    $('#dim_panel').ready(function () {
        $('.close').on('click', function () {
            clearAll();
        });
    });

    $('#game-window').ready(function () {
        $('.close').on('click', function () {
            clearAll();
        });
    });

    $('#grid_panel').ready(function () {
        $('.close').on('click', function () {
            clearAll();
        });
    });

    $('#autoAdd_button').on('click', function () {
        clearAll();
        $('#autoAdd').addClass('active');
    });
    $('#game_button').on('click', function () {
        clearAll();
        $('#game').addClass('active');
    });
    $('#grid_button').on('click', function () {
        clearAll();
        $('#grid').addClass('active');
    });
    $('#dim_button').on('click', function () {
        clearAll();
        $('#dim').addClass('active');
    });
});
$('')
$('.close').on('click', function () {
    clearAll();
});