class Article {
  constructor(article, summary) {
    this.title = article['response']['content']['webTitle']
    this.body = article['response']['content']['fields']['body']
    this.summary = summary
  }

  readTitle() {
    return this.title;
  }

  readBody() {
    return this.body;
  }

  readSummary() {
    return this.summary.sentences.join(' ');
  }
}

module.exports = Article;
