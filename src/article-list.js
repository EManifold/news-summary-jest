const articleClass = require('./article')
class ArticleList {
  constructor(article, summary) {
    this.articles = []
  }

  add(article, summary) {
    this.articles.push(new articleClass(article, summary))
  }

  showArticles() {
    return this.articles;
  }

  findById() {
    var arr = this.articles.filter(article => article.id === id)
    return arr[0]
  }
}

module.exports = ArticleList;
