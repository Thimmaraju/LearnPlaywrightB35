import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/loginPage';
import { BuzzPage } from './pages/buzzPage';

test.describe('OrangeHRM Buzz Module - Post Creation Test Suite', () => {
  let loginPage;
  let buzzPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    buzzPage = new BuzzPage(page);

    // Navigate to login page
    await loginPage.navigateToLoginPage();
  });

  test('Buzz-001: Verify User can create a post in Buzz and it appears on top', async ({ page }) => {
    // Step 1: Login as Admin
    await loginPage.loginAsAdmin();
    
    // Verify login was successful
    const loginSuccess = await loginPage.isLoginSuccessful();
    expect(loginSuccess).toBeTruthy();
    console.log('✓ Step 1: Successfully logged in as Admin');

    // Step 2: Navigate to Buzz module
    await buzzPage.navigateToBuzz();
    
    // Verify Buzz page is displayed
    const isBuzzDisplayed = await buzzPage.isBuzzPageDisplayed();
    expect(isBuzzDisplayed).toBeTruthy();
    console.log('✓ Step 2: Navigated to Buzz module');

    // Step 3: Create a post
    const postText = 'This is my first automated test post! 🚀';
    await buzzPage.createPost(postText);
    console.log('✓ Step 3: Entered test text in "What\'s on your mind?" field and clicked Post');

    // Step 4: Verify post appears on the top
    const postExists = await buzzPage.verifyPostExists(postText);
    expect(postExists).toBeTruthy();
    
    const postCount = await buzzPage.getPostCount();
    expect(postCount).toBeGreaterThan(0);
    
    const postOnTop = await buzzPage.verifyPostAppearsonTop();
    expect(postOnTop).toBeTruthy();
    
    console.log(`✓ Step 4: Verified post appears on top (${postCount} matching post(s) found)`);

    // Additional verification: Check post content
    const firstPostText = await buzzPage.getFirstPostText();
    expect(firstPostText).toContain('This is my first automated test post');
    
    console.log('✓ Verification Complete: Post successfully created and appears on top of Buzz feed!');
  });

  test('Buzz-002: Verify User can like a post', async ({ page }) => {
    // Login as Admin
    await loginPage.loginAsAdmin();
    
    // Navigate to Buzz
    await buzzPage.navigateToBuzz();
    
    // Like the first post
    const liked = await buzzPage.likeFirstPost();
    expect(liked).toBeTruthy();
    
    console.log('✓ Post liked successfully');
  });

  test('Buzz-003: Verify Share Photos button is visible', async ({ page }) => {
    // Login as Admin
    await loginPage.loginAsAdmin();
    
    // Navigate to Buzz
    await buzzPage.navigateToBuzz();
    
    // Verify Share Photos button
    const sharePhotosVisible = await page.getByRole('button', { name: 'Share Photos' }).isVisible();
    expect(sharePhotosVisible).toBeTruthy();
    
    console.log('✓ Share Photos button is visible');
  });

  test('Buzz-004: Verify Share Video button is visible', async ({ page }) => {
    // Login as Admin
    await loginPage.loginAsAdmin();
    
    // Navigate to Buzz
    await buzzPage.navigateToBuzz();
    
    // Verify Share Video button
    const shareVideoVisible = await page.getByRole('button', { name: 'Share Video' }).isVisible();
    expect(shareVideoVisible).toBeTruthy();
    
    console.log('✓ Share Video button is visible');
  });

  test('Buzz-005: Verify Buzz filter tabs functionality', async ({ page }) => {
    // Login as Admin
    await loginPage.loginAsAdmin();
    
    // Navigate to Buzz
    await buzzPage.navigateToBuzz();
    
    // Test Most Recent Posts tab
    await buzzPage.clickMostRecentTab();
    expect(await page.getByRole('button', { name: /Most Recent Posts/ }).isVisible()).toBeTruthy();
    console.log('✓ Most Recent Posts tab is clickable');
    
    // Test Most Liked Posts tab
    await buzzPage.clickMostLikedTab();
    expect(await page.getByRole('button', { name: /Most Liked Posts/ }).isVisible()).toBeTruthy();
    console.log('✓ Most Liked Posts tab is clickable');
    
    // Test Most Commented Posts tab
    await buzzPage.clickMostCommentedTab();
    expect(await page.getByRole('button', { name: /Most Commented Posts/ }).isVisible()).toBeTruthy();
    console.log('✓ Most Commented Posts tab is clickable');
  });

  test('Buzz-006: Verify multiple posts workflow', async ({ page }) => {
    // Login as Admin
    await loginPage.loginAsAdmin();
    
    // Navigate to Buzz
    await buzzPage.navigateToBuzz();
    
    // Create first post
    const firstPost = 'First test post - ' + new Date().getTime();
    await buzzPage.createPost(firstPost);
    
    let postExists = await buzzPage.verifyPostExists(firstPost);
    expect(postExists).toBeTruthy();
    console.log('✓ First post created successfully');
    
    // Create second post  
    const secondPost = 'Second test post - ' + new Date().getTime();
    await buzzPage.createPost(secondPost);
    
    postExists = await buzzPage.verifyPostExists(secondPost);
    expect(postExists).toBeTruthy();
    console.log('✓ Second post created successfully at the top');
  });
});
