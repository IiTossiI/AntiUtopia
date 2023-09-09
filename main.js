var news = document.querySelector(".news")

fetch("https://antiutopia.glitch.me/latest.news").then(response => {
    if (response.status == 200) {
        response.text().then(data => {
            data = data.split("\n")
            if (typeof data[4] == "undefined") {
        	    data[4] = "no-image.png"
            }
            news.innerHTML = '<h1>' + data[0] + '</h1><h6>' + data[1] + '</h6>' + data[3] + '<h6>' + data[2] + '</h6><img src="' + data[4] + '">'
        })
    } else {
    	news.innerHTML = "<center>Unable to load news</center>"
    }
})
