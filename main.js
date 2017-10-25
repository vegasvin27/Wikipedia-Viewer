$(document).ready(function () {

    $('#textbox').keypress(function (e) {
        var pageTitle = $('#textbox').val();
        if (e.which == 13) {
            //console.log(pageTitle);
            //$('#testBox').append(pageTitle);
            $.ajax({
                url: "https://en.wikipedia.org/w/api.php?action=opensearch&search="+pageTitle+"&format=json&callback=?",
                dataType: 'jsonp',
                type: 'GET',
                headers: { 'Api-User-Agent': 'Example/1.0' },
                success: function (data) {
                    //$('#testBox').append(data);
                    console.log(data);
                    for(var i = 0; i < data[1].length; i++){
                            console.log(data[1][i]);
                            console.log(data[2][i]);
                            console.log(data[3][i]);                            
                           //$('#searchItem').append(data[i][j]); 
                        
                    }
                    const test1 = data[1][0];
                    const test2 = data[2][0];
                    const test3 = data[3][0];     
                    $('#searchItem').append(test1);
                    $('#searchItem').append(test2);
                    $('#searchItem').append(test3);
                    
                    //const urlLink = data.query.pages[0].fullurl;
                    //console.log(urlLink);
                }
            });
        }
    });



});




//"https://en.wikipedia.org/w/api.php?action=query&titles=Main%20Page&prop=revisions&rvprop=content&format=json"
///w/api.php?action=query&format=json&prop=revisions&titles=Main%20Page&rvprop=content
///w/api.php?action=query&format=json&prop=info&titles=Main%20Page&inprop=url