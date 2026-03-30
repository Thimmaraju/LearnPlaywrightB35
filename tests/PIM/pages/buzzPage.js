// buzzPage.js - Page Object Model for Buzz Module
export class BuzzPage {
  constructor(page) {
    this.page = page;
    this.buzzUrl = 'https://opensource-demo.orangehrmlive.com/web/index.php/buzz/viewBuzz';
    
    // Element locators
    this.whatsonmindTextbox = this.page.getByRole('textbox', { name: 'What\'s on your mind?' });
    this.postButton = this.page.getByRole('button', { name: 'Post' });
    this.sharePhotosButton = this.page.getByRole('button', { name: 'Share Photos' });
    this.shareVideoButton = this.page.getByRole('button', { name: 'Share Video' });
    this.mostRecentTab = this.page.getByRole('button', { name: /Most Recent Posts/ });
    this.mostLikedTab = this.page.getByRole('button', { name: /Most Liked Posts/ });
    this.mostCommentedTab = this.page.getByRole('button', { name: /Most Commented Posts/ });
    this.buzzNewsfeedHeading = this.page.locator('text=Buzz Newsfeed');
  }

  async navigateToBuzz() {
    await this.page.getByRole('link', { name: 'Buzz' }).click();
    await this.page.waitForLoadState('networkidle');
  }

  async isBuzzPageDisplayed() {
    await this.page.waitForURL('**/buzz/viewBuzz');
    return await this.buzzNewsfeedHeading.isVisible();
  }

  async createPost(postText) {
    await this.whatsonmindTextbox.click();
    await this.whatsonmindTextbox.fill(postText);
    await this.postButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  async verifyPostExists(postText) {
    const postLocator = this.page.locator(`text=${postText}`);
    return await postLocator.isVisible();
  }

  async getFirstPostText() {
    return await this.page.locator('text=This is my first automated test post').first().textContent();
  }

  async clickSharePhotos() {
    await this.sharePhotosButton.click();
  }

  async clickShareVideo() {
    await this.shareVideoButton.click();
  }

  async clickMostRecentTab() {
    await this.mostRecentTab.click();
    await this.page.waitForTimeout(500);
  }

  async clickMostLikedTab() {
    await this.mostLikedTab.click();
    await this.page.waitForTimeout(500);
  }

  async clickMostCommentedTab() {
    await this.mostCommentedTab.click();
    await this.page.waitForTimeout(500);
  }

  async likeFirstPost() {
    const likeButton = this.page.locator('button').filter({ has: this.page.locator('svg[aria-label="Heart"]') }).first();
    if (await likeButton.isVisible()) {
      await likeButton.click();
      await this.page.waitForTimeout(1000);
      return true;
    }
    return false;
  }

  async getPostCount() {
    const posts = await this.page.locator('text=This is my first automated test post').count();
    return posts;
  }

  async verifyPostAppearsonTop() {
    // Get first post container
    const firstPostContent = this.page.locator('text=This is my first automated test post').first();
    return await firstPostContent.isVisible();
  }
}
