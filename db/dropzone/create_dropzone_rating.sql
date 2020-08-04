insert into averages (
  dzone_id,
  camping_avg,
  sky_safety_avg,
  inclusion_avg,
  party_avg,
  bunkhouse_avg,
  rental_gear_avg,
  facilities_avg,
  planes_avg,
  landing_area_avg,
  overall_avg
) values (
  $1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
);

insert into ratings (
  dz_id,
  camping_rt,
  sky_safety_rt,
  inclusion_rt,
  party_rt,
  bunkhouse_rt,
  rental_gear_rt,
  facilities_rt,
  planes_rt,
  landing_area_rt
) values (
  $1,
  $2,
  $3,
  $4,
  $5,
  $6,
  $7,
  $8,
  $9,
  $10
);



update averages 
 set camping_avg = (select avg(camping_rt) from ratings where dz_id = $1),
 sky_safety_avg = (select avg(sky_safety_rt) from ratings where dz_id = $1),
 inclusion_avg = (select avg(inclusion_rt) from ratings where dz_id = $1),
 party_avg = (select avg(party_rt) from ratings where dz_id = $1),
 bunkhouse_avg = (select avg(bunkhouse_rt) from ratings where dz_id = $1),
 rental_gear_avg = (select avg(rental_gear_rt) from ratings where dz_id = $1),
 facilities_avg = (select avg(facilities_rt) from ratings where dz_id = $1),
 planes_avg = (select avg(planes_rt) from ratings where dz_id = $1),
 landing_area_avg = (select avg(landing_area_rt) from ratings where dz_id = $1),
 overall_avg = (select (avg(camping_rt) + avg(sky_safety_rt) + avg(inclusion_rt) + avg(party_rt) + avg(bunkhouse_rt) + avg(rental_gear_rt) + avg(facilities_rt) + avg(planes_rt) + avg(landing_area_rt)) / 9 from ratings where dz_id = $1 )
 where dzone_id = $1;

select * from dropzones d
join averages a on a.dzone_id = d.dropzone_id
order by d.dz_name;
