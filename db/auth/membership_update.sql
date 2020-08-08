update membership
set card_holder_id = $1, expiration_date = $2, member_since = $3, license_number = $4,
recognitions = $5, awards = $6, recognitions_exp = $7
where card_holder_id = $1;

select * from users u
join membership m on u.user_id = m.card_holder_id
where u.user_id = $1;