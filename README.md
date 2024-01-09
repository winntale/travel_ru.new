## The description is presented in English and Russian languages

# EN | A website about travel developed as part of university study

## About this project
### Purpose
The organization for which the site was developed is a travel operator, that is, it specializes in a specific topic – tourism and travel. Such a topic implies the presence on the site of a large amount of information, catalogs for choosing a certain service (in this case, the choice of a hotel, restaurant). Thus, the Internet resource is classified as a type of single-topic information sites.  

The purpose of the website development is to reduce the time spent by the user on choosing a certain service (selection of tours, booking hotels and tables in restaurants). This is realized by simplifying the information about the countries and the services provided within them contained on the company's existing website "Travel.Ru ".

### Pages
Note that all pages contain a header and footer.

The main page, in addition to the above, contains: a catalog of countries, providing brief information about each tourist country; a block with partners, containing advertisements on the websites of partner companies; a block with reviews, including a list of reviews; as well as a button to go to a page with a review writing form.

The page of a particular tourist country contains a table "summary of the country", which provides general information about the corresponding page of the tourist country. Also on this page there is information about the nearest flights to the airports of this country, information about the most popular attractions, hotels and restaurants of the country.

The pages of attractions, hotels and restaurants include a statistics block, which contains all the information necessary for a tourist about a place or service. Below is a photo gallery of the place and brief information about it.

Pages of the "Company" type. The "About Us" page is an article with information about the company, "Feedback" is a form to fill out, in which the sender's name is entered, as well as his request. "Q&A" is also a collection of frequently asked questions about tourism and travel, to which a detailed answer is given here.

## Pre-downloading
For fully-functional launch of this site, you need a mean to ensure the local web server is built. For example, use XAMPP.

> [Download XAMPP for Windows](https://sourceforge.net/projects/xampp/files/XAMPP%20Windows/8.2.12/xampp-windows-x64-8.2.12-0-VS16-installer.exe)  
> [Download XAMPP for Linux](https://sourceforge.net/projects/xampp/files/XAMPP%20Linux/8.2.12/xampp-linux-x64-8.2.12-0-installer.run)  
> [Download XAMPP for macOS](https://sourceforge.net/projects/xampp/files/XAMPP%20Mac%20OS%20X/8.2.4/xampp-osx-8.2.4-0-installer.dmg)  

Also, for creating databases, you need to download MySQL or else DBMS.
> [MySQL for Windows](https://dev.mysql.com/downloads/file/?id=523568)

***Make sure you have Node.js 16.0 version or newer installed on your device***
> [Download Node 21.5.0 for Windows](https://nodejs.org/dist/v21.5.0/node-v21.5.0-x64.msi)  
> [Download Node 21.5.0 for Linux](https://nodejs.org/dist/v21.5.0/node-v21.5.0-linux-x64.tar.xz)  
> [Download Node 21,5,0 for macOS](https://nodejs.org/dist/v21.5.0/node-v21.5.0.pkg)  


## Launch
First, launch your XAMPP control panel and start Apache and MySQL modules. Then, click on **Admin** button next to the MySQL module or just open the phpmyadmin link:
> http://localhost/phpmyadmin  

For login use the password that you specified when creating the server in DBMS.  
***Now you need to import file localhost.sql into phpmyadmin to create databases and insert columns into them.***

Finally, go to your code editor, open the terminal and launch project
> npm start

And if website is not opened, you can open the localhost link:
> localhost:5000




# RU | Веб-сайт о путешествиях, разработанный в рамках обучения в университете.

## О проекте
### Цель работы
Организация, для которой разрабатывался сайт, является туристическим оператором, то есть специализируется на конкретной тематике – туризм и путешествия. Такая тематика подразумевает наличие на сайте большого количества информации, каталогов для выбора определённой услуги (в данном случае выбор отеля, ресторана). Так, интернет-ресурс отнесён к типу однотематических информационных сайтов.

Целью разработки сайта является сокращение затрачиваемого пользователем времени на выбор определённой услуги (подбор туров, бронирование отелей и столиков в ресторанах). Это реализуется упрощением информации о странах и предоставляемых внутри них услугах, содержащейся на уже существующем сайте компании «Travel.Ru».

### Страницы
Отметим, что все страницы содержат заголовок и "подвал".

Главная страница, помимо вышеперечисленного, содержит: каталог стран, предоставляющий краткую информацию о каждой туристической стране; блок с партнёрами, содержащий рекламу на сайты компаний-партнёров; блок с отзывами, включающий в себя список отзывов; а также кнопку-переход на страницу с формой написания отзыва.

Страница отдельной туристической страны содержит таблицу «краткая информацию о стране», в которой предоставлена общая информация о соответствующей странице туристической стране. Также на этой странице присутствует информация о ближайших авиарейсах в аэропорты данной страны, информация о наиболее популярных достопримечательностях, отелях и ресторанах страны.

Страницы достопримечательностей, отелей и ресторанов включают в себя блок статистики, в котором содержится вся необходимая туристу информация о месте, услуге. Ниже представлена фотогалерея места и краткая информация о нём.

Страницы типа «Компания». Страница «О нас» представляет из себя статью с информацией о компании, «Обратная связь» является формой для заполнения, в которую вносится имя отправителя, а также его запрос. «Q&A» же является сборником частозадаваемых вопросов о туризме и путешествиях, на которые здесь дан подробный ответ.

## Предустановка необходимых компонентов
Для полноценного запуска этого сайта вам необходимо средство, обеспечивающее создание локального веб-сервера. К примеру, используйте XAMPP.

> [Скачать XAMPP для Windows](https://sourceforge.net/projects/xampp/files/XAMPP%20Windows/8.2.12/xampp-windows-x64-8.2.12-0-VS16-installer.exe)  
> [Скачать XAMPP для Linux](https://sourceforge.net/projects/xampp/files/XAMPP%20Linux/8.2.12/xampp-linux-x64-8.2.12-0-installer.run)  
> [Скачать XAMPP для macOS](https://sourceforge.net/projects/xampp/files/XAMPP%20Mac%20OS%20X/8.2.4/xampp-osx-8.2.4-0-installer.dmg)  

Также для создания и заполнения базы данных необходима MySQL или любая другая СУБД.
> [MySQL для Windows](https://dev.mysql.com/downloads/file/?id=523568)

***Убедитесь, что на вашем устройстве установлена версия Node.js 16.0 или новее***
> [Скачать Node 21.5.0 для Windows](https://nodejs.org/dist/v21.5.0/node-v21.5.0-x64.msi)  
> [Скачать Node 21.5.0 для Linux](https://nodejs.org/dist/v21.5.0/node-v21.5.0-linux-x64.tar.xz)  
> [Скачать Node 21,5,0 для macOS](https://nodejs.org/dist/v21.5.0/node-v21.5.0.pkg)  


## Запуск
Сначала запустите панель управления XAMPP и запустите модули Apache и MySQL. Затем нажмите на кнопку **Admin** рядом с модулем MySQL или просто откройте ссылку phpmyadmin:
> http://localhost/phpmyadmin  

Для входа в систему используйте пароль, который вы указали при создании сервера в СУБД.  
***Теперь вам нужно импортировать файл localhost.sql в phpmyadmin, чтобы создавать базы данных и вставлять в них столбцы.***

Наконец, запустите свой редактор кода, откройте терминал и запустите проект, используя следующую команду
> npm start

И если веб-сайт не открывается, вы можете открыть ссылку локального сервера:
> localhost:5000
