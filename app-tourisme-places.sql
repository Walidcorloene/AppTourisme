-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : mar. 04 mai 2021 à 07:29
-- Version du serveur :  5.7.31
-- Version de PHP : 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `app-tourisme-places`
--

-- --------------------------------------------------------

--
-- Structure de la table `places`
--

DROP TABLE IF EXISTS `places`;
CREATE TABLE IF NOT EXISTS `places` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(150) NOT NULL,
  `description` text NOT NULL,
  `lat` double NOT NULL,
  `lng` double NOT NULL,
  `image` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `places`
--

INSERT INTO `places` (`id`, `nom`, `description`, `lat`, `lng`, `image`) VALUES
(7, 'Mausolé d’akbou ', 'Vestige remarquable de la période romaine, attribué à la famille numide romanisée de Firmus, il se signale au milieu de la vallée de la Soummam, il est composé d\'une seule chambre en pierres de tailles. Elevé sur une base à quatre gradins. Chacun des autres murs est flanqué d’une imaginaire (fausse porte) encadrée d’un chambranle à nervures, où on remarque des symboles : croix gammées ou tringle entourés d’un cercle. La corniche est composée d’une rangée de pierres de tailles remarquablement bien sculptées et décorées par des moulures. Le toit pyramidal est toujours en pierres de tailles bien agencées. Il existe l’emplacement de colonnes et chapiteaux aujourd’hui disparus. En 1860, le Baron Henri Aucapitaine, hôte du Bachagha Ben Ali Cherif était très impressionné par ce monument, il a écrit une note où il estime l\'âge du mausolée à 1800 ans, soit au début de l\'ère chrétienne.', 36.7708493, 5.0723562, 'https://i.ibb.co/ZJ4Hmx0/img-5.jpg'),
(10, 'Fort Moussa ', 'Le musée de Bordj Moussa est un fort espagnol bâti au 16ème siècle Il a été restauré et transformé à plusieurs reprises. Le Fort Bordj Moussa a d\'abord été utilisé comme fort militaire durant la période turque puis comme prison durant la colonisation sous le nom de Fort Barral maintenant c\'est un musée depuis 1989 et il recèle des trèsors datant de la préhistoire jusqu\'à notre époque contemporraine.\r\n\r\nEdifié sur les ruines du Palais de l’étoile, le fort Bordj Moussa a été construit par les Espagnols, et plus précisément par Ferdinand de Navarro. (seul document retrouvé : plan de masse réalisé en 1539). Il servira de château impérial sous le règne de Charles Quint (l’Espagnol qui a régné au 16e siècle).\r\nLe fort est un chef-d’oeuvre d’architecture, et, malgré les contraintes du temps, et des intempéries, il tient encore debout sur ses piliers. A l’époque espagnole, il se constituait de trois grandes salles ; deux salles latérales, une terrasse centrale, et deux autres petites formant les tours de contrôle. Les murs ont plus de deux mètres d’épaisseur. Le côté nord du fort en forme de «V» servant à cerner l’ennemi. En 1555, Salah Raïs Pacha, ordonnera à l’Espagnol Alfonso Di Peralta, de quitter les lieux et Béjaïa, après sa défaite face aux Turcs. Ces derniers occupèrent le fort et lui donnèrent le nom de Bordj-Moussa.\r\n', 36.7708493, 5.0723562, 'https://i.ibb.co/YZZFn7D/img-6-2.jpg'),
(1, 'Fort de Gouraya ', 'Le Fort de Gouraya est une place forte érigée au 16e siècle par les espagnols sur l\'emplacement du tombeau de la légendaire sainte patronne Yemma Gouraya.\r\nAu 19e siècle, il fut réaménagé par le colonisateur français. En effet, cette forteresse, bâtie au sommet du Montagne Gouraya à 672 mètres d\'altitude, est un site stratégique dominant toute la région de Béjaïa et qui prenne l\'appui important à la défense de la ville.\r\nIl servait aussi de caserne à une trentaine de soldats français jusqu\'à sa désaffection.', 1, 1, 'https://i.ibb.co/0mkLBxS/gouraya.jpg'),
(2, 'Remparts Hammadites(porte Fouka) ', 'Bab El-Bounoud ou la porte des étendards communément appelée « Bab El Fouka », a été construite en l’an 1070 par le Sultan Hammadite au même temps qui contournait la ville. C’est une porte d’accès Hammadite.', 1, 1, 'https://i.ibb.co/XprRJqr/img-2.jpg');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
