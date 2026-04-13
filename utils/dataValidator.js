/**
 * Data Validation Utility
 * Validates test data before using in tests
 */

/**
 * Validate email format
 * @param {string} email - Email to validate
 * @returns {boolean} True if valid email
 */
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Validate phone number format (XXX-XXX-XXXX)
 * @param {string} phone - Phone number to validate
 * @returns {boolean} True if valid phone
 */
function isValidPhone(phone) {
    const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
    return phoneRegex.test(phone);
}

/**
 * Validate username (alphanumeric, 3-20 characters)
 * @param {string} username - Username to validate
 * @returns {boolean} True if valid username
 */
function isValidUsername(username) {
    const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/;
    return usernameRegex.test(username);
}

/**
 * Validate password strength
 * @param {string} password - Password to validate
 * @returns {object} Object with isValid and strength level
 */
function validatePasswordStrength(password) {
    let strength = 'weak';
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSpecialChars = /[!@#$%^&*]/.test(password);
    
    if (password.length < 8) {
        return { isValid: false, strength: 'too_short' };
    }
    
    const criteriaCount = [hasUppercase, hasLowercase, hasNumbers, hasSpecialChars].filter(Boolean).length;
    
    if (criteriaCount === 1) strength = 'weak';
    else if (criteriaCount === 2) strength = 'fair';
    else if (criteriaCount === 3) strength = 'good';
    else if (criteriaCount === 4) strength = 'strong';
    
    return { isValid: true, strength };
}

/**
 * Validate required fields in object
 * @param {object} obj - Object to validate
 * @param {array} requiredFields - Array of required field names
 * @returns {object} Object with isValid and missing fields
 */
function validateRequiredFields(obj, requiredFields) {
    const missingFields = [];
    requiredFields.forEach(field => {
        if (!obj.hasOwnProperty(field) || obj[field] === null || obj[field] === '') {
            missingFields.push(field);
        }
    });
    return {
        isValid: missingFields.length === 0,
        missingFields
    };
}

/**
 * Validate data types
 * @param {object} obj - Object to validate
 * @param {object} schema - Schema with field names and expected types
 * @returns {boolean} True if all types match
 */
function validateDataTypes(obj, schema) {
    for (const field in schema) {
        const expectedType = schema[field];
        const actualType = typeof obj[field];
        if (actualType !== expectedType) {
            console.error(`Field ${field}: expected ${expectedType}, got ${actualType}`);
            return false;
        }
    }
    return true;
}

/**
 * Validate employee data
 * @param {object} employeeData - Employee object to validate
 * @returns {object} Validation result with isValid and errors
 */
function validateEmployeeData(employeeData) {
    const errors = [];
    
    if (!employeeData.firstname || employeeData.firstname.trim() === '') {
        errors.push('firstname is required');
    }
    if (!employeeData.lastname || employeeData.lastname.trim() === '') {
        errors.push('lastname is required');
    }
    if (employeeData.email && !isValidEmail(employeeData.email)) {
        errors.push('email format is invalid');
    }
    if (employeeData.phone && !isValidPhone(employeeData.phone)) {
        errors.push('phone format is invalid');
    }
    
    return {
        isValid: errors.length === 0,
        errors
    };
}

/**
 * Validate login credentials
 * @param {object} credentials - Login object with username and password
 * @returns {object} Validation result with isValid and errors
 */
function validateLoginCredentials(credentials) {
    const errors = [];
    
    if (!credentials.username || credentials.username.trim() === '') {
        errors.push('username is required');
    } else if (!isValidUsername(credentials.username)) {
        errors.push('username format is invalid');
    }
    
    if (!credentials.password || credentials.password.trim() === '') {
        errors.push('password is required');
    } else if (credentials.password.length < 6) {
        errors.push('password must be at least 6 characters');
    }
    
    return {
        isValid: errors.length === 0,
        errors
    };
}

module.exports = {
    isValidEmail,
    isValidPhone,
    isValidUsername,
    validatePasswordStrength,
    validateRequiredFields,
    validateDataTypes,
    validateEmployeeData,
    validateLoginCredentials
};
