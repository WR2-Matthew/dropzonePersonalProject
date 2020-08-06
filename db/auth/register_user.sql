insert into users (
  first_name,
  last_name,
  email,
  password,
  profile_picture
) values (
  $1, $2, $3, $4, 'https://lh3.googleusercontent.com/proxy/qVMkjsmO5w_Sae-fKAvzdToDTeUH_2M76qGhRBcRHoI_AauGvt0fkAyu-Ar8POsfSzBOaAFmxRbIAgdGmBiXrxG7zAsNTGWQW18WiFv3VmQJiSloGuhYBZnQk5_grzguZ4se6yjJXHCz2VChcrxktKJIB-oZOPQHxk-i7QOjff46NVUdUMTY9A'
)

returning *;