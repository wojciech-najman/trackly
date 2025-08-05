<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400"></a></p>

<p align="center">
<a href="https://travis-ci.org/laravel/framework"><img src="https://travis-ci.org/laravel/framework.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

## Installation

- Put project directory under php web server or use services like [Laravel Herd](https://herd.laravel.com) as PHP engine and domain manager (docker setup is not provided)
- Create MySQL database and add its credentials in .env file
- Generate Google oAuth2 credentials if you want to use Google authentication and put them in .env file with valid callback URL
- Run `composer install` and `npm run install`
- Run `php artisan migrate`
- Run `npm run dev` or `npm run watch` if you want to make changes to JS files
- Open domain assigned to project directory in your php web server setup and you are ready to go!
