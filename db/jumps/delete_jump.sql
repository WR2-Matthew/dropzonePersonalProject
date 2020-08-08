delete from jumps 
where jump_id = $1;

select * from jumps 
where person_id = $2
order by jump_number asc;