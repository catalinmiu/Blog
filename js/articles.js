function Article(title, content, createdAt, createdBy) {
    this.title = title;
    this.content = content;
    this.createdAt = createdAt;
    this.createdBy = createdBy;
}

function getAllArticles() {
    var allArticles = [];
    const url='http://localhost:8081/getAllArticles';
    $.ajax({
        dataType: "json",
        url: url,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        success: function (articles) {
            for(var i=0; i<articles.length; i++) {
                var title = articles[i].title;
                var content = articles[i].content;
                var createdAt = articles[i].createdAt;
                var createdBy = articles[i].createdBy;
                allArticles.push(new Article(title, content, createdAt, createdBy));
            }
            let articlesSize = articles.length;
            for(var i = 0; i < articlesSize; i++) {
                var currentArticle = articles.pop();
                var node = document.getElementById("articles");
                node.innerHTML += "<div class=\"article\">\n" +
                    "            <h1 class=\"title\"><a href=\"article1.html\">" + currentArticle.title + "</a></h1>\n" +
                    "            <div class=\"content\">\n" +
                    "                <p>\n" +
                    "                    " + currentArticle.content +
                    "                </p>\n" +
                    "            </div>\n" +
                    "        </div>\n" +
                    "        <hr/>";
            }
        }
    });
}

$(document).ready(function() {
    getAllArticles();
    setTimeout(function(){ alert("Sesiunea a expirat"); }, 10000);
});
