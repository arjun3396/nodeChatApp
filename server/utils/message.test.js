var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

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

describe('generateLocationMessage', () => {
  it('Should generate correct location object', () => {
      var longitude = 19;
      var latitude = 15;
      var from = 'deb';

      var url = 'https://www.google.com/maps?q=15,19'
      var message = generateLocationMessage(from, latitude, longitude);

      expect(message.createdAt).not.toBeNaN();
      expect(message).toMatchObject({
        from,
        url
      });
  });
});
