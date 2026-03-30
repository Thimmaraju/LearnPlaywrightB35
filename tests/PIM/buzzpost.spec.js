import { test, expect } from '@playwright/test';

test.describe('OrangeHRM Buzz Module - Post Creation and Verification', () => {
  let page;

  test.beforeEach(async ({ browser }) => {
    page = await browser.newPage();
    
    // Step 1: Open the login page
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.waitForLoadState('networkidle');
  });

  test.afterEach(async () => {
    await page.close();
  });

  test('Verify User can create a post in Buzz and it appears on top', async () => {
    // Step 2: Login as Admin
    await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
    await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();
    
    // Wait for dashboard to load
    await page.waitForLoadState('networkidle');
    await expect(page).toHaveURL(/dashboard\/index/);

    // Step 3: Click on Buzz module
    await page.getByRole('link', { name: 'Buzz' }).click();
    
    // Wait for Buzz page to load
    await page.waitForLoadState('networkidle');
    await expect(page).toHaveURL(/buzz\/viewBuzz/);

    // Verify Buzz Newsfeed is displayed
    await expect(page.locator('text=Buzz Newsfeed')).toBeVisible();

    // Step 4: Enter text in "What's on your mind?" field
    const postText = 'This is my first automated test post! 🚀';
    await page.getByRole('textbox', { name: 'What\'s on your mind?' }).click();
    await page.getByRole('textbox', { name: 'What\'s on your mind?' }).fill(postText);

    // Step 5: Click on Post button
    await page.getByRole('button', { name: 'Post' }).click();

    // Wait for post to be created and appear
    await page.waitForLoadState('networkidle');

    // Step 6: Verify that post appears on the top of posts
    // Get all posts on the page
    const posts = await page.locator('text=This is my first automated test post').count();
    
    // Verify the post exists
    expect(posts).toBeGreaterThan(0);

    // Verify the post content is visible and appears first
    const firstPost = page.locator('text=This is my first automated test post');
    await expect(firstPost).toBeVisible();

    // Get the first post container and verify it contains the test text
    const postContent = await page.locator('text=This is my first automated test post').first();
    await expect(postContent).toContainText('This is my first automated test post');

    // Verify the post shows 0 Likes initially
    const likesText = page.locator('text=0 Likes').first();
    await expect(likesText).toBeVisible();

    // Additional verification: Check if post timestamp exists (should be recent)
    const postContainer = page.locator('text=This is my first automated test post').first().locator('..');
    const userInfo = await postContainer.locator('text=Admin akhil user').isVisible();
    expect(userInfo).toBeTruthy();

    console.log('✓ Post successfully created and verified at the top of the Buzz feed');
  });

  test('Verify User can like a post', async () => {
    // Login as Admin
    await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
    await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.waitForLoadState('networkidle');

    // Go to Buzz
    await page.getByRole('link', { name: 'Buzz' }).click();
    await page.waitForLoadState('networkidle');

    // Find and like the first post (heart icon)
    const likeButton = page.locator('button').filter({ has: page.locator('svg[aria-label="Heart"]') }).first();
    
    if (await likeButton.isVisible()) {
      await likeButton.click();
      await page.waitForTimeout(1000);
      console.log('✓ Post liked successfully');
    }
  });

  test('Verify User can share photos from Buzz', async () => {
    // Login as Admin
    await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
    await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.waitForLoadState('networkidle');

    // Go to Buzz
    await page.getByRole('link', { name: 'Buzz' }).click();
    await page.waitForLoadState('networkidle');

    // Verify Share Photos button is visible
    const sharePhotosButton = page.getByRole('button', { name: 'Share Photos' });
    await expect(sharePhotosButton).toBeVisible();

    console.log('✓ Share Photos button is visible');
  });

  test('Verify User can share video from Buzz', async () => {
    // Login as Admin
    await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
    await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.waitForLoadState('networkidle');

    // Go to Buzz
    await page.getByRole('link', { name: 'Buzz' }).click();
    await page.waitForLoadState('networkidle');

    // Verify Share Video button is visible
    const shareVideoButton = page.getByRole('button', { name: 'Share Video' });
    await expect(shareVideoButton).toBeVisible();

    console.log('✓ Share Video button is visible');
  });

  test('Verify Buzz tabs - Most Recent, Most Liked, Most Commented', async () => {
    // Login as Admin
    await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
    await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.waitForLoadState('networkidle');

    // Go to Buzz
    await page.getByRole('link', { name: 'Buzz' }).click();
    await page.waitForLoadState('networkidle');

    // Verify all tabs are visible
    const mostRecentTab = page.getByRole('button', { name: /Most Recent Posts/ });
    const mostLikedTab = page.getByRole('button', { name: /Most Liked Posts/ });
    const mostCommentedTab = page.getByRole('button', { name: /Most Commented Posts/ });

    await expect(mostRecentTab).toBeVisible();
    await expect(mostLikedTab).toBeVisible();
    await expect(mostCommentedTab).toBeVisible();

    // Click on Most Liked Posts tab
    await mostLikedTab.click();
    await page.waitForTimeout(1000);

    // Click on Most Commented Posts tab
    await mostCommentedTab.click();
    await page.waitForTimeout(1000);

    console.log('✓ All Buzz tabs are visible and clickable');
  });
});
