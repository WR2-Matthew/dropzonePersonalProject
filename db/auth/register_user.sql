insert into users (
  first_name,
  last_name,
  email,
  password,
  profile_picture
) values (
  $1, $2, $3, $4, $5
)

returning *;