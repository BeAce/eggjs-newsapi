const Service = require('egg').Service;

class NewsService extends Service {
  async list(page = 1) {
    const { apiKey } = this.config;
    const { serverUrl, pageSize } = this.config.news;
    const { data: idList } = await this.ctx.curl(`${serverUrl}/top-headlines?sources=bbc-news&apiKey=${apiKey}`, {
      dataType: 'json'
    });
    return idList.articles;
  }
}

module.exports = NewsService;
