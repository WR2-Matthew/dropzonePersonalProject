insert into jumps (
  person_id,
  date,
  dropzone,
  discipline,
  image,
  plane,
  jump_details,
  jump_number
) values (
  $1, $2, $3, $4, $5, $6, $7, $8
);

select * from jumps
where person_id = $1;