$(function(){
    $('.dropdwn li').hover(function(){ //カーソルが乗った時の処理
        console.log($("ul:not(animated",this));
        $("ul:not(:animated)", this).slideDown();
    }, function(){
        $("ul.dropdwn_menu",this).slideUp();
    });
});