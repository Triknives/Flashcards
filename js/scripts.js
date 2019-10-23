$(document).ready(function() {
  $(".variables").click(function(){
    $(".variables-def").fadeToggle();
    $(".var").fadeToggle();
  })

$(".strings").click(function(){
      $(".strings-def").fadeToggle();
      $(".string").fadeToggle();
    })

$(".methods").click(function(){
      $(".methods-def").fadeToggle();
      $(".method").fadeToggle();
    })

$(".operators").click(function(){
      $(".operators-def").fadeToggle();
      $(".operator").fadeToggle();
  })
});
