import express from 'express';
import path from 'path';
import {fileURLToPath} from 'url';

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', './views');

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(__dirname + '/views'));

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(port,() => {
    console.log(`Servidor rodando na porta ${port}`);
});