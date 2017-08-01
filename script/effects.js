$('li').on('mouseover', function(){
  $(this).addClass('highlighted')
})
$('li').on('mouseleave', function(){
  $(this).removeClass('highlighted')
})

$('h2').on('mouseover', function(){
  $(this).addClass('highlighted')
})
$('h2').on('mouseleave', function(){
  $(this).removeClass('highlighted')
})

$('#profile-pic').on('mouseover', function(){
  $(this).addClass('grayscale')
})
$('#profile-pic').on('mouseleave', function(){
  $(this).removeClass('grayscale')
})


$('#profile-pic').on('click', function(){
  $('#hidden-blurb').slideDown();
});

$('#profile-pic').on('dblclick', function(){
  $('#hidden-blurb').slideUp();
});
