update jumps
set date = $1, dropzone = $2, discipline = $3, jump_details = $4, plane = $5
where jump_id = $6;

select * from jumps 
where person_id = $7
order by jump_number asc;