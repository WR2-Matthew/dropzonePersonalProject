const bcrypt = require('bcryptjs')

module.exports = {
  register: async (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    const db = req.app.get('db');
  },

  login: async (req, res) => {
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

    res.status(200).send(req.session.user);
  }
}