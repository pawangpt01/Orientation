require('dotenv').config();
module.exports = {
DB_HOST : process.env.DB_HOST,
DB_USERNAME: process.env.DB_USERNAME,
DB_PASSWORD: process.env.DB_PASSWORD,
PORT : process.env.PORT,
BASE_URL:process.env.BASE_URL,
DB_NAME:process.env.DB_NAME
}