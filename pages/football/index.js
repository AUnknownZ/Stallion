Page({
  data: {
    currentTab: 'news',
    news: [],
    results: [],
    roster: []
  },
  onLoad() {
    // Retrieve news, results, and roster data from local storage
    const news = wx.getStorageSync('newsData') || [];
    const results = wx.getStorageSync('resultsData') || [];
    const roster = wx.getStorageSync('rosterData') || [];

    // Update the page's data
    this.setData({
      news: news,
      results: results,
      roster: roster
    });
  },
  switchTab(e) {
    this.setData({
      currentTab: e.currentTarget.dataset.tab
    });
  },
  viewArticle(e) {
    const url = e.currentTarget.dataset.url;
    wx.navigateTo({
      url: `/pages/webview/webview?url=${encodeURIComponent(url)}`
    });
  },
  calculateStatus(home_score, away_score) {
    if (home_score > away_score) {
      return 'W';
    } else if (home_score === away_score) {
      return 'D';
    } else {
      return 'L';
    }
  },
  calculateStatusColor(home_score, away_score) {
    if (home_score > away_score) {
      return 'green';
    } else if (home_score === away_score) {
      return 'orange';
    } else {
      return 'red';
    }
  }
});
