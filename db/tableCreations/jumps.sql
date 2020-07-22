create table jumps (
jump_id serial primary key,
person_id int references users(user_id),
date date,
dropzone int references dropzones(dropzone_id),
discipline varchar(30),
plane varchar(100),
jump_details varchar(1000),
image varchar(3000)
);