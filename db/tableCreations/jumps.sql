create table jumps (
jump_id serial primary key,
person_id int references users(user_id),
date varchar(10),
dropzone varchar(30),
discipline varchar(30),
plane varchar(100),
jump_details varchar(1000),
image varchar(3000)
);