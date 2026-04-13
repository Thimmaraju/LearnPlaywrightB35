const { test } = require('@playwright/test');



for (let i = 1; i <= 5; i++) {


    test("Sample Test Case -"+ i, async () => {
        console.log('Sample Test Case');
    });


}

