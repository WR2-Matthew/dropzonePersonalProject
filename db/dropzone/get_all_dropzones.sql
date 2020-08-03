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

select * from dropzones d
join averages a on a.dzone_id = d.dropzone_id;