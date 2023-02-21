main = () => {
    console.log($($($('.row')[0]).find('.card')).outerHeight() - $($('.row')[0]).find('.card .bottom').outerHeight())
    console.log($($($('.row')[0]).find('.card')).outerHeight())
    console.log($($('.row')[0]).find('.card .bottom').outerHeight())
    $($('.row')[0]).find('.card .bottom').css('top', ($($($('.row')[0]).find('.card .top')).outerHeight() - $($('.row')[0]).find('.card .bottom').outerHeight()) +'px');
    $($('.row')[1]).find('.card .bottom').css('top', ($($($('.row')[1]).find('.card .top')).outerHeight() - $($('.row')[1]).find('.card .bottom').outerHeight())+'px');
    $('#firstBlock').css('marginTop', Number($('#firstBlock').css('margin-top').split('px')[0]) + $('header').height() + 'px')
}

$(window).on("load", function() {
	main();
});