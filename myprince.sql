-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 29, 2022 at 03:57 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `myprince`
--

-- --------------------------------------------------------

--
-- Table structure for table `studentlists`
--

CREATE TABLE `studentlists` (
  `Student_ID` int(6) NOT NULL,
  `First_Name` varchar(250) NOT NULL,
  `Last_Name` varchar(250) NOT NULL,
  `Username` varchar(100) NOT NULL,
  `Major` varchar(250) NOT NULL,
  `Ability` varchar(250) NOT NULL,
  `Kingdom` varchar(250) NOT NULL,
  `Phone_Number` varchar(10) NOT NULL,
  `Grade` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `studentlists`
--

INSERT INTO `studentlists` (`Student_ID`, `First_Name`, `Last_Name`, `Username`, `Major`, `Ability`, `Kingdom`, `Phone_Number`, `Grade`) VALUES
(650001, 'Armando ', 'Zane ', 'Arm228', 'การควบคุมและจัดการน้ำ', 'พลังควบคุมน้ำ', 'อาณาจักรน้ำจืด', '0723534554', 8),
(650002, 'Reggie', 'Richman', 'Reszaza234', 'การควบคุมและจัดการไฟ', 'พลังควบคุมไฟ', 'อาณาจักรทะเลทรายตะวันตก', '0289889762', 10),
(650003, 'Emerson', 'Bryant', 'Emerson788', 'สาขาการคุมควบวัตถุในอากาศ', 'พลังยกสิ่งของ', 'อาณาจักรลมเหนือ', '0678898778', 11),
(650004, 'Walker', 'Trevor', 'Waltre334', 'สาขาการบินและการลอยตัว', 'สามารถบินได้', 'อาณาจักรลมเหนือ', '0689876543', 12),
(650005, 'Gurion', 'Hagan', 'gur993', 'สาขาการบริหารทรัพยากร', 'พลังไฟ', 'อาณาจักรสุริยา', '0122939842', 9),
(650006, 'Ragnar', 'Waller', 'Ragna332', 'สาขาเวทมนต์', 'พลังเวทมนต์', 'อาณาจักรดาร์กคอสมิค', '0909182343', 10);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `studentlists`
--
ALTER TABLE `studentlists`
  ADD PRIMARY KEY (`Student_ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
