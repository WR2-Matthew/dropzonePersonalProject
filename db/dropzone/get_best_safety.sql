select * from dropzones d
join averages a on a.dzone_id = d.dropzone_id
where a.sky_safety_avg > 3
order by d.dz_name;