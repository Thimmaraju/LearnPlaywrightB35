/**
 * Test Data Generator Utility
 * Generates random test data for automation testing
 */

const firstNames = ['John', 'Jane', 'Michael', 'Sarah', 'David', 'Emily', 'Robert', 'Lisa'];
const lastNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis'];
const departments = ['HR', 'IT', 'Sales', 'Marketing', 'Finance', 'Operations'];
const jobTitles = ['Manager', 'Engineer', 'Analyst', 'Specialist', 'Director', 'Coordinator'];

/**
 * Generate a random string of specified length
 * @param {number} length - Length of the string
 * @returns {string} Random alphanumeric string
 */
function generateRandomString(length = 8) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}

/**
 * Generate a random email address
 * @returns {string} Random email
 */
function generateRandomEmail() {
    return `user${Math.floor(Math.random() * 10000)}@testmail.com`;
}

/**
 * Generate random employee data
 * @returns {object} Employee object with firstname, lastname, email
 */
function generateEmployeeData() {
    return {
        firstname: firstNames[Math.floor(Math.random() * firstNames.length)],
        lastname: lastNames[Math.floor(Math.random() * lastNames.length)],
        email: generateRandomEmail(),
        department: departments[Math.floor(Math.random() * departments.length)],
        jobTitle: jobTitles[Math.floor(Math.random() * jobTitles.length)]
    };
}

/**
 * Generate random login credentials
 * @returns {object} Login object with username and password
 */
function generateLoginCredentials() {
    return {
        username: `user${Math.floor(Math.random() * 10000)}`,
        password: generateRandomString(10)
    };
}

/**
 * Generate random Indian phone number
 * @returns {string} Phone number in format +91-XXXXXXXXXX
 */
function generatePhoneNumber() {
    // Indian mobile numbers start with 6-9 and are followed by 9 more digits
    const firstDigit = Math.floor(Math.random() * 4) + 6; // 6-9
    let phoneNumber = firstDigit.toString();
    
    for (let i = 0; i < 9; i++) {
        phoneNumber += Math.floor(Math.random() * 10).toString();
    }
    
    return `${phoneNumber}`;
}

/**
 * Generate random date in the past
 * @param {number} daysBack - Number of days in the past
 * @returns {string} Date in YYYY-MM-DD format
 */
function generateRandomDate(daysBack = 365) {
    const date = new Date();
    date.setDate(date.getDate() - Math.floor(Math.random() * daysBack));
    return date.toISOString().split('T')[0];
}

/**
 * Generate random salary
 * @param {number} min - Minimum salary
 * @param {number} max - Maximum salary
 * @returns {number} Random salary between min and max
 */
function generateRandomSalary(min = 30000, max = 150000) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = {
    generateRandomString,
    generateRandomEmail,
    generateEmployeeData,
    generateLoginCredentials,
    generatePhoneNumber,
    generateRandomDate,
    generateRandomSalary
};
