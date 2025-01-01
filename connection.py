<?php
$host="localhost";
$user="root";
$pass="";
$database="web";
$connection=mysqli_connect($host,$user,$pass,$database);
if($connection){
   echo"successfully connected";
}
else{
    echo"could not connect";     
}
$sql="insert into contact(name,phone,email)
values('ashly','7994603950','ashlythomas776@gmail.com')";
mysqli_query($conn,$sql);
mysqli_close($conn);

}