$("#bttn").click(function () {
    var searchBar = document.getElementById("search-txt").value;
    if (searchBar != "") {
        var searchedword = searchBar.toLowerCase();
        var listWord = searchedword.split(" ")


        if (listWord.length > 1) {
            var newSearchWord = ""
            for (var i = 0; i < listWord.length; i++) {
                if (i < listWord.length - 1) {
                    newSearchWord = newSearchWord + listWord[i] + "-"
                }
                else {
                    newSearchWord = newSearchWord + listWord[i]
                }

                console.log(newSearchWord)
            }

        }
        else {
            var newSearchWord = searchedword
        }
        
        localStorage.setItem("search-word",newSearchWord)
        window.location.href="./afterSearch.html";
    }
    else {
        alert("Hãy nhập từ để tìm kiếm")
    }
    
    
   
});

$( "#search-txt" ).keyup(function() {
    if (event.keyCode === 13) {
        var searchBar = document.getElementById("search-txt").value;
        if (searchBar != "") {
        var searchedword = searchBar.toLowerCase();
        var listWord = searchedword.split(" ")
        if (listWord.length > 1) {
            var newSearchWord = ""
            for (var i = 0; i < listWord.length; i++) {
                if (i < listWord.length - 1) {
                    newSearchWord = newSearchWord + listWord[i] + "-"
                }
                else {
                    newSearchWord = newSearchWord + listWord[i]
                }

                console.log(newSearchWord)
            }
        }
        else {
            var newSearchWord = searchedword
        }

        localStorage.setItem("search-word",newSearchWord)
        window.location.href="./afterSearch.html";
        }
        else {
            alert("Hãy nhập từ để tìm kiếm")
        }
    }
    
});
