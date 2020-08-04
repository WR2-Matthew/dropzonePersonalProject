select * from jumps 
where person_id = $1
order by jump_number asc;