const bcrypt = require('bcryptjs')

module.exports = {
  register: async (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    const db = req.app.get('db');
    const profilePic = 'https://www.kindpng.com/picc/m/21-214439_free-high-quality-person-icon-default-profile-picture.png'

    const userCheck = await db.auth.check_email_exists(email);
    if (userCheck[0]) {
      return res.status(409).send('Email already assigned to an account.')
    }

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    const registerUser = await db.auth.register_user(firstName, lastName, email, hash, profilePic);
    const newUser = registerUser[0]
    // console.log(newUser, 'new')
    const join = await db.auth.join_membership(newUser.user_id)
    const user = join[0]
    // console.log(user, 'user')

    req.session.user = {
      id: user.user_id,
      admin: user.is_admin,
      superAdmin: user.super_admin,
      email: user.email,
      firstName: user.first_name,
      lastName: user.last_name,
      member: user.uspa_card,
      profilePicture: user.profile_picture,
      hasRated: user.has_rated,
      expirationDate: user.expiration_date,
      memberSince: user.member_since,
      licenseNumber: user.license_number,
      recognitions: user.recognitions,
      awards: user.awards,
      memberNumber: user.member_number,
      recExp: user.recognitions_exp
    }
    // console.log(req.session.user)
    res.status(200).send(req.session.user);
  },

  login: async (req, res) => {
    console.log('hit')
    const { email, password } = req.body;
    const db = req.app.get('db')

    const userCheck = await db.auth.check_email_exists(email);
    const oldUser = userCheck[0]
    // console.log(oldUser, 'old')
    if (!oldUser) {
      res.status(404).send('Email does not exist')
    };

    const passCheck = bcrypt.compareSync(password, oldUser.password);
    if (!passCheck) {
      res.status(403).send('Password does not match')
    };

    const join = await db.auth.login_user(oldUser.user_id);
    const user = join[0];
    // console.log(user)
    req.session.user = {
      id: user.user_id,
      admin: user.is_admin,
      superAdmin: user.super_admin,
      email: user.email,
      firstName: user.first_name,
      lastName: user.last_name,
      member: user.uspa_card,
      profilePicture: user.profile_picture,
      hasRated: user.has_rated,
      expirationDate: user.expiration_date,
      memberSince: user.member_since,
      licenseNumber: user.license_number,
      recognitions: user.recognitions,
      awards: user.awards,
      memberNumber: user.member_number,
      recExp: user.recognitions_exp
    };

    // console.log(req.session.user)

    res.status(200).send(req.session.user);
  },

  session: (req, res) => {
    if (req.session.user) {
      // console.log(req.session.user, 'hit')
      res.status(200).send(req.session.user)
    }
  },

  logout: (req, res) => {
    req.session.destroy()
    res.status(200).send('Successfully Logged Out!')
  },

  editAccount: async (req, res) => {
    const db = req.app.get('db');
    const { fName, lName, email, photo, expiration, memberSince, licenseNumber, recognitions, awards, recExpiration } = req.body;
    const { id } = req.params;

    const update = await db.auth.update_account(id, fName, lName, email, photo);
    const membership = await db.auth.membership_update(id, expiration, memberSince, licenseNumber, recognitions, awards, recExpiration)
    // console.log(membership)
    res.status(200).send(membership[0]);
  }
};