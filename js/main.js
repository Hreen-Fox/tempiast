main = () => {
    
    $('#firstBlock').css('marginTop', Number($('#firstBlock').css('margin-top').split('px')[0]) + $('header').height() + 'px')
}

$(window).on("load", function() {
	main();
});