Page({
  /**
   * Page initial data
   */
  data: {
    points: 100, // User's initial points
    rewards: [
      {
        id: 1,
        name: 'Football Jersey',
        image: 'https://example.com/path/to/football_jersey.jpg',
        points: 50
      },
      {
        id: 2,
        name: 'Water Bottle',
        image: 'https://example.com/path/to/water_bottle.jpg',
        points: 20
      },
      {
        id: 3,
        name: 'Training Shoes',
        image: 'https://example.com/path/to/training_shoes.jpg',
        points: 80
      }
      // Add more rewards as needed
    ],
    userStock: {} // Store purchased items as a dictionary with counts
  },

  /**
   * Method to handle reward purchase
   */
  purchaseReward(event) {
    const rewardId = event.currentTarget.dataset.id;
    const reward = this.data.rewards.find(item => item.id === rewardId);
    if (this.data.points >= reward.points) {
      wx.showModal({
        title: 'Confirm Purchase',
        content: `Do you want to purchase ${reward.name} for ${reward.points} points?`,
        success: (res) => {
          if (res.confirm) {
            // Update user stock
            const userStock = {...this.data.userStock};
            if (userStock[rewardId]) {
              userStock[rewardId].count += 1;
            } else {
              userStock[rewardId] = {
                ...reward,
                count: 1
              };
            }

            this.setData({
              points: this.data.points - reward.points,
              userStock: userStock
            });
            wx.showToast({
              title: 'Purchased',
              icon: 'success',
              duration: 1000
            });
          }
        }
      });
    } else {
      wx.showToast({
        title: 'Not Enough Points',
        icon: 'none',
        duration: 1000
      });
      
    }
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad(options) {},

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady() {},

  /**
   * Lifecycle function--Called when page show
   */
  onShow() {},

  /**
   * Lifecycle function--Called when page hide
   */
  onHide() {},

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload() {},

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh() {},

  /**
   * Called when page reach bottom
   */
  onReachBottom() {},

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage() {}
});
