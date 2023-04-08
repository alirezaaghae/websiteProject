-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Apr 04, 2023 at 03:58 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `breast_prosthesis`
--

-- --------------------------------------------------------

--
-- Table structure for table `package`
--

CREATE TABLE `package` (
  `id` int(20) NOT NULL,
  `age` varchar(20) NOT NULL,
  `goingTo` varchar(50) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `date` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_persian_ci;

--
-- Dumping data for table `package`
--

INSERT INTO `package` (`id`, `age`, `goingTo`, `phone`, `date`) VALUES
(13, 'low25', 'Yes', '', '2023-04-04 12:23:15'),
(14, 'low25', 'Yes', '65432456789', '2023-04-04 12:46:31'),
(15, 'low25', 'Yes', '66787685856', '2023-04-04 12:48:48'),
(16, 'between25_35', 'Yes', '09876543456', '2023-04-04 12:51:11'),
(17, 'between35_50', 'Yes', '09876543567', '2023-04-04 12:53:53'),
(18, 'morethan35', 'No', '09363534763', '2023-04-04 13:01:38'),
(19, 'between25_35', 'Yes', '43434343434', '2023-04-04 13:15:52');

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
(4, 'smsadminphone', '09128120701', 'sms'),
(5, 'smsadmintext', '{age},{phone},{goingTo},{datetime}', 'sms'),
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
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `variable`
--
ALTER TABLE `variable`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
