update users
set first_name = $2, last_name = $3, email = $4, profile_picture = $5
where user_id = $1;