-------------
TEMPOEDOELOE
-------------

The purpose of this website is about a website of a restaurant that sells Indonesian cuisines.
The way the website is designed is that it is a single page website consisted of 5 main sections; Home, About, Menu, Join Us, Contact

---------
File List
---------
1. index.html               - home page of the website / Home
2. main.js                  - main javascript file
3. mixitup.min.js           - javascript file for mix it up filter for the menu
4. gsap.min.js              - javascript file for animation of the landing page or the home page
5. swiper-bundle.min.js     - javascript file for the menu animation
6. app.js                   - javascript file for the server and the api
7. server.js                - javascript file for the server port
8. schedule-1.json          - JSON file for the get the schedule data
9. schedule-2.json          - JSON file for the get the schedule data
10. styles.css              - main styling file for the website
11. swiper-bundle.min.css   - styling file for the menu 
12. .estlintrc.json         - eslint file
13. app.test.js             - jest test file


------------
INSTRUCTIONS
------------
* Firstly, make sure that you have installed npm and all of the necessary extensions needed.
* Then, open all of the folder and go to your terminal and type 'npm run dev'
* Once the server start running, if a message saying [nodemon] starting `node server.js` showed up, it means that the server has started running.
* Open your browser and go to 'localhost:3000'
* The website should be displayed and ready to be explored.
* In order to run Eslint, the user can type 'npm run pretest' on the terminal
* In order to run the Jest test, the user can type 'npm test'


---------
Home Page
---------
* Contains the landing page of the website and the social medias of the restaurant
* Displays a 'SEE MENU' button that when clicked, will redirect the user to the menu section
* Javascript file source : main.js and gsap.min.js

* SOURCE CODE : 
    layout : Bedimcode's Youtube Channel https://www.youtube.com/watch?v=BS6blX035NM&t=873s
* Source for medias used :
    WillGoz' Youtube Channel s recipe video for Sambal Matah https://www.youtube.com/watch?v=dJGoSD9ATcw&t=17s
  

--------
About Us
--------
* Contains a brief information and description about the history of the restaurant
* Contains the services that the restaurant offer
* Javascript file source : main.js

* SOURCE CODE :
    layout : Bedimcode's Youtube Channel https://www.youtube.com/watch?v=5RIFrZEjURA&t=1870s
* Source for medias used :
    https://farm1.staticflickr.com/903/27708499598_b208885049_k.jpg


-----
Menu
-----
* Contains information about the menu, including the menu description and the name
* Javascript file source : main.js , mixitup.min.js , swiper-bundle.min.js

* SOURCE CODE : 
    mixitup filter https://www.kunkalabs.com/mixitup/docs/get-started/
    swiper-bundle.min.js : https://unpkg.com/browse/swiper@6.5.0/
    layout : Bedimcode's Youtube Channel https://www.youtube.com/watch?v=BS6blX035NM&t=873s
* Source for pictures used :
    https://www.lembehresort.com/wp-content/uploads/rendang-post-1200.jpg
    https://1.bp.blogspot.com/-ous4E9wXdCU/Wip_Wt5iW7I/AAAAAAAAAuc/qaKCRbRwZfQSMn1UH30bg-24R1Ktg5G7QCLcBGAs/s1600/ayam%2Bbumbu%2Brujak3.JPG
    https://www.dreamytable.com/wp-content/uploads/2020/01/Pisang-Goreng-Wijen.jpg
    https://s3.ap-southeast-2.amazonaws.com/photographers.com.au-prod-media/images/usr/a084f26f690dbc23a52e67027693f2b2/25/super_chickensatay31of1-dorotagrabowskakulka.jpg
    http://tokomesinkelapa.com/wp-content/uploads/2018/10/klepon1.jpg
    https://i0.wp.com/www.taletravels.com/wp-content/uploads/2020/04/0-soto-ayam-taletravels-TaleTravels.jpg
    https://4.bp.blogspot.com/-XFSK7CNsqW8/XG9qbyxhVgI/AAAAAAABJuA/jw7rLqZqr3UkOyhqUUyD3p4-KEXpgfzTwCLcBGAs/s1600/Screenshot_6.png
    https://i0.wp.com/resepkoki.id/wp-content/uploads/2019/12/Resep-Sambal-Petai.jpg?fit=1536%2C2048&ssl=1
    https://cdn-2.tstatic.net/bali/foto/bank/images/resep-sambal-matah-khas-bali-gampang-bikinnya-dan-dijamin-enak-pedasnya-pecah-di-mulut.jpg


--------
Join Us
--------
* Contains information about the membership type and its benefits
* Contains a membership form
* Javascript method used : GET, POST, DELETE
* Javascript file source : main.js , app.js, server.js

* The user will input their information into the form and once everything is correct, their data will be stored and a membership ID will be
    generated. Once generated, the user will be able to check their memberhship ID their previous submission will be displayed
    for the user to see. If the user chose not to terminate it, their information will still be stored. However, if the user terminates their
    membership, then if they recheck their ID, a pop up will show alerting the user that the ID is not found because their information has
    been deleted.
* If the user tries to submit a form or recheck their ID while having a bad connection, a pop up will show, alerting the user that their
    connection is not good and that there has been an error.
* SOURCE CODE : 
    Traversy Media's Youtube Channel https://www.youtube.com/watch?v=L72fhGm1tfE&t=3827s
    layout : Bedimcode's Youtube Channel https://www.youtube.com/watch?v=BS6blX035NM&t=873s
    pop up alert : Sweet Alert https://unpkg.com/sweetalert/dist/sweetalert.min.js


-----------
Contact Us
-----------
* Contains information about the restaurant's location, phone number, email address and question section
* Contains a question form for the user to submit
* Javascript method used : GET, POST, DELETE
* Javascript file source : main.js , app.js, server.js

* The user will input their information into the form and once everything is correct, their data will be stored and a submission ID will be
    generated. Once generated, the user will be able to check their submission ID and their previous submitted message will be displayed
    for the user to see. If the user chose not to delete it, their information will still be stored. However, if the user deletes their
    submission, then if they recheck their ID, a pop up will show alerting the user that the ID is not found because their information has
    been deleted.
* If the user tries to submit a form or recheck their ID while having a bad connection, a pop up will show, alerting the user that their
    connection is not good and that there has been an error.
* SOURCE CODE : 
    Traversy Media's Youtube Channel https://www.youtube.com/watch?v=L72fhGm1tfE&t=3827s
    layout : Bedimcode's Youtube Channel https://www.youtube.com/watch?v=BS6blX035NM&t=873s
    pop up alert : Sweet Alert https://unpkg.com/sweetalert/dist/sweetalert.min.js


------------
Our Schedule
------------
* Contains information about the opening times and the services available from the restaurant
* The data of the schedule was got from the JSON files (schedule-1.json and schedule-2.json)
* Javascript file source : main.json

* The user will be able to see the restaurant's schedule by clicking the button displayed and the information will then be displayed
* If the user tries to get the schedule whilst having a bad connection, a pop up will show, alerting the user that there has been an
    error with their connection.

* SOURCE CODE :
    LearnWebCode's Youtube Channel https://www.youtube.com/watch?v=rJesac0_Ftw
    Web Dev Simplified's Youtube Channel https://www.youtube.com/watch?v=MBaw_6cPmAw
