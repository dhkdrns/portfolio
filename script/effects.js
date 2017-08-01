$('li').on('mouseover', function(){
  $('li').addClass('highlighted')
})
$('li').on('mouseleave', function(){
  $('li').removeClass('highlighted')
})


$('#profile-pic').on('click', function(){
  $('#hidden-blurb').slideDown();
});

$('#profile-pic').on('dblclick', function(){
  $('#hidden-blurb').slideUp(); 
});
