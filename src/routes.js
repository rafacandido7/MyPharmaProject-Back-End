const express = require ('express');
const {index, create, details, forget, update} = require ('./controllers/produtos.controller.js');
const routes = express.Router();


//Para listar todos os produtos.
routes.get('/api', index);


//Rotas dos Produtos.
routes.post('/api/create_product', create);
routes.get('/api/product_details/:_id', details);
routes.delete('/api/delete_product/:_id', forget);
routes.patch('/api/update_product/:_id', update);



module.exports = routes;
