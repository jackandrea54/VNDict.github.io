document.addEventListener("DOMContentLoaded",async ()=>{
    let dataGet = {}
    let searchedword = localStorage.getItem("search-word")
    var api_url = "https://cors-anywhere.herokuapp.com/https://api.tracau.vn/WBBcwnwQpV89/s/" + searchedword + "/vi";
    console.log(searchedword)
    console.log(api_url)
    await fetch(api_url).then(async (data)=>{
        dataGet = await data.json()
        console.log(dataGet)
        console.log(searchedword)
        // console.log(dataGet.tratu);
        var res= dataGet.tratu[0].fields.fulltext;
        var word =  dataGet.tratu[0].fields.word;
        var word = word.toUpperCase();
        $("#result").append(res);
        var Noun = document.getElementById("vv").getElementsByClassName("dict--content");
        $("#content").append(Noun);
        $("#word").append(word)
        for(i = 0; i < 5; i+=1 ) {
            var sentences = dataGet.sentences[i].fields.vi;
            $("#example").append("<div style='margin-top:10px'>"+sentences+"</div>");
        }
        console.log(Noun)
        console.log("okie")
    }).catch(err => {
        var wrongsearchedword = searchedword.toUpperCase();
        console.log(wrongsearchedword)
        console.log("wrong")
        $("#content").append("<div>Từ này hiện chúng tôi không hỗ trợ, xin hãy nhập từ khác.</div>")
        $("#word").append("<div>"+wrongsearchedword+"</div>")
        
        
    })
    // console.log(searchedword)
    // console.log(typeof(dataGet));


    $("#bttn").click(function () {
        // let newSearchWord = ""
        var searchBar = document.getElementById("search-txt").value;
        console.log(searchBar)
        if (searchBar != "") {
            var searchedword = searchBar.toLowerCase();
            var listWord = searchedword.split(" ");
            if (listWord.length > 1) {
                // var newSearchWord = ""
                for (var i = 0; i < listWord.length; i++) {
                    if (i < listWord.length - 1) {
                        newSearchWord = newSearchWord + listWord[i] + "-"
                    }
                    else {
                        newSearchWord = newSearchWord + listWord[i]
                    }
                    console.log(newSearchWord)
                };
            localStorage.setItem("search-word", newSearchWord);
            window.location.href="./afterSearch.html";  
            };    

            if (listWord.length == 1) {
               var newSearchWord = searchedword
            };
            localStorage.setItem("search-word", newSearchWord);
            window.location.href="./afterSearch.html";  
        }
        else {
            alert("Hãy nhập từ để tìm kiếm")
        }  
    })
});

$( "#search-txt" ).keyup(function() {
    if (event.keyCode === 13) {
        var searchBar = document.getElementById("search-txt").value;
        if (searchBar != "") {
            var searchedword = searchBar.toLowerCase();
            var listWord = searchedword.split(" ");
            if (listWord.length > 1) {
                for (var i = 0; i < listWord.length; i++) {
                    if (i < listWord.length - 1) {
                        newSearchWord = newSearchWord + listWord[i] + "-"
                    }
                    else {
                        newSearchWord = newSearchWord + listWord[i]
                    }
                    console.log(newSearchWord)
                };
            localStorage.setItem("search-word", newSearchWord);
            window.location.href="./afterSearch.html";  
            };    

            if (listWord.length == 1) {
               var newSearchWord = searchedword
            };
            localStorage.setItem("search-word", newSearchWord);
            window.location.href="./afterSearch.html";  
        }
        else {
            alert("Hãy nhập từ để tìm kiếm")
        }  
    }
    
});