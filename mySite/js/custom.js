$(document).ready( function(){
  console.log('document is ready ヾ(≧▽≦*)o')
  $('.bar').fadeIn(1000)
  $('.block').fadeIn(3000)

  $(window).mousemove(function(e){
      var y = e.pageY+5
      var x = e.pageX+5
      console.log(x,y)
      $('#mouse').css("display","block")
      $('#mouse').css("top",y)
      $('#mouse').css("left",x)
  });

    $('#tel').hover(function(){
      $('#tel').html("<img src='images/phone.svg' height='15px' width='15px' />&nbsp;&nbsp;+8615802140360")
    });
    $('#qq').hover(function(){
      $('#qq').html("<img src='images/QQ.svg' height='20px' width='20px' />&nbsp;&nbsp;877979194")
    });
    $('#wc').hover(function(){
      $('#wc').html("<img src='images/WeChat.svg' height='20px' width='20px' />&nbsp;&nbsp;15802140360")
    });
    $('#dc').hover(function(){
      $('#dc').html("<img src='images/discord.svg' height='18px' width='18px' />&nbsp;&nbsp;djmtrlltc#9494")
    });
    $('#tg').hover(function(){
      $('#tg').html("<img src='images/telegram.svg' height='18px' width='18px' />&nbsp;&nbsp;djmtrlltc")
    });

});
