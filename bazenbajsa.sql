-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 15, 2024 at 02:22 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bazenbajsa`
--

-- --------------------------------------------------------

--
-- Table structure for table `news`
--

CREATE TABLE `news` (
  `id_news` int(11) NOT NULL,
  `ptitle` varchar(255) NOT NULL,
  `ptext` varchar(255) NOT NULL,
  `pdate` date NOT NULL,
  `pfile` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `news`
--

INSERT INTO `news` (`id_news`, `ptitle`, `ptext`, `pdate`, `pfile`) VALUES
(46, 'A Fürdő nyitása', 'A füdő nyitása a következő napra van előrelátva. xy es nagyon sok vendeg varhato.', '2024-03-30', '1710508436bazenlogo.png'),
(47, 'Csaladi hetvege', 'dsklfklsdjfkljsdklfjlkdsjflkjsdklfjljsdkfjklsdjvlkxcnklvl xcklg ljkxh jcxhjl blckxvjb klcvjklb jcklvjbkl jcklvj ', '2024-03-26', '1710508486banner3.jpg'),
(48, 'Leallas', 'sjfgj éfdélg défj gkjdfkl mnklcvélk cékbl écvkléb klécv b', '2024-04-24', '1710508512banner2.jpeg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id_news`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `news`
--
ALTER TABLE `news`
  MODIFY `id_news` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
