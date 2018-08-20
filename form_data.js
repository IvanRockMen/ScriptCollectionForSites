function post_query(url, name, data){
    var str= "";

    $.each(data.split('.'), function(k, v){
        str += '&' + v +"=" + $('#'+v).val();
    });

    $.ajax({
        url: '/' + url,
        type: 'POST',
        data: nane + "_f=1" + str,
        cache: false,
        success: function(result){
            obj = JQuery.parseJSON(result)

            if(obj.url){
                go(obj.url);
            }
            else{
                alert(obj.message);
            }
        }
    });
}

function go(url){
    return window.location.href='/' + url;
}