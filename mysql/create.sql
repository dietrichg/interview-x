CREATE TABLE matches (
  id int(11) NOT NULL AUTO_INCREMENT,
  team varchar(50),
  score int(3),
  match_date datetime,
  PRIMARY KEY (id)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=5 ;

INSERT INTO matches (id, team, score, match_date) VALUES
(1, 'Jaguars', '20-1', '2016-08-21 14:00:00'),
(2, 'Hornets', '5-20', '2016-08-21 14:00:00'),
(3, 'Bobcats', '29-20', '2016-08-21 14:00:00'),
(4, 'Lightning', '40-10', '2016-08-21 14:00:00');


CREATE TABLE users (
  id int(11) NOT NULL AUTO_INCREMENT,
  username varchar(50),
  pass varchar(100),
  role varchar (20),
  PRIMARY KEY (id)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=5 ;

INSERT INTO users (id, username, pass, role) VALUES
(1, 'admin', 'securepass', 'administrator');
