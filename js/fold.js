macPanelMan();
function macPanelMan(){
  // macPanel 展开折叠
  $('.highlight-wrap i').on('click', function(){
    var styl = $(this).attr('class');
    if(styl == 'fa fa-angle-down code-expand'){
      $(this).attr('title', '展开');
      $(this).siblings().css("display","none");
      $(this).attr('class', 'fa fa-angle-down code-expand code-closed');
    }else{
      $(this).attr('title', '折叠');
      $(this).siblings().css("display","");
      $(this).attr('class', 'fa fa-angle-down code-expand');
    }
  });
}