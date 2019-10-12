$('button').on('click',function(){
    var w=$('#weight').val()
    var h=$('#height').val()
    w=Number(w)
    h=Number(h)/100
    BMI=w/h/h
    $('#result').val(BMI)	
})

