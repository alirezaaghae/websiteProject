-- phpMyAdmin SQL Dump
-- version 4.9.11
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Mar 15, 2023 at 05:51 PM
-- Server version: 10.3.38-MariaDB
-- PHP Version: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `admoon2_landing`
--

-- --------------------------------------------------------

--
-- Table structure for table `package`
--

CREATE TABLE `package` (
  `id` int(20) NOT NULL,
  `selected` varchar(20) NOT NULL,
  `name` varchar(50) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `website` varchar(50) NOT NULL,
  `charge` varchar(20) NOT NULL,
  `key_words` text NOT NULL,
  `social` varchar(20) NOT NULL,
  `date` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_persian_ci;

--
-- Dumping data for table `package`
--

INSERT INTO `package` (`id`, `selected`, `name`, `phone`, `website`, `charge`, `key_words`, `social`, `date`) VALUES
(5, 'http://localhost/adm', 'علیرضا', '09035240579', 'WWW.TEST.COM', '5000', 'تست', 'whatsapp', ''),
(6, 'http://localhost/adm', 'علیرضا تست 2', '09035240579', 'DFDF', '300', 'sd', 'whatsapp', ''),
(10, 'Package2', 'علیرضا آقایی', '09035240579', 'WWW.TEST.COM', '300', 'words1, words2', 'whatsapp', ''),
(11, 'Package2', 'علی جوادی', '09035240579', 'www.alijavadi.com', '5000', 'words1, words2', 'telegram', '2023-03-15 15:28:15'),
(12, 'Package3', 'تست آخر', '09035240579', 'www.alireza.com', '300', 'words1, words2', 'whatsapp', '2023-03-15 17:46:52');

-- --------------------------------------------------------

--
-- Table structure for table `variable`
--

CREATE TABLE `variable` (
  `id` int(11) NOT NULL,
  `name` varchar(100) CHARACTER SET utf8 COLLATE utf8_persian_ci NOT NULL,
  `value` text CHARACTER SET utf8 COLLATE utf8_persian_ci NOT NULL,
  `type` varchar(100) CHARACTER SET utf8 COLLATE utf8_persian_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_persian_ci;

--
-- Dumping data for table `variable`
--

INSERT INTO `variable` (`id`, `name`, `value`, `type`) VALUES
(1, 'smsuser', '9355073320', 'sms'),
(2, 'smspass', 'Ah@5073320', 'sms'),
(3, 'smsfrom', '30004657500500', 'sms'),
(4, 'smsadminphone', '09199156760', 'sms'),
(5, 'smsadmintext', '{name} در لندینگ ادمون {selected} را انتخاب و با مصرف روزانه {charge} درخواست مشاوره {social} با شماره {phone} داده است.', 'sms'),
(6, 'smstext', 'با سلام به زودی کارشناسان «ادمون» با شما تماس میگیرند، منتظر باشید', 'sms');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `package`
--
ALTER TABLE `package`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `variable`
--
ALTER TABLE `variable`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `package`
--
ALTER TABLE `package`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `variable`
--
ALTER TABLE `variable`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
