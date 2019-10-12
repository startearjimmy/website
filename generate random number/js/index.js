var sum;

$('#random').on('click',function(){
    var data=[];
    var i;
    sum=0;
    var min=Number($('#min').val());
    var max=Number($('#max').val());
    $('div#data').empty();
    for(i=0;i<Number($('#n').val());i++)
    {
        data.push(Math.floor(Math.random()*(max-min+1)+min));
        $item = $('<div>').attr('class','item').text(data[i]);
        $div = $('<div>').attr('class','col-3');
        $div.append($item);
        $('div#data').append($div);
        sum+=Number(data[i]);
    }
})

$('#sum').on('click',function(){
    $('#result').val(sum);
})

