create table users (
user_id serial primary key,
is_admin boolean,
super_admin boolean,
password varchar(300),
email varchar(100),
first_name varchar(30),
last_name varchar(50),
uspa_card boolean,
profile_picture varchar(4000),
username varchar(22)
);