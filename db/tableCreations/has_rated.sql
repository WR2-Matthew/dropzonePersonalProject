create table has_rated (
rated_id serial primary key,
d_id int references dropzones(dropzone_id),
u_id int references users(user_id),
rated boolean
);