/**
 * Created by lenovo on 17/12/8 008.
 */
var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    direction: 'vertical',
    loop: true,
    nextButton: '.swiper-button-prev',
    onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
        swiperAnimateCache(swiper); //隐藏动画元素
        swiperAnimate(swiper); //初始化完成开始动画
    },
    onSlideChangeEnd: function(swiper){
        swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
    }
});
var music=document.getElementById("music");
var music_bg=document.querySelector(".music_bg");
var music_tp=document.querySelector(".music_tp");
var audio=document.querySelector("audio");
var flog=1;
music.onclick=function(){
    if(flog==1){
        music_bg.style.display="none";
        music_tp.style.animation="none";
        audio.pause();
        flog=0
    }else {
        music_bg.style.display="block";
        music_tp.style.animation="mymusic 2s linear infinite";
        audio.play();
        flog=1
    }
}