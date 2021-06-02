/* eslint-disable @typescript-eslint/no-unused-vars */
import { config } from 'dotenv';
import express, { urlencoded } from 'express';
import exphbs from 'express-handlebars';
import { resolve } from 'path';
import { appRouter } from './app.router';
import helpers from 'handlebars-helpers';
const inHelpers = helpers();

config({ path: 'variables.env' });

//=|*Env Variables*|=//
const PORT = process.env.PORT || 3001;

//=|*Input*|=//
const app = express();

//=|*Middlewares*|=//
//=|static folders/files/=>
// app.use(express.static(resolve(process.cwd(), "/public")));
app.use(express.static('public'));

//=|Body Parser/=>
app.use(urlencoded({ extended: false }));

//=|Handlebars Config/=>
app.set('views', resolve(process.cwd(), 'src', 'views'));
app.engine('.hbs', exphbs({ extname: '.hbs' }));
app.set('view engine', '.hbs');

//=|*Routes*|=//
app.use(appRouter);

//=|*Output*|=//
app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`The server is running on : http://localhost:${PORT}`);
});