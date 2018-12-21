create table houses (
id serial primary key,
name varchar(30),
address varchar(100),
city varchar(100),
state varchar(2),
zip integer,
img text,
mortgage DECIMAL,
rent DECIMAL
)


insert into houses (name, address, city, state, zip, img, mortgage, rent)
 values('Joe', '12333 Flintlock Way', 'Herriman', 'UT', 84096, 'aofmeklfdfmaldkfmalkena', 1234, 123)