const express = require('express');
const mainRouter = require('./routes/mainRoutes');

const app = express();


//Me deja compartir los archivos de public
app.use(express.static('public'));

app.use('/', mainRouter);

app.use('/detail', mainRouter);

//Me permite utilizar la funcion render
app.set('view engine', 'ejs');

//Le digo a express donde esta la carpeta views
app.set('views', 'src/views');

app.listen(process.env.PORT || 3000, () => {
    console.log('Levanto el server 3000');
}) 