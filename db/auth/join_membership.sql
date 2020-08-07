insert into membership (
  card_holder_id,
  expiration_date, 
  member_since, 
  license_number,
  recognitions,
  awards, 
  recognitions_exp
) values (
  $1,
  'N/A',
  'N/A',
  'N/A',
  'N/A',
  'N/A',
  'N/A'
);

select * from users u 
join membership m on u.user_id = m.card_holder_id
where u.user_id = $1;