
$(function(){
  function photoChange(target){
    // console.log(target[0].children);
    //li要素のセレクタを格納した配列
    let items=target.find('li'); 
    //現在表示されているインデックス
    let current=0;

    //画像のフェードイン
    function open(){
      $(items[current]).fadeIn(1500,'easeInQuad',function(){
        setTimeout(change, 1700);
      });
    };

      //画像のフェードアウト
    function close(){
      $(items[current]).fadeOut(1200,'easeOutQuad');
    };

    //画像の切り替え
    function change(){
      close();
      current = ++current % items.length;
      setTimeout(open, 1200);
    };

    open();

  };
  
  photoChange($('#container_1'));

});


$(function(){
   // #で始まるアンカーをクリックした場合に処理
   $('a[href^="#"]').click(function() {
      // スクロールの速度
      let speed = 400; // ミリ秒
      // アンカーの値取得
      let href= $(this).attr("href");
      // 移動先を取得
      let target = $(href == "#" || href == "" ? 'html' : href);
      // 移動先を数値で取得
      let position = target.offset().top;
      // スムーススクロール
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
   });
});


$(function () {
  function end_loader() {
    $('.logo-circle').fadeOut(300);
  }
  $(window).on('load', function () {
    setTimeout(function () {
      end_loader();
    }, 2000)
  })
})





