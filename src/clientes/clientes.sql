
SET SQL_MODE
  = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT
  = 0;
START TRANSACTION;
SET time_zone
  = "+00:00";



DROP TABLE IF EXISTS `cliente`;
CREATE TABLE `cliente`
  (`id`    int(11) ,
    `login`    varchar(160) NOT NULL,
    `node_id`
    varchar(160) NOT NULL,
    `avatar_url`
    varchar(160) NOT NULL,
    `gravatar_id`
    varchar(160) NOT NULL,
    `url`
    varchar(160) NOT NULL,
    `html_url`
    varchar(160) NOT NULL,
    `followers_url`
    varchar(160) NOT NULL,
    `following_url`
    varchar(160) NOT NULL,
    `gists_url`
    varchar(160) NOT NULL,
    `starred_url`
    varchar(160) NOT NULL,
    `subscriptions_url`
    varchar(160) NOT NULL,
    `organizations_url`
    varchar(160) NOT NULL,
    `repos_url`
    varchar(160) NOT NULL,
    `events_url`
    varchar(160) NOT NULL,
    `received_events_url`
    varchar(160) NOT NULL,
    `type`
    varchar(160) NOT NULL,
    `site_admin`
    tinyint(4) NOT NULL
  ) ENGINE = InnoDB DEFAULT CHARSET = latin1;


--
-- Indices de la tabla `cliente`
  


ALTER TABLE `cliente`
ADD PRIMARY KEY
  (`id`);

ALTER TABLE `cliente`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
  

  INSERT INTO `cliente` (
    `login`,
    `node_id`,
    `avatar_url`,
    `gravatar_id`,
    `url`,
    `html_url`,
    `followers_url`,
    `following_url`,
    `gists_url`,
    `starred_url`,
    `subscriptions_url`,
    `organizations_url`,
    `repos_url`,
    `events_url`,
    `received_events_url`,
    `type`,
    `site_admin`
) VALUES
  ( 
    'mojombo', 
    1, 
    'MDQ6VXNlcjE=', 
    'https://avatars0.githubusercontent.com/u/1?v=4',
    'https://api.github.com/users/mojombo',
    'https://github.com/mojombo',
    'https://api.github.com/users/mojombo/followers',
    'https://api.github.com/users/mojombo/following{/other_user}',
    'https://api.github.com/users/mojombo/gists{/gist_id}',
    'https://api.github.com/users/mojombo/starred{/owner}{/repo}',
    'https://api.github.com/users/mojombo/subscriptions',
    'https://api.github.com/users/mojombo/orgs',
    'https://api.github.com/users/mojombo/repos',
    'https://api.github.com/users/mojombo/events{/privacy}',
    'https://api.github.com/users/mojombo/received_events',
    'User',
    false
  ),(
    'mojombo2', 
    2, 
    'MDQ6VXNlcjE=', 
    'https://avatars0.githubusercontent.com/u/1?v=4',
    'https://api.github.com/users/mojombo',
    'https://github.com/mojombo',
    'https://api.github.com/users/mojombo/followers',
    'https://api.github.com/users/mojombo/following{/other_user}',
    'https://api.github.com/users/mojombo/gists{/gist_id}',
    'https://api.github.com/users/mojombo/starred{/owner}{/repo}',
    'https://api.github.com/users/mojombo/subscriptions',
    'https://api.github.com/users/mojombo/orgs',
    'https://api.github.com/users/mojombo/repos',
    'https://api.github.com/users/mojombo/events{/privacy}',
    'https://api.github.com/users/mojombo/received_events',
    'User',
    true
  );


COMMIT;