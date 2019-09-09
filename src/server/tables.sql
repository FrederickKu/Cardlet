-- create pokemons table
CREATE TABLE IF NOT EXISTS users (
  user_id SERIAL PRIMARY KEY,
  username TEXT,
  password TEXT,
	user_name TEXT,
	user_photo TEXT,
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE IF NOT EXISTS namecards (
  namecard_id SERIAL PRIMARY KEY,
  namecard_image TEXT,
  name TEXT,
	title TEXT,
	phone TEXT,
	mobile TEXT,
	email TEXT,
	website TEXT,
	address TEXT,
	company TEXT,
	user_id int,
	default_card BOOLEAN DEFAULT FALSE,
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS othercards (
	othercard_id SERIAL PRIMARY KEY,
	user_id int,
	namecard_id int,
	linked_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
