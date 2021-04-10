$(function(){
    $('.dropdwn li').hover(function(){ //カーソルが乗った時の処理
        console.log($("ul:not(animated",this));
        $("ul:not(:animated)", this).slideDown(); //ulタグではない要素で隠されている要素をslideDown
    }, function(){
        $("ul.dropdwn_menu",this).slideUp(); //カーソルが乗っていない要素でdropdwn_menuクラスはsileUp
    });
});