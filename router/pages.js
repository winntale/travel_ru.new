const express = require("express");
const app = express();
const router = express.Router();
const mysql = require("mysql");

const db2 = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_INFO
})


// main level

router.get('/', (reg, res) => {
        db2.query('SELECT country_name, country_desc FROM countries', (err, rows) => { 
            if(err) throw err; 
            res.render('index', { 
                country1: rows[0].country_name, country_desc1: rows[0].country_desc,
                country2: rows[1].country_name, country_desc2: rows[1].country_desc, 
                country3: rows[2].country_name, country_desc3: rows[2].country_desc,
                country4: rows[3].country_name, country_desc4: rows[3].country_desc,
                country5: rows[4].country_name, country_desc5: rows[4].country_desc,
                country6: rows[5].country_name, country_desc6: rows[5].country_desc,
                country7: rows[6].country_name, country_desc7: rows[6].country_desc,
                country8: rows[7].country_name, country_desc8: rows[7].country_desc,
                country9: rows[8].country_name, country_desc9: rows[8].country_desc,
                country10: rows[9].country_name, country_desc10: rows[9].country_desc
        });
    });
});

router.get('/register', (reg, res) => {
    res.render('register');
});

router.get('/auth', (reg, res) => {
    res.render('auth');
});


router.get('/profile', (reg, res) => {
    res.render('profile');
});


router.get('/aboutUs', (reg, res) => {
    res.render('aboutUs');
});

router.get('/feedback', (reg, res) => {
    res.render('feedback');
});

router.get('/inDev', (reg, res) => {
    res.render('inDev');
});

router.get('/qna', (reg, res) => {
    res.render('qna');
});

router.get('/reviews', (reg, res) => {
    res.render('reviews');
});

router.get('/sitemap', (reg, res) => {
    res.render('sitemap');
});

// china (id 7)

router.get('/china', (reg, res) => {
    db2.query('SELECT * FROM countries WHERE id_country = 7', (err, rows) => { 
        if(err) throw err; 
        res.render('turkey/turkey', { 
            foundation: rows[0].foundation,
            lang: rows[0].lang,
            government_form: rows[0].government_form,
            territory: rows[0].territory,
            population: rows[0].population,
            capital: rows[0].capital,
            currency: rows[0].currency,
            time_zone: rows[0].time_zone,
            largest_cities: rows[0].largest_cities,
            country_info: rows[0].country_info
        });
    });
});

// egypt (id 3)

router.get('/egypt', (reg, res) => {
    db2.query('SELECT * FROM countries WHERE id_country = 3', (err, rows1) => { 
        if(err) throw err; 
        db2.query('SELECT place_name, place_desc FROM places WHERE id_country = 3', (err, rows2) => {
            if(err) throw err;
            res.render('egypt/egypt', { 
                foundation: rows1[0].foundation,
                lang: rows1[0].lang,
                government_form: rows1[0].government_form,
                territory: rows1[0].territory,
                population: rows1[0].population,
                capital: rows1[0].capital,
                currency: rows1[0].currency,
                time_zone: rows1[0].time_zone,
                largest_cities: rows1[0].largest_cities,
                country_info: rows1[0].country_info,

                place_name1: rows2[0].place_name, place_desc1: rows2[0].place_desc,
                place_name2: rows2[1].place_name, place_desc2: rows2[1].place_desc,
                place_name3: rows2[2].place_name, place_desc3: rows2[2].place_desc
            });
        });
    });
});

// egypt places (id = 10, 11, 12)

router.get('/egypt-pyramids', (reg, res) => {
    db2.query('SELECT * FROM places WHERE id_place = 10', (err, rows) => {
        if(err) throw err;
        res.render('egypt/places/pyramids', {
            place_info: rows[0].place_info,
            categories: rows[0].categories,
            cost: rows[0].cost,
            inspection_time: rows[0].inspection_time,
            opening_hours: rows[0].opening_hours,
            adress: rows[0].adress,
            popularity: rows[0].popularity
        });
    });
});

router.get('/egypt-bigSphinx', (reg, res) => {
    db2.query('SELECT * FROM places WHERE id_place = 11', (err, rows) => {
        if(err) throw err;
        res.render('egypt/places/bigSphinx', {
            place_info: rows[0].place_info,
            categories: rows[0].categories,
            cost: rows[0].cost,
            inspection_time: rows[0].inspection_time,
            opening_hours: rows[0].opening_hours,
            adress: rows[0].adress,
            popularity: rows[0].popularity
        });
    });
});

router.get('/egypt-dashhur', (reg, res) => {
    db2.query('SELECT * FROM places WHERE id_place = 12', (err, rows) => {
        if(err) throw err;
        res.render('egypt/places/dashhur', {
            place_info: rows[0].place_info,
            categories: rows[0].categories,
            cost: rows[0].cost,
            inspection_time: rows[0].inspection_time,
            opening_hours: rows[0].opening_hours,
            adress: rows[0].adress,
            popularity: rows[0].popularity
        });
    });
});

// france (id 6)

router.get('/france', (reg, res) => {
    db2.query('SELECT * FROM countries WHERE id_country = 6', (err, rows) => { 
        if(err) throw err; 
        res.render('turkey/turkey', { 
            foundation: rows[0].foundation,
            lang: rows[0].lang,
            government_form: rows[0].government_form,
            territory: rows[0].territory,
            population: rows[0].population,
            capital: rows[0].capital,
            currency: rows[0].currency,
            time_zone: rows[0].time_zone,
            largest_cities: rows[0].largest_cities,
            country_info: rows[0].country_info
        });
    });
});

// greece (id 4)

router.get('/greece', (reg, res) => {
    db2.query('SELECT * FROM countries WHERE id_country = 4', (err, rows) => { 
        if(err) throw err; 
        res.render('turkey/turkey', { 
            foundation: rows[0].foundation,
            lang: rows[0].lang,
            government_form: rows[0].government_form,
            territory: rows[0].territory,
            population: rows[0].population,
            capital: rows[0].capital,
            currency: rows[0].currency,
            time_zone: rows[0].time_zone,
            largest_cities: rows[0].largest_cities,
            country_info: rows[0].country_info
        });
    });
});

// italy (id 5)

router.get('/italy', (reg, res) => {
    db2.query('SELECT * FROM countries WHERE id_country = 5', (err, rows) => { 
        if(err) throw err; 
        res.render('turkey/turkey', { 
            foundation: rows[0].foundation,
            lang: rows[0].lang,
            government_form: rows[0].government_form,
            territory: rows[0].territory,
            population: rows[0].population,
            capital: rows[0].capital,
            currency: rows[0].currency,
            time_zone: rows[0].time_zone,
            largest_cities: rows[0].largest_cities,
            country_info: rows[0].country_info
        });
    });
});

// japan (id 10)

router.get('/japan', (reg, res) => {
    db2.query('SELECT * FROM countries WHERE id_country = 10', (err, rows) => { 
        if(err) throw err; 
        res.render('turkey/turkey', { 
            foundation: rows[0].foundation,
            lang: rows[0].lang,
            government_form: rows[0].government_form,
            territory: rows[0].territory,
            population: rows[0].population,
            capital: rows[0].capital,
            currency: rows[0].currency,
            time_zone: rows[0].time_zone,
            largest_cities: rows[0].largest_cities,
            country_info: rows[0].country_info
        });
    });
});

// korea (id 8)

router.get('/korea', (reg, res) => {
    db2.query('SELECT * FROM countries WHERE id_country = 8', (err, rows) => { 
        if(err) throw err; 
        res.render('turkey/turkey', { 
            foundation: rows[0].foundation,
            lang: rows[0].lang,
            government_form: rows[0].government_form,
            territory: rows[0].territory,
            population: rows[0].population,
            capital: rows[0].capital,
            currency: rows[0].currency,
            time_zone: rows[0].time_zone,
            largest_cities: rows[0].largest_cities,
            country_info: rows[0].country_info
        });
    });
});

// oae (id 2)

router.get('/oae', (reg, res) => {
    db2.query('SELECT * FROM countries WHERE id_country = 2', (err, rows1) => { 
        if(err) throw err; 
        db2.query('SELECT place_name, place_desc FROM places WHERE id_country = 2', (err, rows2) => {
            if(err) throw err;
            res.render('oae/oae', { 
                foundation: rows1[0].foundation,
                lang: rows1[0].lang,
                government_form: rows1[0].government_form,
                territory: rows1[0].territory,
                population: rows1[0].population,
                capital: rows1[0].capital,
                currency: rows1[0].currency,
                time_zone: rows1[0].time_zone,
                largest_cities: rows1[0].largest_cities,
                country_info: rows1[0].country_info,

                place_name1: rows2[0].place_name, place_desc1: rows2[0].place_desc,
                place_name2: rows2[1].place_name, place_desc2: rows2[1].place_desc,
                place_name3: rows2[2].place_name, place_desc3: rows2[2].place_desc
            });
        });
    });
});

// oae places (id = 7, 8, 9)

router.get('/oae-burjKhalifa', (reg, res) => {
    db2.query('SELECT * FROM places WHERE id_place = 7', (err, rows) => {
        if(err) throw err;
        res.render('oae/places/burjKhalifa', {
            place_info: rows[0].place_info,
            categories: rows[0].categories,
            cost: rows[0].cost,
            inspection_time: rows[0].inspection_time,
            opening_hours: rows[0].opening_hours,
            adress: rows[0].adress,
            popularity: rows[0].popularity
        });
    });
});

router.get('/oae-skiDubai', (reg, res) => {
    db2.query('SELECT * FROM places WHERE id_place = 8', (err, rows) => {
        if(err) throw err;
        res.render('oae/places/skiDubai', {
            place_info: rows[0].place_info,
            categories: rows[0].categories,
            cost: rows[0].cost,
            inspection_time: rows[0].inspection_time,
            opening_hours: rows[0].opening_hours,
            adress: rows[0].adress,
            popularity: rows[0].popularity
        });
    });

});

router.get('/oae-dancingFountains', (reg, res) => {
    db2.query('SELECT * FROM places WHERE id_place = 9', (err, rows) => {
        if(err) throw err;
        res.render('oae/places/dancingFountains', {
            place_info: rows[0].place_info,
            categories: rows[0].categories,
            cost: rows[0].cost,
            inspection_time: rows[0].inspection_time,
            opening_hours: rows[0].opening_hours,
            adress: rows[0].adress,
            popularity: rows[0].popularity
        });
    });
});

// turkey (id 1)

router.get('/turkey', (reg, res) => {
    db2.query('SELECT * FROM countries WHERE id_country = 1', (err, rows1) => { 
        if(err) throw err; 
        db2.query('SELECT place_name, place_desc FROM places WHERE id_country = 1', (err, rows2) => {
            if(err) throw err;
            db2.query('SELECT hotel_name, hotel_desc FROM hotels WHERE id_country = 1', (err, rows3) => {
                if(err) throw err;
                db2.query('SELECT restaurant_name, restaurant_desc FROM restaurants WHERE id_country = 1', (err, rows4) => {
                    if(err) throw err;
                    res.render('turkey/turkey', { 
                        foundation: rows1[0].foundation,
                        lang: rows1[0].lang,
                        government_form: rows1[0].government_form,
                        territory: rows1[0].territory,
                        population: rows1[0].population,
                        capital: rows1[0].capital,
                        currency: rows1[0].currency,
                        time_zone: rows1[0].time_zone,
                        largest_cities: rows1[0].largest_cities,
                        country_info: rows1[0].country_info,
        
                        place_name1: rows2[0].place_name, place_desc1: rows2[0].place_desc,
                        place_name2: rows2[1].place_name, place_desc2: rows2[1].place_desc,
                        place_name3: rows2[2].place_name, place_desc3: rows2[2].place_desc,
                        place_name4: rows2[3].place_name, place_desc4: rows2[3].place_desc,
                        place_name5: rows2[4].place_name, place_desc5: rows2[4].place_desc,
                        place_name6: rows2[5].place_name, place_desc6: rows2[5].place_desc,

                        hotel_name1: rows3[0].hotel_name, hotel_desc1: rows3[0].hotel_desc,

                        restaurant_name1: rows4[0].restaurant_name, restaurant_desc1: rows4[0].restaurant_desc
                    });
                });
            });
        });
    });
});

// turkey hotels

router.get('/turkey-delphin', (reg, res) => {
    db2.query('SELECT * FROM hotels WHERE id_hotel = 1', (err, rows) => {
        if(err) throw err;
        res.render('turkey/hotels/delphin', {
            hotel_info: rows[0].hotel_info,
            categories: rows[0].categories,
            cost: rows[0].cost,
            opening_hours: rows[0].opening_hours,
            adress: rows[0].adress,
            popularity: rows[0].popularity,
        });
    });
});

// turkey places (id = 1 .. 6)

router.get('/turkey-stsofia', (reg, res) => {
    db2.query('SELECT * FROM places WHERE id_place = 1', (err, rows) => {
        if(err) throw err;
        res.render('turkey/places/stsofia', {
            place_info: rows[0].place_info,
            categories: rows[0].categories,
            cost: rows[0].cost,
            inspection_time: rows[0].inspection_time,
            opening_hours: rows[0].opening_hours,
            adress: rows[0].adress,
            popularity: rows[0].popularity
        });
    });
});

router.get('/turkey-archeologicalMuseum', (reg, res) => {
    db2.query('SELECT * FROM places WHERE id_place = 2', (err, rows) => {
        if(err) throw err;
        res.render('turkey/places/archeologicalMuseum', {
            place_info: rows[0].place_info,
            categories: rows[0].categories,
            cost: rows[0].cost,
            inspection_time: rows[0].inspection_time,
            opening_hours: rows[0].opening_hours,
            adress: rows[0].adress,
            popularity: rows[0].popularity
        });
    });
});

router.get('/turkey-parkEmirgan', (reg, res) => {
    db2.query('SELECT * FROM places WHERE id_place = 3', (err, rows) => {
        if(err) throw err;
        res.render('turkey/places/parkEmirgan', {
            place_info: rows[0].place_info,
            categories: rows[0].categories,
            cost: rows[0].cost,
            inspection_time: rows[0].inspection_time,
            opening_hours: rows[0].opening_hours,
            adress: rows[0].adress,
            popularity: rows[0].popularity
        });
    });
});

router.get('/turkey-palaceTopkapi', (reg, res) => {
    db2.query('SELECT * FROM places WHERE id_place = 4', (err, rows) => {
        if(err) throw err;
        res.render('turkey/places/palaceTopkapi', {
            place_info: rows[0].place_info,
            categories: rows[0].categories,
            cost: rows[0].cost,
            inspection_time: rows[0].inspection_time,
            opening_hours: rows[0].opening_hours,
            adress: rows[0].adress,
            popularity: rows[0].popularity
        });
    });
});

router.get('/turkey-greenCanyon', (reg, res) => {
    db2.query('SELECT * FROM places WHERE id_place = 5', (err, rows) => {
        if(err) throw err;
        res.render('turkey/places/greenCanyon', {
            place_info: rows[0].place_info,
            categories: rows[0].categories,
            cost: rows[0].cost,
            inspection_time: rows[0].inspection_time,
            opening_hours: rows[0].opening_hours,
            adress: rows[0].adress,
            popularity: rows[0].popularity
        });
    });
});

router.get('/turkey-kappadokia', (reg, res) => {
    db2.query('SELECT * FROM places WHERE id_place = 6', (err, rows) => {
        if(err) throw err;
        res.render('turkey/places/kappadokia', {
            place_info: rows[0].place_info,
            categories: rows[0].categories,
            cost: rows[0].cost,
            inspection_time: rows[0].inspection_time,
            opening_hours: rows[0].opening_hours,
            adress: rows[0].adress,
            popularity: rows[0].popularity
        });
    });
});

// turkey restaurants

router.get('/turkey-adella', (reg, res) => {
    db2.query('SELECT * FROM restaurants WHERE id_restaurant = 1', (err, rows) => {
        if(err) throw err;
        res.render('turkey/restaurants/adella', {
            restaurant_info: rows[0].restaurant_info,
            categories: rows[0].categories,
            cost: rows[0].cost,
            opening_hours: rows[0].opening_hours,
            adress: rows[0].adress,
            popularity: rows[0].popularity,
        });
    });
});

// vietnam (id 9)

router.get('/vietnam', (reg, res) => {
    db2.query('SELECT * FROM countries WHERE id_country = 9', (err, rows) => { 
        if(err) throw err; 
        res.render('turkey/turkey', { 
            foundation: rows[0].foundation,
            lang: rows[0].lang,
            government_form: rows[0].government_form,
            territory: rows[0].territory,
            population: rows[0].population,
            capital: rows[0].capital,
            currency: rows[0].currency,
            time_zone: rows[0].time_zone,
            largest_cities: rows[0].largest_cities,
            country_info: rows[0].country_info
        });
    });
});

module.exports = router;