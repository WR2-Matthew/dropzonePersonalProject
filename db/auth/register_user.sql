insert into users (
  first_name,
  last_name,
  email,
  password
) values (
  $1, $2, $3, $4
)

returning *;