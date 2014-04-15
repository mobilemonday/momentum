// Functions to find then show and hide tabs
  jQuery(function() {
    $('*[data-tabset]').each(function() {
      var defaultTab = '#' + $(this).data('tabset')
      $(this).children('li').each(function() {
        var currentSheet = $(this).children('a').attr('href')
        if (currentSheet != defaultTab) {
          $(currentSheet).removeClass('show')
        } else {
          $(this).addClass('selected')
        }
        $(this).on('click', function() {
          $(this).siblings().each(function(){
            $(this).removeClass('selected')
            $($(this).children('a').attr('href')).removeClass('show')
          })
          $(this).addClass('selected')
          $($(this).children('a').attr('href')).addClass('show')
          return false
        })
        
      })
    })
  })



jQuery(document).ready(function($){
	$('.crsl-items').carousel({ overflow: true, visible: 1, itemMinWidth: 400, itemMargin: 100, itemEqualHeight:	true, speed: 1000, autoRotate: 5000 });
});