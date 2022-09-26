
$(function(){
  function photoChange(target){
    //li要素のセレクタを格納した配列
    var items = target.find('li'); 
    //現在表示されているインデックス
    var current = 0;
    //画像のフェードイン
    function open(){
      $(items[current]).fadeIn(1200,'easeInQuad',function(){
        setTimeout(change, 1500); });
    };

    //画像のフェードアウト
    function close(){
      $(items[current]).fadeOut(1200,'easeOutQuad');
    };

    //画像の切り替え
    function change(){
      close();
      current = ++current % items.length;
      open();
    };

    open();
  };
    
  photoChange($('#container_1'));

});
