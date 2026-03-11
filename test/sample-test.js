// Sample test file
const assert = require('assert');

describe('Sample Test Suite', () => {
  it('should pass basic assertion', () => {
    assert.strictEqual(1 + 1, 2);
  });

  it('should handle string operations', () => {
    const testString = 'Hello World';
    assert.strictEqual(testString.toLowerCase(), 'hello world');
  });
});
