-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le :  lun. 26 avr. 2021 à 14:37
-- Version du serveur :  10.4.10-MariaDB
-- Version de PHP :  7.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `cinetech`
--

-- --------------------------------------------------------

--
-- Structure de la table `fav_list`
--

DROP TABLE IF EXISTS `fav_list`;
CREATE TABLE IF NOT EXISTS `fav_list` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_user` int(11) NOT NULL,
  `id_movie` int(11) NOT NULL,
  `id_series` int(11) NOT NULL,
  `date` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `movie_commentary`
--

DROP TABLE IF EXISTS `movie_commentary`;
CREATE TABLE IF NOT EXISTS `movie_commentary` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_user` int(11) NOT NULL,
  `id_movie` int(11) NOT NULL,
  `commentary` varchar(1000) NOT NULL,
  `date` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `movie_commentary_reply`
--

DROP TABLE IF EXISTS `movie_commentary_reply`;
CREATE TABLE IF NOT EXISTS `movie_commentary_reply` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_user` int(11) NOT NULL,
  `id_movie` int(11) NOT NULL,
  `id_commentary` int(11) NOT NULL,
  `reply` varchar(1000) NOT NULL,
  `date` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `rights`
--

DROP TABLE IF EXISTS `rights`;
CREATE TABLE IF NOT EXISTS `rights` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `rights` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `series_commentary`
--

DROP TABLE IF EXISTS `series_commentary`;
CREATE TABLE IF NOT EXISTS `series_commentary` (
  `id` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `id_series` int(11) NOT NULL,
  `commentary` varchar(1000) NOT NULL,
  `date` datetime NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `series_commentary_reply`
--

DROP TABLE IF EXISTS `series_commentary_reply`;
CREATE TABLE IF NOT EXISTS `series_commentary_reply` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_user` int(11) NOT NULL,
  `id_series` int(11) NOT NULL,
  `id_commentary` int(11) NOT NULL,
  `reply` varchar(1000) NOT NULL,
  `date` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_right` int(11) NOT NULL,
  `login` varchar(20) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `image` varchar(800) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`id`, `id_right`, `login`, `email`, `password`, `image`) VALUES
(1, 1, 'okokokokok', '$2y$10$27Gc0fbCEsyhRtsDTuFY0O/y6PUMwqfJ1m9wG53vWWJA7u9ZceCL6', 'okokokokok@ok.fr', 'https://static.wixstatic.com/media/109580_c3da31ed06484c7e8e225c46beecd507~mv2.png/v1/fill/w_220,h_220,al_c,q_85,usm_0.66_1.00_0.01/avatar%20neutre.webp'),
(2, 1, 'monviermtn', '$2y$10$H6.NUVpnhTYeCM/hRRNkK.rrB5sEppSUKrGZ6oHtBJAjQUTt5oP66', 'monviermtn@ok.fr', 'https://static.wixstatic.com/media/109580_c3da31ed06484c7e8e225c46beecd507~mv2.png/v1/fill/w_220,h_220,al_c,q_85,usm_0.66_1.00_0.01/avatar%20neutre.webp'),
(3, 1, 'jojojojoj', '$2y$10$bmCxWIhsu1mC1/.zBGAaJ.gJ5TojLMbZmcoygWEzaDxIEP8khYqxG', 'jojojojoj@ok.fr', 'https://static.wixstatic.com/media/109580_c3da31ed06484c7e8e225c46beecd507~mv2.png/v1/fill/w_220,h_220,al_c,q_85,usm_0.66_1.00_0.01/avatar%20neutre.webp'),
(4, 1, 'azertyuiop', '$2y$10$xufCi8EwEL73ONz02LK.5eshN4geR4d1orXaRKu1XlO5n6kxRz.ju', 'azertyuiop@ok.fr', 'https://static.wixstatic.com/media/109580_c3da31ed06484c7e8e225c46beecd507~mv2.png/v1/fill/w_220,h_220,al_c,q_85,usm_0.66_1.00_0.01/avatar%20neutre.webp'),
(5, 1, 'oooooook', '$2y$10$zqFLsGB9NjcVBInky7cmVuwWA4xew7lk/1y.R3JXQ4SpJurX9zCq6', 'oooooook@ok.fr', 'https://static.wixstatic.com/media/109580_c3da31ed06484c7e8e225c46beecd507~mv2.png/v1/fill/w_220,h_220,al_c,q_85,usm_0.66_1.00_0.01/avatar%20neutre.webp'),
(6, 1, 'iuytrefghjkl', 'iuytrefghjkl@ok.fr', '$2y$10$kNhfgR1BPJm0SM0vjF2/2OzRIf1BoM9u9P15haQJ15uIjqfcZkQmK', 'https://static.wixstatic.com/media/109580_c3da31ed06484c7e8e225c46beecd507~mv2.png/v1/fill/w_220,h_220,al_c,q_85,usm_0.66_1.00_0.01/avatar%20neutre.webp');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
