var searchBar = document.getElementById("search-txt");

function startClick() {
    var searchedword = searchBar.value.toLowerCase();
    var listWord = searchedword.split(" ")
    if (listWord.length > 1) {
        var newSearchWord = ""
        for(var i = 0; i < listWord.length; i ++) {
            if (i < listWord.length-1) {
                newSearchWord = newSearchWord  + listWord[i] + "-"}
            else {
                newSearchWord = newSearchWord  + listWord[i] 
            }

            console.log(newSearchWord)
        }
        
    }
    else {
        var newSearchWord = searchedword
    }
    var btn = document.getElementById("bttn");
    btn.addEventListener('click', startClick);


    var url = "https://api.tracau.vn/WBBcwnwQpV89/s/"+newSearchWord+"/vi";
    // console.log(url);
    
    function sendGetRequest(url, callback) {
        // console.log("wrr");
    
        var request = new XMLHttpRequest();
        
        request.onreadystatechange = function(e) {
            // console.log("wrssssr");
            console.log(e.currentTarget.status);
            if(e.currentTarget && e.currentTarget.readyState == 4 && e.currentTarget.status == 200) {
                console.log("wraaaar");
                callback(JSON.parse(e.currentTarget.responseText));
            };
        };
        request.open("GET", url);
        request.send;
    }
    sendGetRequest(url, function (reponseData) {
        // console.log("DATA RECEIVED!!")
        console.log(reponseData);
    });
};

var btn = document.getElementById("bttn");
btn.addEventListener('click', startClick);


$( "#search-txt" ).keyup(function() {
    alert( "HI");
  });