insert into users (
  first_name,
  last_name,
  email,
  password,
  profile_picture
) values (
  $1, $2, $3, $4, 'https://www.kindpng.com/picc/m/21-214439_free-high-quality-person-icon-default-profile-picture.png'
)

returning *;