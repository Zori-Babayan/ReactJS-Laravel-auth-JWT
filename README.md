<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>
</p>

## Installation 

1. Скопируйте `.env.example` в `.env` и настройте учетные данные базы данных. <br>
2. Запустите `composer install` <br>
3. Установите ключ шифрования, выполнив `php artisan key:generate --ansi`<br>
4. Запустить миграцию `php artisan migrate --seed` БД MySql <br>
4.1 Если нет MySql, меням настройку в файле `.env` строки с `11`по`16` код <br>
    `DB_CONNECTION=sqlite ` <br>
    `#DB_HOST=127.0.0.1` <br>
    `#DB_PORT=3306` <br>
    `#DB_DATABASE=laravel` <br>
    `#DB_USERNAME=root` <br>
    `#DB_PASSWORD=` <br>
4.2 Возвращаемся к пункту `4` <br>
5. Запустите локальный сервер, выполнив `php artisan serve`<br>
6. Откройте новый терминал и перейдите в папку `react`.<br>
7. Запустите `npm i`<br>
8. Запустите `npm start`<br>
9. Если есть вопросы :) https://t.me/Zor_babayan
