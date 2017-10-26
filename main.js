$(document).ready(function () {

    $('#textbox').keypress(function (e) {
        var pageTitle = $('#textbox').val();
        if (e.which == 13) {
            //console.log(pageTitle);
            //$('#testBox').append(pageTitle);
            $.ajax({
                url: "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + pageTitle + "&format=json&callback=?",
                dataType: 'jsonp',
                type: 'GET',
                headers: { 'Api-User-Agent': 'Example/1.0' },
                success: function (data) {
                    //$('#testBox').append(data);
                    console.log(data);
                    for (var i = 0; i < data[1].length; i++) {
                        // console.log(data[1][i]);
                        // console.log(data[2][i]);
                        // console.log(data[3][i]);
                        $('#searchItem').show();
                        $('#searchItem').append("<div><a target='_blank' href=" + data[3][i] + "><h2>" + data[1][i] + "</h2>" + "<p>" + data[2][i] + "</p></a></div>");

                    }
                    /* const test1 = data[1][0];
                    const test2 = data[2][0];
                    const test3 = data[3][0];     
                    $('#searchItem').append(test1);
                    $('#searchItem').append(test2);
                    $('#searchItem').append(test3); */
                    
                    //const urlLink = data.query.pages[0].fullurl;
                    //console.log(urlLink);
                }
            });
        }
    });
    $( "#clear" ).click(function() {
        $( "a" ).empty();
        $( "p" ).empty();
        $( "a" ).empty();
      });
});




//"https://en.wikipedia.org/w/api.php?action=query&titles=Main%20Page&prop=revisions&rvprop=content&format=json"
