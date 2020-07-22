create table membership (
card_id serial primary key,
card_holder_id int references users(user_id),
expiration_date text,
member_since text,
license_number varchar(15),
recognitions varchar(400),
awards varchar(200),
member_number int,
recognitions_exp date
);