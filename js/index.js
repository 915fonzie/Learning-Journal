import { blogsArr, heroArticle } from "../data/data.js"

document.addEventListener('click', function (e) {
    if (e.target.closest('.hero-container')) {
        saveArticleData(heroArticle)
    }
    if (e.target.closest('.article')) {
        findArticleData(e.target.dataset.article)
    }
})

function renderHeroArticle() {
    const heroArticleContainer = document.getElementById('hero-container')

    const { id, title, date, image, paragraph } = heroArticle
    heroArticleContainer.innerHTML = `
        <img 
            src="${image}" class="hero-img" 
            alt="apple laptop on desk with night stand looking out to an evening sky"
            data-article ="${id}"
        >
        <header class="hero-header" data-article ="${id}">
            <h3 class="hero-date" data-article ="${id}">${date}</h3>
            <h1 class="hero-title" data-article ="${id}">${title}</h1>
            <p class="hero-paragraph" data-article ="${id}">
                ${paragraph.split("///")[0]}
            </p>
        </header>
    `
}

function renderArticles() {
    const articlesContainer = document.getElementById("articles-container")
    
    const articles = blogsArr.map(function (article) {
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
    }).join('')
    articlesContainer.innerHTML = articles
}

function findArticleData(id) {
    const selectedArticle = blogsArr.filter(article => article.id === id)
    saveArticleData(selectedArticle[0])
}

function saveArticleData(article) {
    localStorage.setItem('article', JSON.stringify(article))
    openArticlePage()
}

function openArticlePage() {
    window.location = 'article.html'
}

renderHeroArticle()
renderArticles()