-- MySQL dump 10.13  Distrib 8.0.22, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: db_ikea
-- ------------------------------------------------------
-- Server version	8.0.22

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `tb_product_stok`
--

DROP TABLE IF EXISTS `tb_product_stok`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_product_stok` (
  `idtb_product_stok` int NOT NULL AUTO_INCREMENT,
  `idtb_product` int NOT NULL,
  `qty` int NOT NULL,
  `type` varchar(45) NOT NULL,
  `idtb_status` int DEFAULT '1',
  PRIMARY KEY (`idtb_product_stok`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_product_stok`
--

LOCK TABLES `tb_product_stok` WRITE;
/*!40000 ALTER TABLE `tb_product_stok` DISABLE KEYS */;
INSERT INTO `tb_product_stok` VALUES (1,1,132,'Nude',1),(2,1,102,'Pastel',1),(3,2,21,'1L',1),(4,2,11,'0.5L',1),(5,3,74,'1L',1),(6,3,98,'0.5L',1),(7,4,12,'M',1),(8,4,23,'L',1),(9,5,75,'G',1),(10,5,89,'W',1),(11,6,73,'B',1),(12,6,97,'W',1),(13,7,96,'T',1),(14,7,87,'Y',1),(15,8,96,'W',1),(16,8,98,'B',1),(19,36,95,'W',1),(20,36,89,'B',1),(21,37,22,'B',1),(22,37,22,'W',1),(23,40,86,'Pink',1),(24,40,88,'Yellow',1),(25,41,95,'B',1),(26,41,89,'W',1),(27,46,98,'W',1),(28,46,98,'B',1),(29,47,96,'W',1),(30,47,89,'B',1),(31,48,110,'W',1),(32,48,110,'B',1),(37,52,112,'W',1),(38,52,210,'B',1),(39,53,221,'B',1),(40,53,112,'W',1);
/*!40000 ALTER TABLE `tb_product_stok` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-06-09 13:06:36
