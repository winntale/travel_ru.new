const mysql = require("mysql");
const jwt = require('jsonwebtoken');

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_REG
});


exports.register = (req, res) => {
    console.log(req.body);

    const { name, email, password, passwordConfirm } = req.body;

    db.query('SELECT email FROM loggedusers WHERE email = ?', [email], async (error, results) => {
        if(error){
            console.log(error);
        }

        if (email.length == 0 || password.length == 0) {
            return res.render('register', {
                message: 'Вы не ввели почту или пароль'
            })
        }

        if (results.length > 0){
            return res.render('register', {
                message: 'Этот адрес электронной почты уже используется'
            })
        } else if( password !== passwordConfirm){
            return res.render('register', {
                message: 'Пароли не совпадают'
            });
        }

        db.query('INSERT INTO loggedUsers SET ?', {name: name, email: email, password: password }, (error, results) =>{
            if(error){
                console.log(error);
            } else {
                return res.render('register', {
                    name: name,
                    email: email,
                    message: 'Спасибо за регистрацию!'
                });
            }
        })
    });
}

exports.auth = (req, res) => {
    console.log(req.body)
    const { email, password } = req.body;

    db.query('SELECT email, password FROM loggedusers WHERE (email = ? AND password = ?)', [email, password], async (error, results) => {
        if(error){
            console.log(error);
        }
        console.log(results)
        if (email.length == 0 || password.length == 0) {
            return res.render('auth', {
                message: 'Вы не ввели почту или пароль'
            })
        }
        if (results.length > 0 && email == [email] && password == [password]){
            if(error){
                console.log(error);
            }
            return res.render('profile', {
                name: db.query('SELECT name FROM loggedusers WHERE (email = ? AND password = ?)', [email, password]).values[-1],
                email: email,
            });
        }
        else {
            return res.render('auth', {
                message: 'Неправильная почта или пароль'
            }); 
        }
    });
}

// exports.chngName = (req, res) => {
//     const { name } = req.body;

//     db.query('UPDATE loggedusers SET name = ? WHERE name = namePrev', [name], async (error, results) => {
//         if(error){
//             console.log(error);
//         }
//             return res.render('profile', {
//                 name: name
//             });
//         });
// }