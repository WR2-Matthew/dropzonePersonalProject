insert into jumps (
  person_id,
  date,
  dropzone,
  discipline,
  image,
  plane,
  jump_details
) values (
  $1, $2, $3, $4, $5, $6, $7
);

returning *;