document.addEventListener('DOMContentLoaded', () => {
    new ItcSimpleSlider('.itcss', {
        loop: true,
        autoplay: true,
        interval: 15000,
        swipe: true
    });
    let widthSecond = $(window).outerWidth();
    setInterval(function(){
        if(widthSecond != $(window).outerWidth()){
            widthSecond = $(window).outerWidth();
            document.documentElement.style.setProperty('--primaryW', `-${$($('.row')[0]).find('.card .bottom').outerHeight()}px`);
            $($('.row')[0]).find('.card .bottom').css('top', ($($($('.row')[0]).find('.card .top')).outerHeight() - $($('.row')[0]).find('.card .bottom').outerHeight()) +'px');
            $($('.row')[1]).find('.card .bottom').css('top', ($($($('.row')[1]).find('.card .top')).outerHeight() - $($('.row')[1]).find('.card .bottom').outerHeight())+'px');
        }
    }, 100);
    document.documentElement.style.setProperty('--primaryW', `-${$($('.row')[0]).find('.card .bottom').outerHeight()}px`);
    $($('.row')[0]).find('.card .bottom').css('top', ($($($('.row')[0]).find('.card .top')).outerHeight() - $($('.row')[0]).find('.card .bottom').outerHeight()) +'px');
    $($('.row')[1]).find('.card .bottom').css('top', ($($($('.row')[1]).find('.card .top')).outerHeight() - $($('.row')[1]).find('.card .bottom').outerHeight())+'px');
});