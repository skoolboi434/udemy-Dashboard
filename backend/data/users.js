import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Travis Davis',
    email: 'admin@email.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true
  },
  {
    name: 'Rick Sanchez',
    email: 'picklerick@email.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true
  },
  {
    name: 'Dwight Shrute',
    email: 'dwight@email.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: false
  }
];

export default users;
