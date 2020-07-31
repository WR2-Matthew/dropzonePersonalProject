insert into dropzones (
  creator_id,
  dz_name,
  address,
  town_located,
  state_located,
  altitude,
  jump_ticket_price,
  pictures
) values (
  $1,
  $2,
  $3,
  $4,
  $5,
  $6,
  $7,
  $8
)

returning dropzone_id;