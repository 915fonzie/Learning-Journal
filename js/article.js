import { blogsArr } from "../data/data.js";

document.addEventListener("click", e => {
  if (e.target.closest(".article")) {
    findArticleData(e.target.dataset.article)
  }
})

function renderMainArticle() {
    const blogContainer = document.getElementById('blog-container')

    const { date, title, image, paragraph } = JSON.parse(localStorage.getItem('article'))
    
    blogContainer.innerHTML = `
        <div>
            <h3>${date}</h3>
            <h1>${title}</h1>
            <p>
                ${paragraph.split('///')[0]}
            </p>
        </div>
        <img src="${image}">
        <div>
            ${paragraph.split('///')[1]}
        </div>
    `
}

function renderArticles() {
    const articlesContainer = document.getElementById("articles-container")
    
    //creating array to hold the top 3 articles in data that doesn't include the selected array
    const shortenedBlogsArr = blogsArr.filter(article => {
        return !(article.title === JSON.parse(localStorage.getItem('article')).title)
    }).slice(0, 3)
    
    const recentArticles = shortenedBlogsArr
        .map(article => {
            const { id, title, date, image, paragraph } = article
            return `
                    <div class="article" data-article="${id}">
                        <img class="article-img" src="${image}" alt="${title} image" data-article ="${id}">
                        <div class="caption" data-article ="${id}">
                            <h3 data-article ="${id}">${date}</h3>
                            <h2 data-article ="${id}">${title}</h2>
                            <p data-article ="${id}">${paragraph.split("///")[0]}</p>
                        </div>
                    </div>
                    `
        }).join("")
    
    articlesContainer.innerHTML = recentArticles
}

function findArticleData(id) {
  const selectedArticle = blogsArr.filter((article) => article.id === id)
  saveArticleData(selectedArticle[0])
}

function saveArticleData(article) {
  localStorage.setItem("article", JSON.stringify(article))
  openArticlePage()
}

function openArticlePage() {
  window.location = "article.html"
}

renderMainArticle()
renderArticles()