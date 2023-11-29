-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jun 15, 2023 at 08:45 AM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.2.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `user_mgt`
--

-- --------------------------------------------------------

--
-- Table structure for table `dashboard_pack`
--

CREATE TABLE `dashboard_pack` (
  `id` int(11) NOT NULL,
  `about` enum('0','1') DEFAULT '0',
  `projects` enum('0','1') DEFAULT '0',
  `questionnaire` enum('0','1') DEFAULT '0',
  `joining_kit` enum('0','1') DEFAULT '0',
  `hr_policies` enum('0','1') DEFAULT '0',
  `spine_hr` enum('0','1') DEFAULT '0',
  `floot_map` enum('0','1') DEFAULT '0',
  `other` enum('0','1') DEFAULT '0',
  `user_id` int(11) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `dashboard_pack`
--

INSERT INTO `dashboard_pack` (`id`, `about`, `projects`, `questionnaire`, `joining_kit`, `hr_policies`, `spine_hr`, `floot_map`, `other`, `user_id`, `created_at`, `updated_at`) VALUES
(1, '1', '1', '1', '1', '0', '0', '0', '0', 2, '2022-09-19 13:31:56', '2023-06-15 06:44:25'),
(15, '1', '1', '1', '0', '0', '0', '0', '0', 4, '2023-05-27 18:01:01', '2023-05-27 18:22:51');

-- --------------------------------------------------------

--
-- Table structure for table `education_details`
--

CREATE TABLE `education_details` (
  `id` int(11) NOT NULL,
  `joining_id` int(11) NOT NULL,
  `edu_name` varchar(255) DEFAULT NULL,
  `edu_university` varchar(255) DEFAULT NULL,
  `edu_year` datetime DEFAULT NULL,
  `edu_percentage` float DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `education_details`
--

INSERT INTO `education_details` (`id`, `joining_id`, `edu_name`, `edu_university`, `edu_year`, `edu_percentage`, `created_at`, `updated_at`) VALUES
(28, 18, 'School name', 'univertity', '2020-05-01 00:00:00', 50, '2023-03-03 08:31:43', '2023-03-03 08:31:43'),
(29, 21, 'School name', 'univertity', '2020-05-01 00:00:00', 50, '2023-03-09 09:41:12', '2023-03-09 09:41:12'),
(30, 22, 'School name', 'univertity', '2020-05-01 00:00:00', 50, '2023-05-28 12:15:02', '2023-05-28 12:15:02'),
(31, 26, 'School name', 'univertity', '2020-05-01 00:00:00', 50, '2023-05-28 12:18:50', '2023-05-28 12:18:50'),
(32, 27, 'School name', 'univertity', '2020-05-01 00:00:00', 50, '2023-05-28 12:41:56', '2023-05-28 12:41:56'),
(33, 28, 'School name', 'univertity', '2020-05-01 00:00:00', 50, '2023-05-28 12:44:51', '2023-05-28 12:44:51'),
(34, 29, 'School name', 'univertity', '2020-05-01 00:00:00', 50, '2023-05-28 12:49:26', '2023-05-28 12:49:26'),
(35, 30, 'School name', 'univertity', '2020-05-01 00:00:00', 50, '2023-05-28 12:50:28', '2023-05-28 12:50:28');

-- --------------------------------------------------------

--
-- Table structure for table `employment_details`
--

CREATE TABLE `employment_details` (
  `id` int(11) NOT NULL,
  `joining_id` int(11) NOT NULL,
  `emp_name` text DEFAULT NULL,
  `emp_designation` varchar(255) DEFAULT NULL,
  `emp_contact_detail` varchar(255) DEFAULT NULL,
  `emp_from` datetime DEFAULT NULL,
  `emp_to` datetime DEFAULT NULL,
  `emp_leaving` text DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `employment_details`
--

INSERT INTO `employment_details` (`id`, `joining_id`, `emp_name`, `emp_designation`, `emp_contact_detail`, `emp_from`, `emp_to`, `emp_leaving`, `created_at`, `updated_at`) VALUES
(39, 18, 'demo1', 'demo12', 'demo13', '2020-09-01 00:00:00', '2020-09-11 00:00:00', 'dmeo', '2023-03-03 08:31:43', '2023-03-03 08:31:43'),
(40, 21, 'demo1', 'demo12', 'demo13', '2020-09-01 00:00:00', '2020-09-11 00:00:00', 'dmeo', '2023-03-09 09:41:12', '2023-03-09 09:41:12'),
(41, 22, 'demo1', 'demo12', 'demo13', '2020-09-01 00:00:00', '2020-09-11 00:00:00', 'dmeo', '2023-05-28 12:15:02', '2023-05-28 12:15:02'),
(42, 26, 'demo1', 'demo12', 'demo13', '2020-09-01 00:00:00', '2020-09-11 00:00:00', 'dmeo', '2023-05-28 12:18:50', '2023-05-28 12:18:50'),
(43, 27, 'demo1', 'demo12', 'demo13', '2020-09-01 00:00:00', '2020-09-11 00:00:00', 'dmeo', '2023-05-28 12:41:56', '2023-05-28 12:41:56'),
(44, 28, 'demo1', 'demo12', 'demo13', '2020-09-01 00:00:00', '2020-09-11 00:00:00', 'dmeo', '2023-05-28 12:44:51', '2023-05-28 12:44:51'),
(45, 29, 'demo1', 'demo12', 'demo13', '2020-09-01 00:00:00', '2020-09-11 00:00:00', 'dmeo', '2023-05-28 12:49:26', '2023-05-28 12:49:26'),
(46, 30, 'demo1', 'demo12', 'demo13', '2020-09-01 00:00:00', '2020-09-11 00:00:00', 'dmeo', '2023-05-28 12:50:28', '2023-05-28 12:50:28');

-- --------------------------------------------------------

--
-- Table structure for table `family_details`
--

CREATE TABLE `family_details` (
  `id` int(11) NOT NULL,
  `joining_id` int(11) NOT NULL,
  `family_name` varchar(255) DEFAULT NULL,
  `familydob` datetime DEFAULT NULL,
  `relation` varchar(255) DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `family_details`
--

INSERT INTO `family_details` (`id`, `joining_id`, `family_name`, `familydob`, `relation`, `location`, `created_at`, `updated_at`) VALUES
(47, 18, 'test1', '2020-01-01 00:00:00', 'demo', 'demolocation', '2023-03-03 08:31:43', '2023-03-03 08:31:43'),
(48, 21, 'test1', '2020-01-01 00:00:00', 'demo', 'demolocation', '2023-03-09 09:41:12', '2023-03-09 09:41:12'),
(49, 22, 'test1', '2020-01-01 00:00:00', 'demo', 'demolocation', '2023-05-28 12:15:02', '2023-05-28 12:15:02'),
(50, 26, 'test1', '2020-01-01 00:00:00', 'demo', 'demolocation', '2023-05-28 12:18:50', '2023-05-28 12:18:50'),
(51, 27, 'test1', '2020-01-01 00:00:00', 'demo', 'demolocation', '2023-05-28 12:41:56', '2023-05-28 12:41:56'),
(52, 28, 'test1', '2020-01-01 00:00:00', 'demo', 'demolocation', '2023-05-28 12:44:51', '2023-05-28 12:44:51'),
(53, 29, 'test1', '2020-01-01 00:00:00', 'demo', 'demolocation', '2023-05-28 12:49:26', '2023-05-28 12:49:26'),
(54, 30, 'test1', '2020-01-01 00:00:00', 'demo', 'demolocation', '2023-05-28 12:50:28', '2023-05-28 12:50:28');

-- --------------------------------------------------------

--
-- Table structure for table `joining_kit`
--

CREATE TABLE `joining_kit` (
  `id` int(11) NOT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `middle_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `center_project` varchar(255) DEFAULT NULL,
  `designation` varchar(255) DEFAULT NULL,
  `father_husband_name` varchar(255) DEFAULT NULL,
  `mother_name` varchar(255) DEFAULT NULL,
  `contact_no` varchar(255) DEFAULT NULL,
  `emergency_contact` varchar(255) DEFAULT NULL,
  `relation` varchar(255) DEFAULT NULL,
  `gender` enum('MALE','FEMALE','OTHER') DEFAULT 'MALE',
  `email` varchar(255) DEFAULT NULL,
  `marital_status` enum('MARRIED','UNMARRIED') DEFAULT 'UNMARRIED',
  `birth_date` datetime DEFAULT NULL,
  `nationality` varchar(255) DEFAULT NULL,
  `marriage_date` datetime DEFAULT NULL,
  `communication_address` text DEFAULT NULL,
  `permanent_address` text DEFAULT NULL,
  `aadhar_no` varchar(255) DEFAULT NULL,
  `pan_no` varchar(255) DEFAULT NULL,
  `passport_no` varchar(255) DEFAULT NULL,
  `passport_validity` datetime DEFAULT NULL,
  `blood_group` varchar(255) DEFAULT NULL,
  `last_ctc` float DEFAULT NULL,
  `offered_ctc` float DEFAULT NULL,
  `bank_name` varchar(255) DEFAULT NULL,
  `account_no` varchar(255) DEFAULT NULL,
  `branch_address` text DEFAULT NULL,
  `ifsc_code` varchar(255) DEFAULT NULL,
  `additional_qualifications` text DEFAULT NULL,
  `professional_membership` text DEFAULT NULL,
  `relatives_niua` enum('1','0') DEFAULT '0',
  `relatives_explor` varchar(255) DEFAULT NULL,
  `interviewed_by_niua` enum('1','0') DEFAULT '0',
  `interviewed_explor` varchar(255) DEFAULT NULL,
  `criminal_offence` enum('1','0') DEFAULT '0',
  `criminal_explor` varchar(255) DEFAULT NULL,
  `medical_problems` enum('1','0') DEFAULT '0',
  `medical_explor` varchar(255) DEFAULT NULL,
  `expertise_possess` text DEFAULT NULL,
  `career_trajectory` text DEFAULT NULL,
  `awards_accolades` text DEFAULT NULL,
  `images` varchar(255) DEFAULT NULL,
  `signature` varchar(255) DEFAULT NULL,
  `contract_period_start` datetime DEFAULT NULL,
  `contract_period_end` datetime DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `user_name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `joining_kit`
--

INSERT INTO `joining_kit` (`id`, `first_name`, `middle_name`, `last_name`, `location`, `center_project`, `designation`, `father_husband_name`, `mother_name`, `contact_no`, `emergency_contact`, `relation`, `gender`, `email`, `marital_status`, `birth_date`, `nationality`, `marriage_date`, `communication_address`, `permanent_address`, `aadhar_no`, `pan_no`, `passport_no`, `passport_validity`, `blood_group`, `last_ctc`, `offered_ctc`, `bank_name`, `account_no`, `branch_address`, `ifsc_code`, `additional_qualifications`, `professional_membership`, `relatives_niua`, `relatives_explor`, `interviewed_by_niua`, `interviewed_explor`, `criminal_offence`, `criminal_explor`, `medical_problems`, `medical_explor`, `expertise_possess`, `career_trajectory`, `awards_accolades`, `images`, `signature`, `contract_period_start`, `contract_period_end`, `created_at`, `updated_at`, `user_id`, `user_name`) VALUES
(30, 'Parvesh', 'Kumar', 'Mishra', 'Faridabad', 'Center Goverment', 'Developer', 'MyFather', 'MyMother', '9810981009', '981121231', 'aaaaaaaa', 'FEMALE', 'parvesh225@gmail.com', 'UNMARRIED', '1989-03-01 00:00:00', 'Indian', '2020-02-01 00:00:00', 'Faridabad', 'Delhi', '234567867811', 'BEIP232311', '34567', '2020-09-01 00:00:00', 'A++', 5, 8, 'Axis', '657483828374', 'Delhi', 'AXIS0001', 'MCA', 'M-Tech', '1', 'relatives_explor', '1', 'aaaaaa', '1', 'bbbbb', '1', 'ccc', 'ggg', 'kkk', 'ddd', NULL, NULL, '2020-04-01 00:00:00', '2020-06-01 00:00:00', '2023-05-28 12:50:28', '2023-05-28 12:50:28', 2, 'parveshmishra');

-- --------------------------------------------------------

--
-- Table structure for table `login_user_info`
--

CREATE TABLE `login_user_info` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `expire_date` datetime NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `login_user_info`
--

INSERT INTO `login_user_info` (`id`, `username`, `token`, `expire_date`, `user_id`) VALUES
(53, 'Parvesh', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo0LCJ1c2VyX21haWwiOiJwYXJ2ZXNoQGdtYWlsLmNvbSIsInRpbWUiOiIyMDIzLTA1LTI3VDE4OjMwOjQ2LjAwMFoiLCJpYXQiOjE2ODUyMTA0NDYsImV4cCI6MTY4NTIxNDA0Nn0.grR3fpQr2c3jDUGb2RoAIAwcvSpFofHNLTOzf1qzOwY', '2023-05-27 18:30:46', 4),
(56, 'parveshmishra', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoyLCJ1c2VyX21haWwiOiJwYXJ2ZXNoQG5pdWEub3JnIiwidGltZSI6IjIwMjMtMDYtMTVUMDc6MTI6NDMuMDAwWiIsImlhdCI6MTY4NjgxMTM2MywiZXhwIjoxNjg2ODE0OTYzfQ.n7IY7o2AUyqqzeMAYSh1ROq3UvR-cF1NgI8ySjgZVUk', '2023-06-15 07:12:43', 2);

-- --------------------------------------------------------

--
-- Table structure for table `nominee_details`
--

CREATE TABLE `nominee_details` (
  `id` int(11) NOT NULL,
  `joining_id` int(11) NOT NULL,
  `nominee_name` varchar(255) DEFAULT NULL,
  `nominee_relation` varchar(255) DEFAULT NULL,
  `nominee_dob` datetime DEFAULT NULL,
  `nominee_amt_share` varchar(255) DEFAULT NULL,
  `nominee_minority` text DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `nominee_details`
--

INSERT INTO `nominee_details` (`id`, `joining_id`, `nominee_name`, `nominee_relation`, `nominee_dob`, `nominee_amt_share`, `nominee_minority`, `created_at`, `updated_at`) VALUES
(7, 18, 'aa', 'bb', '2020-09-11 00:00:00', '500', '22', '2023-03-03 08:31:43', '2023-03-03 08:31:43'),
(8, 21, 'aa', 'bb', '2020-09-11 00:00:00', '500', '22', '2023-03-09 09:41:12', '2023-03-09 09:41:12'),
(9, 22, 'aa', 'bb', '2020-09-11 00:00:00', '500', '22', '2023-05-28 12:15:02', '2023-05-28 12:15:02'),
(10, 26, 'aa', 'bb', '2020-09-11 00:00:00', '500', '22', '2023-05-28 12:18:50', '2023-05-28 12:18:50'),
(11, 27, 'aa', 'bb', '2020-09-11 00:00:00', '500', '22', '2023-05-28 12:41:56', '2023-05-28 12:41:56'),
(12, 28, 'aa', 'bb', '2020-09-11 00:00:00', '500', '22', '2023-05-28 12:44:51', '2023-05-28 12:44:51'),
(13, 29, 'aa', 'bb', '2020-09-11 00:00:00', '500', '22', '2023-05-28 12:49:26', '2023-05-28 12:49:26'),
(14, 30, 'aa', 'bb', '2020-09-11 00:00:00', '500', '22', '2023-05-28 12:50:28', '2023-05-28 12:50:28');

-- --------------------------------------------------------

--
-- Table structure for table `professional_references`
--

CREATE TABLE `professional_references` (
  `id` int(11) NOT NULL,
  `joining_id` int(11) NOT NULL,
  `ref_name` varchar(255) DEFAULT NULL,
  `ref_designation` varchar(255) DEFAULT NULL,
  `ref_organization_name` varchar(255) DEFAULT NULL,
  `ref_contact_no` varchar(255) DEFAULT NULL,
  `ref_email` varchar(255) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `professional_references`
--

INSERT INTO `professional_references` (`id`, `joining_id`, `ref_name`, `ref_designation`, `ref_organization_name`, `ref_contact_no`, `ref_email`, `created_at`, `updated_at`) VALUES
(15, 18, 'satish', 'account', NULL, NULL, 'abc@gm.com', '2023-03-03 08:31:43', '2023-03-03 08:31:43'),
(16, 21, 'satish', 'account', NULL, NULL, 'abc@gm.com', '2023-03-09 09:41:12', '2023-03-09 09:41:12'),
(17, 22, 'satish', 'account', NULL, NULL, 'abc@gm.com', '2023-05-28 12:15:02', '2023-05-28 12:15:02'),
(18, 26, 'satish', 'account', NULL, NULL, 'abc@gm.com', '2023-05-28 12:18:50', '2023-05-28 12:18:50'),
(19, 27, 'satish', 'account', NULL, NULL, 'abc@gm.com', '2023-05-28 12:41:56', '2023-05-28 12:41:56'),
(20, 28, 'satish', 'account', NULL, NULL, 'abc@gm.com', '2023-05-28 12:44:51', '2023-05-28 12:44:51'),
(21, 29, 'satish', 'account', NULL, NULL, 'abc@gm.com', '2023-05-28 12:49:26', '2023-05-28 12:49:26'),
(22, 30, 'satish', 'account', NULL, NULL, 'abc@gm.com', '2023-05-28 12:50:28', '2023-05-28 12:50:28');

-- --------------------------------------------------------

--
-- Table structure for table `questionnaire`
--

CREATE TABLE `questionnaire` (
  `id` int(11) NOT NULL,
  `niua_established` varchar(255) DEFAULT NULL,
  `niua_vision` varchar(255) DEFAULT NULL,
  `supported_giz` varchar(255) DEFAULT NULL,
  `niua_brief` text DEFAULT NULL,
  `join_niua` text DEFAULT NULL,
  `user_id` int(11) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `questionnaire`
--

INSERT INTO `questionnaire` (`id`, `niua_established`, `niua_vision`, `supported_giz`, `niua_brief`, `join_niua`, `user_id`, `created_at`, `updated_at`) VALUES
(1, 'aaa', 'b', 'd', 'bbb', 'fff', 2, '2023-04-06 06:09:20', '2023-04-06 06:09:20'),
(2, 'aaa', 'b', 'd', 'bbb', 'fff', 2, '2023-04-06 06:24:26', '2023-04-06 06:24:26'),
(3, 'aaa', 'b', 'd', 'bbb', 'fff', 2, '2023-04-06 06:24:29', '2023-04-06 06:24:29'),
(4, 'aaa', 'b', 'd', 'bbb', 'fff', 2, '2023-04-06 06:24:40', '2023-04-06 06:24:40'),
(5, 'aaa', 'b', 'd', 'bbb', 'fff', 2, '2023-04-06 06:24:41', '2023-04-06 06:24:41'),
(6, 'aaa', 'b', 'd', 'bbb', 'fff', 2, '2023-04-06 06:25:09', '2023-04-06 06:25:09');

-- --------------------------------------------------------

--
-- Table structure for table `role`
--

CREATE TABLE `role` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `role`
--

INSERT INTO `role` (`id`, `name`) VALUES
(1, 'ROLE_SUPER_ADMIN'),
(2, 'ROLE_ADMIN'),
(3, 'ROLE_STAFF');

-- --------------------------------------------------------

--
-- Table structure for table `self_declarations`
--

CREATE TABLE `self_declarations` (
  `id` int(11) NOT NULL,
  `joining_id` int(11) NOT NULL,
  `self_declaration_name` varchar(255) DEFAULT NULL,
  `self_declaration_fir` varchar(255) DEFAULT NULL,
  `self_declaration_date` datetime DEFAULT NULL,
  `self_declaration_action` varchar(255) DEFAULT NULL,
  `self_declaration_status` varchar(255) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `self_declarations`
--

INSERT INTO `self_declarations` (`id`, `joining_id`, `self_declaration_name`, `self_declaration_fir`, `self_declaration_date`, `self_declaration_action`, `self_declaration_status`, `created_at`, `updated_at`) VALUES
(4, 18, 'aa', 'ww', '2020-09-01 00:00:00', 'eee', 'eeeee', '2023-03-03 08:31:43', '2023-03-03 08:31:43'),
(5, 21, 'aa', 'ww', '2020-09-01 00:00:00', 'eee', 'eeeee', '2023-03-09 09:41:12', '2023-03-09 09:41:12'),
(6, 22, 'aa', 'ww', '2020-09-01 00:00:00', 'eee', 'eeeee', '2023-05-28 12:15:02', '2023-05-28 12:15:02'),
(7, 26, 'aa', 'ww', '2020-09-01 00:00:00', 'eee', 'eeeee', '2023-05-28 12:18:50', '2023-05-28 12:18:50'),
(8, 27, 'aa', 'ww', '2020-09-01 00:00:00', 'eee', 'eeeee', '2023-05-28 12:41:56', '2023-05-28 12:41:56'),
(9, 28, 'aa', 'ww', '2020-09-01 00:00:00', 'eee', 'eeeee', '2023-05-28 12:44:51', '2023-05-28 12:44:51'),
(10, 29, 'aa', 'ww', '2020-09-01 00:00:00', 'eee', 'eeeee', '2023-05-28 12:49:26', '2023-05-28 12:49:26'),
(11, 30, 'aa', 'ww', '2020-09-01 00:00:00', 'eee', 'eeeee', '2023-05-28 12:50:28', '2023-05-28 12:50:28');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `username`, `email`, `password`, `created_at`, `updated_at`) VALUES
(2, 'parvesh', 'parveshmishra', 'parvesh@niua.org', '$2b$10$SnstkmYzUVFLw.PgiMd1p.ixdsUjmB.DN65l9IGMoDMtbuMqG2qMe', '2022-09-14 09:10:38', '2022-09-14 09:10:38'),
(3, 'HARSHIT OFFSET', 'parvesh@niua.org', 'parvesh12@niua.org', '$2b$10$5PI3xwSCfYmJKscax5SwgODWFaQaqzCWfSc.RqZcod7WbbOeIAUiC', '2023-03-06 06:02:58', '2023-03-06 06:02:58'),
(4, 'Parvesh', 'Parvesh', 'parvesh@gmail.com', '$2b$10$gTJR65CmVPLP6PjkOPFtPuR7D538hD8OYWAz3Bkgc7yc7Kvac8rma', '2023-05-27 18:00:03', '2023-05-27 18:00:03');

-- --------------------------------------------------------

--
-- Table structure for table `user_roles`
--

CREATE TABLE `user_roles` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `role_id` int(11) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user_roles`
--

INSERT INTO `user_roles` (`id`, `user_id`, `role_id`, `created_at`, `updated_at`) VALUES
(1, 2, 1, '2022-09-14 09:10:38', '2022-09-14 09:10:38'),
(2, 3, 1, '2023-03-06 06:02:58', '2023-03-06 06:02:58'),
(3, 4, 1, '2023-05-27 18:00:03', '2023-05-27 18:00:03');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `dashboard_pack`
--
ALTER TABLE `dashboard_pack`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `education_details`
--
ALTER TABLE `education_details`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `employment_details`
--
ALTER TABLE `employment_details`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `family_details`
--
ALTER TABLE `family_details`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `joining_kit`
--
ALTER TABLE `joining_kit`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `compositeIndex` (`email`);

--
-- Indexes for table `login_user_info`
--
ALTER TABLE `login_user_info`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `nominee_details`
--
ALTER TABLE `nominee_details`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `professional_references`
--
ALTER TABLE `professional_references`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `questionnaire`
--
ALTER TABLE `questionnaire`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `self_declarations`
--
ALTER TABLE `self_declarations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_roles`
--
ALTER TABLE `user_roles`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `dashboard_pack`
--
ALTER TABLE `dashboard_pack`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `education_details`
--
ALTER TABLE `education_details`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT for table `employment_details`
--
ALTER TABLE `employment_details`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;

--
-- AUTO_INCREMENT for table `family_details`
--
ALTER TABLE `family_details`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=55;

--
-- AUTO_INCREMENT for table `joining_kit`
--
ALTER TABLE `joining_kit`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `login_user_info`
--
ALTER TABLE `login_user_info`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=57;

--
-- AUTO_INCREMENT for table `nominee_details`
--
ALTER TABLE `nominee_details`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `professional_references`
--
ALTER TABLE `professional_references`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `self_declarations`
--
ALTER TABLE `self_declarations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `user_roles`
--
ALTER TABLE `user_roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
