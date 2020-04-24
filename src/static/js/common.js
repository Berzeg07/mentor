$(document).ready(function() {
    $('.tab-list .tab-list__btn').click(function() {
        $('.tab-list__btn').removeClass('is-active');
        $(this).addClass('is-active');
        var tab = $(this).attr('tabLink');
        $('.tab-content').not(tab).css({
            'display': 'none'
        });
        $(tab).fadeIn(400);
    });
    $('.tab-list .tab-list__btn:last').click();
});
