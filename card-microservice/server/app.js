import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import indexRouter from './routes/index';
import cardsRouter from './routes/cards';

var app = express();

app.use(logger('dev'));
//https://stackoverflow.com/questions/47232187/express-json-vs-bodyparser-json
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
app.use('/', indexRouter);
app.use('/c', cardsRouter);

export default app;
