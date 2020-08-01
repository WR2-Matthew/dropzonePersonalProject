const bcrypt = require('bcryptjs')

module.exports = {
  register: async (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    const db = req.app.get('db');

    const userCheck = await db.auth.check_email_exists(email);
    if (userCheck[0]) {
      return res.status(409).send('Email already assigned to an account.')
    }

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    const registerUser = await db.auth.register_user(firstName, lastName, email, hash);
    const user = registerUser[0]
    console.log(user)
    req.session.user = {
      id: user.user_id,
      admin: user.is_admin,
      superAdmin: user.super_admin,
      email: user.email,
      firstName: user.first_name,
      lastName: user.last_name,
      member: user.uspa_card
    }

    res.status(200).send(req.session.user);
  },

  login: async (req, res) => {
    // console.log('hit')
    const { email, password } = req.body;
    const db = req.app.get('db')

    const userCheck = await db.auth.check_email_exists(email);
    const user = userCheck[0]
    if (!user) {
      res.status(404).send('Username does not exist')
    };

    const passCheck = bcrypt.compareSync(password, user.password);
    if (!passCheck) {
      res.status(403).send('Password does not match')
    };

    req.session.user = {
      id: user.user_id,
      admin: user.is_admin,
      superAdmin: user.super_admin,
      email: user.email,
      firstName: user.first_name,
      lastName: user.last_name,
      member: user.uspa_card
    };

    // console.log(req.session.user)

    res.status(200).send(req.session.user);
  },

  session: (req, res) => {
    if (req.session.user) {
      res.status(200).send(req.session.user)
    }
  },

  logout: (req, res) => {
    req.session.destroy()
    res.status(200).send('Successfully Logged Out!')
  }
};