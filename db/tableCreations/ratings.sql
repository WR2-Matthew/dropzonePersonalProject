create table ratings (
ratings_id serial primary key,
dz_id int references dropzones(dropzone_id),
overall_rt decimal,
camping_rt decimal,
sky_safety_rt decimal,
inclusion_rt decimal,
party_rt decimal,
bunkhouse_rt decimal,
rental_gear_rt decimal,
facilities_rt decimal,
planes_rt decimal,
landing_area_rt decimal,
dz_id int references dropzones dropzone_id,
user_id int references user user_id
);

