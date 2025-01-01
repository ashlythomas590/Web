<html>
    <head>
        <title>intro to GET & POST</title>

    </head>

    <body>
        <form action="1.php" method="GET">
            <label for="name">Enter your name</label><br>
            <input type="text" name="name" id="name"><br>
            <input type="submit">
        </form>
    <?php
      $name=$_GET["name"];
      echo "Your name is $name";
    ?>
    </body> 
</html>
             