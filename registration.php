<?php include "header.php";?> 
	       <form action="#" method="post"> 
				    <br>
				    <br>

                    <div class="row">
                        <fieldset> <!-- рамка -->
                                 <legend> Регистрация </legend> <!-- title -->
                            <div>
                                <label for="text"> Логин
                                </label>
                                        <input id="text" type="text">
                            </div>

                            <div>
                                <label for="email">E-mail
                                </label>
                                        <input id="email" type="email">
                            </div>
                            <div>
                                <label for="pwd">Пароль
                                </label>
                                        <input id="pwd" type="password">
                            </div>
                        </fieldset>
                            <br>
                        <fieldset>                         
                    </div>    
                        


                        <legend> Игрок 
                        </legend> <!-- title -->
                    <div>
                        <label for="text"> Придумайте имя 
                        </label>
                            <input id="text" type="text">
                    </div>
				    <br>
                    <div>
                        <label for="textarea">Для комментариев и пожеланий 
                        </label>
                                <textarea id="textarea">                            
                                </textarea>
                    </div>
                </fieldset>
				    <br>
                 <fieldset>
                        <legend>Выберите вариант игры
                        </legend>
                                <label><input name="sex" type="radio">Один игрок
                                </label>
                                <label><input name="sex" type="radio">Несколько игроков
                </fieldset>
				    <br>
                        <fieldset>
                                <legend>Здесь Вы можете загрузить фото профиля
                                </legend>
                    <div>
                        <label for="imageFile">Фото
                        </label>
                                <input id="imageFile" type="file" accept="image/*">
                    </div>
                        </fieldset>    
				    <br>
				    <br>
                        <legend>                            
                        </legend>
                                <input type="submit" value="Отправить">
                                <input type="reset" value="Сброс">                               
            </form>

</body>
</html>