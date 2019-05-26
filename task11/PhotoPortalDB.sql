-- MySQL dump 10.13  Distrib 8.0.16, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: photoportal
-- ------------------------------------------------------
-- Server version	8.0.16

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `likes`
--

DROP TABLE IF EXISTS `likes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `likes` (
  `userID` int(11) NOT NULL,
  `postID` int(11) NOT NULL,
  KEY `post_ID_idx` (`postID`),
  KEY `user_ID_idx` (`userID`),
  CONSTRAINT `posts_ID` FOREIGN KEY (`postID`) REFERENCES `photoposts` (`postID`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `users_ID` FOREIGN KEY (`userID`) REFERENCES `user` (`userID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `likes`
--

LOCK TABLES `likes` WRITE;
/*!40000 ALTER TABLE `likes` DISABLE KEYS */;
/*!40000 ALTER TABLE `likes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `photoposts`
--

DROP TABLE IF EXISTS `photoposts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `photoposts` (
  `postID` int(11) NOT NULL AUTO_INCREMENT,
  `description` varchar(200) NOT NULL,
  `createAt` date NOT NULL,
  `photoLink` varchar(200) NOT NULL,
  `userID` int(11) NOT NULL,
  PRIMARY KEY (`postID`),
  UNIQUE KEY `postID_UNIQUE` (`postID`),
  KEY `user_ID_idx` (`userID`),
  CONSTRAINT `user_ID` FOREIGN KEY (`userID`) REFERENCES `user` (`userID`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `photoposts`
--

LOCK TABLES `photoposts` WRITE;
/*!40000 ALTER TABLE `photoposts` DISABLE KEYS */;
INSERT INTO `photoposts` VALUES (1,'description1','2019-05-02','photoLink1',3),(2,'description2','2019-05-01','photoLink2',2),(3,'description3','2019-05-01','photoLink3',6),(4,'description4','2019-05-04','photoLink4',9),(5,'description5','2019-05-06','photoLink5',2),(6,'description6','2019-05-01','photoLink6',3),(7,'description7','2019-05-01','photoLink7',5),(8,'description8','2019-05-07','photoLink8',1),(9,'description9','2019-05-06','photoLink9',7),(10,'description10','2019-05-03','photoLink10',8),(11,'description11','2019-05-09','photoLink11',10),(12,'description12','2019-05-08','photoLink12',5),(13,'description13','2019-05-01','photoLink13',9),(14,'description14','2019-05-01','photoLink14',3),(15,'description15','2019-05-01','photoLink15',4),(16,'description16','2019-05-01','photoLink16',3),(17,'description17','2019-05-10','photoLink17',6),(18,'description18','2019-05-01','photoLink18',8),(19,'description19','2019-05-02','photoLink19',2),(20,'description20','2019-05-01','photoLink20',1),(21,'description21','2019-05-01','photoLink21',5),(22,'description22','2019-05-01','photoLink22',7),(23,'description23','2019-05-01','photoLink23',2);
/*!40000 ALTER TABLE `photoposts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tags`
--

DROP TABLE IF EXISTS `tags`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `tags` (
  `tagID` int(11) NOT NULL AUTO_INCREMENT,
  `tag` varchar(45) NOT NULL,
  PRIMARY KEY (`tagID`),
  UNIQUE KEY `tagID_UNIQUE` (`tagID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tags`
--

LOCK TABLES `tags` WRITE;
/*!40000 ALTER TABLE `tags` DISABLE KEYS */;
/*!40000 ALTER TABLE `tags` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tags_posts`
--

DROP TABLE IF EXISTS `tags_posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `tags_posts` (
  `postID` int(11) NOT NULL,
  `tagID` int(11) NOT NULL,
  KEY `post_ID_idx` (`postID`),
  KEY `tag_ID_idx` (`tagID`),
  CONSTRAINT `post_ID` FOREIGN KEY (`postID`) REFERENCES `photoposts` (`postID`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `tag_ID` FOREIGN KEY (`tagID`) REFERENCES `tags` (`tagID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tags_posts`
--

LOCK TABLES `tags_posts` WRITE;
/*!40000 ALTER TABLE `tags_posts` DISABLE KEYS */;
/*!40000 ALTER TABLE `tags_posts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `user` (
  `userID` int(11) NOT NULL AUTO_INCREMENT,
  `userName` varchar(45) NOT NULL,
  PRIMARY KEY (`userID`),
  UNIQUE KEY `userName_UNIQUE` (`userName`),
  UNIQUE KEY `userID_UNIQUE` (`userID`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (4,'AlbertHolt'),(10,'AlexanderRadorin'),(7,'AnnFilips'),(9,'AntonMin'),(6,'LolitaYamada'),(3,'MiraObolenskaya'),(2,'NinaVolk'),(5,'RinaBaka'),(1,'UlyanaChernetskaya'),(8,'YuliyaHeinz');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-05-26 21:50:20
