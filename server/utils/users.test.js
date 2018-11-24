const expect = require('expect');
const {Users} = require('./users');

describe('Users', () => {
var users;

  beforeEach(() => {

    users = new Users();
    users.users = [{
      id :'1',
      name : 'Mike',
      room : 'Node'
    },{
      id :'2',
      name : 'jen',
      room : 'React'
    },{
      id :'3',
      name : 'Hulu',
      room : 'Node'
    }];
  });

  it('should add new user', () => {
    var users = new Users();
    var user = {
      id: '123',
      name : 'Arjun',
      room : 'Chat'
    };
    var resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it('should remove a user', () => {
    var userId = '1';
    var user = users.removeUser(userId);

    expect(user.id).toBe(userId);
    expect(users.users.length).toBe(2);
  });

  it('Should not remove a user', () => {
    var userId = '1000';
    var user = users.removeUser(userId);

    expect(user).toBeFalsy();
    expect(users.users.length).toBe(3);
  });

  it('Should find the user', () => {
    var userId = '2';
    var user = users.getUser(userId);

    expect(user.id).toBe(userId);
  });

  it('Should not find a user', () => {
    var userId = '99';
    var user = users.getUser(userId);

    expect(user).toBeFalsy();
  });

  it('Should get user of node', () => {
    var userList = users.getUserList('Node');

    expect(userList).toEqual(['Mike', 'Hulu']);
  });

  it('Should get user of React', () => {
    var userList = users.getUserList('React');

    expect(userList).toEqual(['jen']);
  });
});
