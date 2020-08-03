-- insert into ratings (
--   dz_id,
--   user_id,
--   bunkhouse_rt,
--   camping_rt,
--   facilities_rt,
--   inclusion_rt,
--   landing_area_rt,
--   party_rt,
--   rental_gear_rt,
--   planes_rt,
--   sky_safety_rt,
--   has_rated
-- ) values (
--   $1, 
--   $2,
--   $3,
--   $4,
--   $5,
--   $6,
--   $7,
--   $8,
--   $9,
--   $10,
--   $11,
--   true
-- );

-- WRONG JOIN STATEMENT. I THINK A DIFFERENT TYPE OF JOIN WULD OF FIXED THE ISSUE

-- select d.dropzone_id, d.dz_name, d.creator_id, d.pictures, d.altitude, d.state_located, d.jump_ticket_price, d.town_located, d.dz_name, 
--  avg(r.camping_rt) as camping_rt, 
--  avg(r.sky_safety_rt) as sky_safety_rt,
--  avg(r.inclusion_rt) as inclusion_rt,
--  avg(r.party_rt) as party_rt,
--  avg(r.bunkhouse_rt) as bunkhouse_rt,
--  avg(r.rental_gear_rt) as rental_gear_rt,
--  avg(r.facilities_rt) as facilities_rt,
--  avg(r.planes_rt) as planes_rt,
--  avg(r.landing_area_rt) as landing_area_rt,
-- (avg(r.camping_rt) + avg(r.sky_safety_rt) + avg(r.inclusion_rt) + avg(r.party_rt) + avg(r.bunkhouse_rt) + avg(r.rental_gear_rt) + avg(r.facilities_rt) + avg(r.planes_rt) + avg(r.landing_area_rt)) / 9 as overall_rt,
--  r.dz_id, r.user_id, r.has_rated
--  from dropzones d
--  join ratings r on r.dz_id = d.dropzone_id
-- group by d.dropzone_id, r.dz_id, r.user_id, r.has_rated;


insert into ratings (
  dz_id,
  user_id,
  bunkhouse_rt,
  camping_rt,
  facilities_rt,
  inclusion_rt,
  landing_area_rt,
  party_rt,
  rental_gear_rt,
  planes_rt,
  sky_safety_rt,
  has_rated
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
  $10,
  $11,
  true
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
join averages a on a.dzone_id = d.dropzone_id;




--CAN NOT USE AGGRPGATE FUNCTIONS INSIDE AN UPDATE.

-- update averages a
-- set a.overall_avg = (avg(r.camping_rt) + avg(r.sky_safety_rt) + avg(r.inclusion_rt) + avg(r.party_rt) + avg(r.bunkhouse_rt) + avg(r.rental_gear_rt) + avg(r.facilities_rt) + avg(r.planes_rt) + avg(r.landing_area_rt)) / 9,
-- a.camping_avg = avg(r.camping_rt),
-- a.sky_safety_avg = avg(r.sky_safety_rt),
-- a.inclusion_avg = avg(r.inclusion_rt),
-- a.party_avg = avg(r.party_rt),
-- a.bunkhouse_avg = avg(r.bunkhouse_rt),
-- a.rental_gear_avg = avg(r.rental_gear_rt),
-- a.facilities_avg = avg(facilities_rt),
-- a.planes_avg = avg(planes_rt),
-- a.landing_area_avg = avg(landing_area_rt)
-- from ratings r on r.ratings_id = a.rating_id
-- where r.ratings_id = a.rating_id and a.dzone_id = $1;