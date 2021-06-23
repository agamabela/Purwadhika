-- MySQL dump 10.13  Distrib 8.0.24, for Win64 (x86_64)
--
-- Host: localhost    Database: db_ikea
-- ------------------------------------------------------
-- Server version	8.0.23

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
-- Table structure for table `tb_product_ikea`
--

DROP TABLE IF EXISTS `tb_product_ikea`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_product_ikea` (
  `idproduct` int NOT NULL AUTO_INCREMENT,
  `nama` varchar(45) NOT NULL,
  `deskripsi` text NOT NULL,
  `harga` int NOT NULL,
  `idstatus` int NOT NULL,
  PRIMARY KEY (`idproduct`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_product_ikea`
--

LOCK TABLES `tb_product_ikea` WRITE;
/*!40000 ALTER TABLE `tb_product_ikea` DISABLE KEYS */;
INSERT INTO `tb_product_ikea` VALUES (1,'IDALINNEA D','Ritsleting yang tersembunyi membuat sarung mudah dilepas.  Sarung bantal dengan tampilan cermin karena memiliki pola yang sama di kedua sisi.  Katun adalah bahan alami lembut dan mudah dirawat yang dapat Anda cuci dengan mesin.',79000,1),(2,'Bela','345',2222,2),(3,'Bela','345',2222,2),(4,'Bela','345',2222,2),(5,'Lemari','Ini adalah lemari terbaik di masanya!',600000,1),(6,'Lemari','Ini adalah lemari terbaik di masanya!',600000,1),(7,'Lemari','Ini adalah lemari terbaik di masanya!',600000,1),(8,'Lemari','Ini adalah lemari terbaik di masanya!',600000,1),(9,'Lemari','Ini adalah lemari terbaik di masanya!',600000,1),(10,'Lemari','Ini adalah lemari terbaik di masanya!',600000,1),(11,'Lemari','Ini adalah lemari terbaik di masanya!',600000,1),(12,'Lemari','Ini adalah lemari terbaik di masanya!',600000,1);
/*!40000 ALTER TABLE `tb_product_ikea` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-06-09 10:11:17
