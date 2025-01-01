<?php
$host="localhost";
$user="root";
$pass="";
$database="book";
$connection=mysqli_connect($host,$user,$pass,$database);
if($connection){
    echo"successfully connected <br>";
    
}else{
    die("could not connect");
}
$sql="INSERT INTO student(name,email,phone) VALUES('jomol','jomol123@gmail.com','9087655343')";
mysqli_query($connection,$sql);
mysqli_close($connection);