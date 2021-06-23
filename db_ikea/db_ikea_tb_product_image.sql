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
-- Table structure for table `tb_product_image`
--

DROP TABLE IF EXISTS `tb_product_image`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_product_image` (
  `idtb_product_image` int NOT NULL AUTO_INCREMENT,
  `idtb_product` int NOT NULL,
  `images` varchar(250) NOT NULL,
  PRIMARY KEY (`idtb_product_image`)
) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_product_image`
--

LOCK TABLES `tb_product_image` WRITE;
/*!40000 ALTER TABLE `tb_product_image` DISABLE KEYS */;
INSERT INTO `tb_product_image` VALUES (1,1,'https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/images/980/0998030_PE822920_S4.jpg'),(2,1,'https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/images/980/0998033_PE822922_S4.jpg'),(3,2,'https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/images/427/0442702_PE593897_S4.jpg'),(4,2,'https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/images/146/0514691_PE639586_S4.jpg'),(5,3,'https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/images/112/0711277_PE728115_S4.jpg'),(6,3,'https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/images/970/0897038_PE609364_S4.jpg'),(7,4,'https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/images/125/0812525_PE772042_S4.jpg'),(8,4,'https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/images/125/0812524_PE772041_S4.jpg'),(9,5,'https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/images/741/0774177_PE756661_S4.jpg'),(10,5,'https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/images/741/0774178_PE756660_S4.jpg'),(11,6,'https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/images/111/0711123_PE727991_S4.jpg'),(12,6,'https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/images/999/0899901_PE609194_S4.jpg'),(13,7,'https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/images/110/0711070_PE727945_S4.jpg'),(14,7,'https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/images/999/0899930_PE617793_S4.jpg'),(15,8,'https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/images/104/0710492_PE727593_S4.jpg'),(16,8,'https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/images/632/0863273_PE654879_S4.jpg'),(25,36,'https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/images/490/0749067_PE745422_S4.jpg'),(26,36,'https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/images/634/0863461_PE702868_S4.jpg'),(27,37,'https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/images/161/0916125_PE784988_S4.jpg'),(28,37,'https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/images/161/0916127_PE784989_S4.jpg'),(29,40,'https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/images/129/0712900_PE729138_S4.jpg'),(30,40,'https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/images/983/0898371_PE606241_S4.jpg'),(31,41,'https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/images/396/0939604_PE794628_S4.jpg'),(32,41,'https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/images/675/0367591_PE549316_S4.jpg'),(33,46,'https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/images/130/0713022_PE729201_S4.jpg'),(34,46,'https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/images/953/0895338_PE609927_S4.jpg'),(35,47,'https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/images/111/0711138_PE728006_S4.jpg'),(36,47,'https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/images/953/0395316_PE561959_S4.jpg'),(37,48,'https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/images/716/0371687_PE551442_S4.jpg'),(38,48,'https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/images/717/0371741_PE551562_S4.jpg'),(43,52,'https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/images/110/0711025_PE727906_S3.jpg'),(44,52,'https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/images/995/0399542_PH125873_S3.jpg'),(45,53,'https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/images/147/0914722_PE784267_S3.jpg'),(46,53,'https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/images/159/0915972_PE784935_S3.jpg');
/*!40000 ALTER TABLE `tb_product_image` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-06-09 13:06:35
