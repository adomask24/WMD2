-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 30, 2022 at 01:24 PM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `codeacademy2022`
--

-- --------------------------------------------------------

--
-- Table structure for table `warehouse`
--

CREATE TABLE `warehouse` (
  `id` int(11) NOT NULL,
  `materialgroup` text NOT NULL,
  `name` text NOT NULL,
  `dimension` text NOT NULL,
  `quantity` int(11) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `orderdate` text DEFAULT NULL,
  `receiptdate` text DEFAULT NULL,
  `supplier` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `warehouse`
--

INSERT INTO `warehouse` (`id`, `materialgroup`, `name`, `dimension`, `quantity`, `price`, `orderdate`, `receiptdate`, `supplier`) VALUES
(28, 'Kampuočiai', 'Aliuminis', '50x100x5mm', 40, 325, '2022-02-16', '2022-05-19', 'UAB \"Alumeco\"'),
(29, 'Kampuočiai', 'Aliuminis', '50x100x5mm', 40, 325, '2022-02-16', '2022-05-19', 'UAB \"Alumeco\"'),
(30, 'Kampuočiai', 'Aliuminis', '50x50x4mm', 35, 145, '2022-02-16', '2022-05-19', 'UAB \"Alumeco\"'),
(31, 'Lakštai', 'Aliuminis', '50x50x4mm', 35, 145, '2022-02-16', '2022-05-19', 'UAB \"Alumeco\"'),
(32, 'Juostos', 'Aliuminis', '50x50x4mm', 35, 145, '2022-02-16', '2022-05-19', 'UAB \"Alumeco\"'),
(33, 'Apvalūs vamzdžiai', 'Aliuminis', '50x50x4mm', 35, 145, '2022-02-16', '2022-05-19', 'UAB \"Alumeco\"'),
(34, 'Kvadratiniai vamzdžiai', 'Aliuminis', '50x50x4mm', 35, 145, '2022-02-16', '2022-05-19', 'UAB \"Alumeco\"'),
(35, 'Varžtai', 'Aliuminis', '50x50x4mm', 35, 145, '2022-02-16', '2022-05-19', 'UAB \"Alumeco\"'),
(37, 'Veržlės', 'Aliuminis', '50x50x4mm', 35, 145, '2022-02-16', '2022-05-19', 'UAB \"Alumeco\"'),
(38, 'Veržlės', 'Aliuminis', '50x50x4mm', 35, 145, '2022-02-16', '2022-05-19', 'UAB \"Alumeco\"'),
(39, 'Varžtai', 'M10x100 A2-70 ISO4017', 'M10x100', 10000, 300, '2022-03-08', '', 'UAB \"Drūtsraigtis\"');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `warehouse`
--
ALTER TABLE `warehouse`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `warehouse`
--
ALTER TABLE `warehouse`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
