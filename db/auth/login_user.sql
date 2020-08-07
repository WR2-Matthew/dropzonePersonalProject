select * from users u
join membership m on u.user_id = m.card_holder_id
where u.user_id = $1;