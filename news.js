var news = document.querySelector("#all-news")

function load_news(num) {
    fetch("https://AntiUtopia.glitch.me/news/" + num + ".news").then(response => {
        if (response.status == 200) {
            response.text().then(data => {
            	data = data.split("\n")
            	if (typeof data[4] == "undefined") {
            	    data[4] = "no-image.png"
            	}
                news.innerHTML = '<div class="news"><h1>' + data[0] + '</h1><h6>' + data[1] + '</h6>' + data[3] + '<h6>' + data[2] + '</h6><img src="' + data[4] + '"></div>' + news.innerHTML
                load_news(num + 1)
            })
        } else {
        
        }
    })
}

load_news(1)
