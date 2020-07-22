create table dropzones (
dropzone_id serial primary key,
creator_id int references users(user_id),
address varchar(125),
pictures varchar(3000),
altitude int,
state_located varchar(25),
jump_ticket_price decimal
);