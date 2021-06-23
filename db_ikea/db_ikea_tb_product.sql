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
-- Table structure for table `tb_product`
--

DROP TABLE IF EXISTS `tb_product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_product` (
  `idtb_product` int NOT NULL AUTO_INCREMENT,
  `nama` varchar(45) NOT NULL,
  `brand` varchar(45) DEFAULT NULL,
  `deskripsi` varchar(45) DEFAULT NULL,
  `harga` int NOT NULL,
  `idtb_status` int DEFAULT '1',
  PRIMARY KEY (`idtb_product`)
) ENGINE=InnoDB AUTO_INCREMENT=54 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_product`
--

LOCK TABLES `tb_product` WRITE;
/*!40000 ALTER TABLE `tb_product` DISABLE KEYS */;
INSERT INTO `tb_product` VALUES (1,'KALAS','IKEA','Piring, warna campuran',29900,1),(2,'KORKEN','IKEA','botol dengan penutup kaca bening',100000,2),(3,'VARDAGEN','IKEA','karafe dengan penutup, kaca bening',19900,1),(4,'REJSA','IKEA','Kotak abu-abu hijau/logam 9x17x7.5 cm',49900,2),(5,'ULLKAKTUS','IKEA','Bantal kursi abu-abu tua 30x58 cm',39900,1),(6,'VÄRDERA','IKEA','Cangkir kopi dan tatakan putih',49900,1),(7,'FÄRGRIK','IKEA','Mug toska tua 25 cl',12900,1),(8,'ENUDDEN','IKEA','Gantungan untuk pintu putih',39900,1),(36,'TISKEN','IKEA','Pengait dengan plastik hisap putih',29900,1),(37,'BACKIG','IKEA','Mug 37 cl',29900,2),(40,'DINERA','IKEA','Mangkuk, merah muda terang, 14 cm',29900,1),(41,'IKEA 365+','IKEA','Tatakan gelas, gabus, 10 cm',29900,1),(46,'GUBBRÖRA','IKEA','Kuas pastry, putih/hitam',24900,1),(47,'SKUBB','IKEA','Kotak dengan kompartemen, 44x34x11 cm',79900,1),(48,'LÄSKIS','IKEA','Set sapu, transparan',29900,1),(52,'RISATORP','IKEA','Keranjang, putih, 25x26x18 cm',149000,1),(53,'VADHOLMA','IKEA','Penyimpanan gantung, hitam/jaring, 25x63 cm',239000,1);
/*!40000 ALTER TABLE `tb_product` ENABLE KEYS */;
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
