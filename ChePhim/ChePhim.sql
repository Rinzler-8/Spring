DROP DATABASE IF EXISTS ChePhim;
CREATE DATABASE ChePhim;
USE ChePhim;

DROP TABLE IF EXISTS `Roles`;
CREATE TABLE Roles(
	id     SMALLINT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    -- RoleName 	ENUM ('ADMIN', 'MANAGER','USER')
    name 	VARCHAR(20)
);
INSERT INTO `chephim`.`Roles` (`id`, `name`) VALUES ('1', 'ADMIN');
INSERT INTO `chephim`.`Roles` (`id`, `name`) VALUES ('2', 'MANAGER');
INSERT INTO `chephim`.`Roles` (`id`, `name`) VALUES ('3', 'USER');



DROP TABLE IF EXISTS `Account`;
CREATE TABLE `Account`(
    accountID            SMALLINT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    email                VARCHAR(50) NOT NULL UNIQUE KEY,
    username             VARCHAR(50) NOT NULL UNIQUE KEY,
	AvatarImageName      VARCHAR(50) UNIQUE KEY,
    CreateDate           DATETIME DEFAULT NOW(),
    `password`           VARCHAR(100)
--     RoleId    			 SMALLINT UNSIGNED,
--     FOREIGN KEY (RoleId)  REFERENCES `Roles`(RoleId)
);
                  
/*============================== INSERT DATABASE =======================================*/
/*======================================================================================*/

-- Add data Account
-- INSERT INTO `Account`(Email							, Username		, AvatarImageName		, CreateDate  				,`password`														, RoleId)			
-- VALUES 				                                                                                                 
-- 					('admin@gmail.com'				, 'admin'		,'admin.jpg'	    	,'2022-05-19' ,			'$2a$10$W2neF9.6Agi6kAKVq8q3fec5dHW8KUA.b0VSIGdIZyUravfLpyIFi' 		,  1),	
-- 					('Email1@gmail.com'				, 'Username1'	,'Avatar1.jpg'	 	  	,'2021-03-05' ,			'$2a$10$W2neF9.6Agi6kAKVq8q3fec5dHW8KUA.b0VSIGdIZyUravfLpyIFi' 		,   2),			
-- 					('Email2@gmail.com'				, 'Username2'	, 'Avatar2.jpg'	 		,'2020-06-05' ,			'$2a$10$W2neF9.6Agi6kAKVq8q3fec5dHW8KUA.b0VSIGdIZyUravfLpyIFi'		,  2),			
--                     ('Email3@gmail.com'				, 'Username3'	, 'Avatar3.jpg'	 		,'2019-06-07' ,			'$2a$10$W2neF9.6Agi6kAKVq8q3fec5dHW8KUA.b0VSIGdIZyUravfLpyIFi'		,  2),			
--                     ('Email4@gmail.com'				, 'Username4'	, 'Avatar4.jpg'	 		,'2018-03-04' ,			'$2a$10$W2neF9.6Agi6kAKVq8q3fec5dHW8KUA.b0VSIGdIZyUravfLpyIFi'		,  2),			
--                     ('Email5@gmail.com'				, 'Username5'	, 'Avatar5.jpg'	 		,'2020-02-10' ,		    '$2a$10$W2neF9.6Agi6kAKVq8q3fec5dHW8KUA.b0VSIGdIZyUravfLpyIFi'		,  2),			
--                     ('Email6@gmail.com'				, 'Username6'	, 'Avatar6.jpg'	 		,'2017-02-11' ,		    '$2a$10$W2neF9.6Agi6kAKVq8q3fec5dHW8KUA.b0VSIGdIZyUravfLpyIFi'		,  2);

INSERT INTO `Account`(email							, username		, AvatarImageName		, CreateDate  				,`password`														)			
VALUES 				                                                                                                 
					('admin@gmail.com'				, 'admin'		,'admin.jpg'	    	,'2022-05-19' ,			'$2a$10$W2neF9.6Agi6kAKVq8q3fec5dHW8KUA.b0VSIGdIZyUravfLpyIFi' 		),	
					('Email1@gmail.com'				, 'Username1'	,'Avatar1.jpg'	 	  	,'2021-03-05' ,			'$2a$10$W2neF9.6Agi6kAKVq8q3fec5dHW8KUA.b0VSIGdIZyUravfLpyIFi' 		),			
					('Email2@gmail.com'				, 'Username2'	, 'Avatar2.jpg'	 		,'2020-06-05' ,			'$2a$10$W2neF9.6Agi6kAKVq8q3fec5dHW8KUA.b0VSIGdIZyUravfLpyIFi'		),			
                    ('Email3@gmail.com'				, 'Username3'	, 'Avatar3.jpg'	 		,'2019-06-07' ,			'$2a$10$W2neF9.6Agi6kAKVq8q3fec5dHW8KUA.b0VSIGdIZyUravfLpyIFi'		),			
                    ('Email4@gmail.com'				, 'Username4'	, 'Avatar4.jpg'	 		,'2018-03-04' ,			'$2a$10$W2neF9.6Agi6kAKVq8q3fec5dHW8KUA.b0VSIGdIZyUravfLpyIFi'		),			
                    ('Email5@gmail.com'				, 'Username5'	, 'Avatar5.jpg'	 		,'2020-02-10' ,		    '$2a$10$W2neF9.6Agi6kAKVq8q3fec5dHW8KUA.b0VSIGdIZyUravfLpyIFi'		),			
                    ('Email6@gmail.com'				, 'Username6'	, 'Avatar6.jpg'	 		,'2017-02-11' ,		    '$2a$10$W2neF9.6Agi6kAKVq8q3fec5dHW8KUA.b0VSIGdIZyUravfLpyIFi'		);

CREATE TABLE account_roles(
    account_ID 	SMALLINT NOT NULL,
	role_ID     SMALLINT NOT NULL ,
    PRIMARY KEY(role_ID,account_ID)
	-- FOREIGN KEY (accountID)  REFERENCES Account(accountID)
);