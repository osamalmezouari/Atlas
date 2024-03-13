create table users(
    user_ID  int auto_increment
        primary key,
    avatar   text                 not null,
    username varchar(50)          not null,
    password varchar(50)          not null,
    active   tinyint(1) default 1 not null,
    email    varchar(200)         not null,
    address  varchar(100)         not null,
    constraint email
        unique (email),
    constraint username
        unique (username)
);

create table adoption(
    adoption_ID          int auto_increment
        primary key,
    user_ID              int                  not null,
    adoption_posted_Date varchar(100)         not null,
    adoption_Status      tinyint(1) default 0 not null,
    adopted_Date         varchar(100)         null,
    animal_Name          varchar(10)          null,
    animal_Race          varchar(10)          null,
    Old     number             not null,
    animal_Gender        varchar(10)          null,
    animal_Class         varchar(50)          null,
    description          text                 null,
    weight               decimal(9, 2)        null,
    health_Status        varchar(50)          null,
    vaccinated
    castrate             tinyint(1) default 0 null,
    constraint adoption_user_user_ID_fk
        foreign key (user_ID) references users (user_ID)
);

create table donation(
    donation_ID  int auto_increment
        primary key,
    user_ID      int not null,
    total_amount int not null,
    constraint donation_user_user_ID_fk
        foreign key (user_ID) references users (user_ID)
);

create table photos_collections
(
    animal_Photos_ID int auto_increment
        primary key,
    adoption_ID      int      not null,
    photo            longblob not null,
    constraint photos_collections_adoption_adoption_ID_fk
        foreign key (adoption_ID) references adoption (adoption_ID)
);

create table reviews
(
    review_ID int auto_increment
        primary key,
    user_ID   int           not null,
    comment   text          null,
    raiting   int default 0 not null,
    constraint reviews_user_user_ID_fk
        foreign key (user_ID) references users (user_ID)
);

create table roles
(
    role_ID int auto_increment
        primary key,
    user_ID int                        null,
    role    varchar(50) default 'user' null,
    constraint roles_user_user_ID_fk
        foreign key (user_ID) references users (user_ID)
);

create table social
(
    social_ID    int auto_increment
        primary key,
    user_ID      int          not null,
    social_email varchar(150) null,
    whatsapp     text         null,
    phone        varchar(50)  not null,
    facebook     varchar(500) null,
    constraint social_user_user_ID_fk
        foreign key (user_ID) references users (user_ID)
);

create table weblinks
(
    facebook text null,
    x        text null,
    linkden  text null,
    discord  text null,
    github   text null
);





-- features
-- blogs
-- help animals posts
-- website store
-- announcements
-- pet  cats












