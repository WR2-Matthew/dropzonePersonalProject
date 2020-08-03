create table averages (
avg_id serial primary key,
overall_avg int,
camping_avg int,
sky_safety_avg int,
inclusion_avg int,
party_avg int,
bunkhouse_avg int,
rental_gear_avg int,
facilities_avg int,
planes_avg int,
landing_area_avg int,
dzone_id int references dropzones(dropzone_id),
rating_id int references ratings(ratings_id)
);