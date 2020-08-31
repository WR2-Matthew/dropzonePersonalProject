create table pictures (
photo_id serial primary key,
drop_id int references dropzones(dropzone_id),
person_id int references users(user_id),
photo varchar(300)
);
