Page({
  data: {
    sports: ['Football', 'Basketball', 'Baseball'],
    currentSport: 'Football',
    formTypes: ['News', 'Results', 'Roster'],
    currentForm: 'News',
    newsImage: '',
    news: [],
    results: [],
    roster: []
  },
  onSportChange(e) {
    this.setData({
      currentSport: this.data.sports[e.detail.value]
    });
  },
  onFormChange(e) {
    this.setData({
      currentForm: this.data.formTypes[e.detail.value]
    });
  },
  chooseImage() {
    wx.chooseImage({
      count: 1,
      sizeType: ['compressed'],
      sourceType: ['album', 'camera'],
      success: (res) => {
        const tempFilePath = res.tempFilePaths[0];
        this.setData({
          newsImage: tempFilePath
        });
      },
      fail: (err) => {
        console.log('Image selection failed', err);
      }
    });
  },
  submitNews(e) {
    const { title, description, date, url } = e.detail.value;
    const newNews = {
      id: this.data.news.length + 1,
      title,
      description,
      date,
      url,
      image: this.data.newsImage,
      sport: this.data.currentSport
    };

    // Retrieve existing news data from local storage
    const existingNews = wx.getStorageSync('newsData') || [];

    // Append new news to existing news data
    const updatedNews = [...existingNews, newNews];

    // Update the admin page's news data and clear the image
    this.setData({
      news: updatedNews,
      newsImage: ''
    });

    // Store the updated news data in local storage
    wx.setStorageSync('newsData', updatedNews);
    console.log('News submitted:', newNews);
  },
  submitResult(e) {
    const { date, home, away, home_score, away_score } = e.detail.value;
    const newResult = {
      id: this.data.results.length + 1,
      date,
      home,
      away,
      home_score: parseInt(home_score, 10),
      away_score: parseInt(away_score, 10),
      sport: this.data.currentSport
    };

    // Retrieve existing results data from local storage
    const existingResults = wx.getStorageSync('resultsData') || [];

    // Append new result to existing results data
    const updatedResults = [...existingResults, newResult];

    // Update the admin page's results data
    this.setData({
      results: updatedResults
    });

    // Store the updated results data in local storage
    wx.setStorageSync('resultsData', updatedResults);
    console.log('Result submitted:', newResult);
  },
  submitRoster(e) {
    const { name, number } = e.detail.value;
    const newPlayer = {
      id: this.data.roster.length + 1,
      name,
      number: parseInt(number, 10),
      sport: this.data.currentSport
    };

    // Retrieve existing roster data from local storage
    const existingRoster = wx.getStorageSync('rosterData') || [];

    // Append new player to existing roster data
    const updatedRoster = [...existingRoster, newPlayer];

    // Update the admin page's roster data
    this.setData({
      roster: updatedRoster
    });

    // Store the updated roster data in local storage
    wx.setStorageSync('rosterData', updatedRoster);
    console.log('Roster submitted:', newPlayer);
  }
});
