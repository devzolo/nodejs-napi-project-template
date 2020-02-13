import path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '.env.test') });

describe('Example Test', () => {
  it('basic test', () => {
    expect(1).not.toBe(1);
  });
});
