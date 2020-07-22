create table reviews (
comment_id serial primary key,
users_id int references users(user_id),
buisness_id int references dropzones(dropzone_id)
);