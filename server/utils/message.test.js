var expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var from = 'jen';
    var text = 'hello';
    var message = generateMessage(from, text);

    expect(message.createdAt).not.toBeNaN();
    expect(message).toMatchObject({
      from,
      text
    });
  });
});
