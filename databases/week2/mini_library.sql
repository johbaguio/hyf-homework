
SET NAMES utf8mb4;

CREATE TABLE IF NOT EXISTS `borrower`(
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS `book_language`(
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `language` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS `book_status`(
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS `borrowed_books`(
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `language_id` int(10) unsigned NOT NULL,
  `date_borrowed` DATETIME NOT NULL,
  `date_returned` DATETIME NOT NULL,
  `due_date` DATETIME NULL DEFAULT NULL,
  `status` int(10) unsigned NOT NULL,
  `user_id` int(10) unsigned,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_status` FOREIGN KEY (`status`) REFERENCES `book_status` (`id`) ON DELETE CASCADE,
  CONSTRAINT `fk_user_id` FOREIGN KEY (`user_id`) REFERENCES `borrower` (`id`) ON DELETE CASCADE,
  CONSTRAINT `fk_language` FOREIGN KEY (`language_id`) REFERENCES `book_language` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;



-- Users
insert into borrower (id, name, email, phone) values (1, 'Badr', 'badr@harvard.edu', '483-396-8795');
insert into borrower (id, name, email, phone) values (2, 'Yana', 'yana@spotify.com', '635-572-8467');
insert into borrower (id, name, email, phone) values (3, 'Monya', 'monya@lulu.com', '790-962-8683');
insert into borrower (id, name, email, phone) values (4, 'Gerlie', 'gerlie@quantcast.com', '646-743-6191');
insert into borrower (id, name, email, phone) values (5, 'Quan', 'quan@indiatimes.com', '302-678-7931');
insert into borrower (id, name, email, phone) values (6, 'Patriksha', 'patriskha@comcast.net', '251-524-6594');
insert into borrower (id, name, email, phone) values (7, 'Marta', 'marta@techcrunch.com', '316-170-3640');
insert into borrower (id, name, email, phone) values (8, 'Omid', 'omid@nymag.com', '176-177-5579');
insert into borrower (id, name, email, phone) values (9, 'Soniya', 'soniya@weebly.com', '891-952-6749');
insert into borrower (id, name, email, phone) values (10,'Samyar','samyar@github.com', '202-517-6983');
insert into borrower (id, name, email, phone) values (11, 'Flemming', 'donald@duck.com', NULL);
insert into borrower (id, name, email, phone) values (12, 'Marie', 'marie@bla.com', NULL);

-- Statuses
insert into book_status (id, name) values (1, 'Borrowed');
insert into book_status (id, name) values (2, 'Returned');
insert into book_status (id, name) values (3, 'Overdue');


-- borrowed_books
insert into borrowed_books (id, title, language_id, date_borrowed, date_returned, due_date, status, user_id) values (1, 'Fault in our stars', 1, '2017-10-25 06:54:16', '2017-10-15 13:05:09', null, 2, 1);
insert into borrowed_books (id, title, language_id, date_borrowed, date_returned, due_date, status, user_id) values (2, 'City of Bones', 1, '2017-10-25 06:54:16', '2017-10-15 13:05:09', null, 2, 1);

-- language
insert into book_language (id, language) values (1, 'English');
insert into book_language (id, language) values (2, 'Danish');
insert into book_language (id, language) values (3, 'French');
insert into book_language (id, language) values (4, 'Others');

