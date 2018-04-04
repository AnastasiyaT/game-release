<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>Игра</title>
	<link rel="stylesheet" type="text/css" href="css/style.css">
</head>
<body>
 <?php

  $connection = mysqli_connect('localhost','root','','my_game');

 if(!$connection) {
    exit(mysql_error());
 } 

 // $result = mysql_query("SELECT * FROM level");

 // $row = mysql_fetch_array($result);
 // echo $row['name'];



//mysql_close();

 ?>   

	<div class="game-container">       
            <div class="menu flex3"> Для начала игры кликните на кубик.
                <img class="gameField" src="img/game.jpg" alt="фотография"> 
            </div>    
            <div class="content">
                <a class="buttons" href='/'>в начало</a>
                <div class="contentIn1"><br>
                    Каждый участник начинает игру с измерения "Мир людей" - номер 81. 

                </div>
                <div class="contentIn2"><br>
                    <div class="text2">
                    Для начала игры наведите курсор мыши на кубик и кликните по нему.
                    </div>
                    <div class="img">
                        <img id="img1" class="gif1" src="img/gif.gif" alt="фотография">    
                        <img id="img2" class="gif2" src="img/gif.gif" alt="фотография"> 
                    </div>                                           
                </div>               
            </div>        
    </div>

    <script src="js/model.js"></script>
    <script src="js/control.js"></script>
</body>
</html>