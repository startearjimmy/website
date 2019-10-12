var a1=0;
var a2=0;
var a3=0;
var a4=0;
var fun1=function(){
    if(a1%2==0)  $('body > div.img > img:nth-child(1)').hide();
    else  $('body > div.img > img:nth-child(1)').show();
    a1++;
}
var fun2=function(){
    if(a2%2==0)  $('body > div.img > img:nth-child(2)').hide();
    else  $('body > div.img > img:nth-child(2)').show();
    a2++;
}
var fun3=function(){
    if(a3%2==0)  $('body > div.img > img:nth-child(3)').hide();
    else  $('body > div.img > img:nth-child(3)').show();
    a3++;
}
var fun4=function(){
    if(a4%2==0)  $('body > div.img > img:nth-child(4)').hide();
    else  $('body > div.img > img:nth-child(4)').show();
    a4++;
}
$('body > div.btn > a:nth-child(1)').on('click',fun1);
$('body > div.btn > a:nth-child(2)').on('click',fun2);
$('body > div.btn > a:nth-child(3)').on('click',fun3);
$('body > div.btn > a:nth-child(4)').on('click',fun4);

