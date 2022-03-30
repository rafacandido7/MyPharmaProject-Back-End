const express = require ('express');

const Product = require ('../models/produto.model.js');

module.exports = {
    async index(req, res) {
        const products = await Product.find();
        res.json({products});
    },
        async create (req, res) {
            const {bar_code, name, price, quantity, description} = req.body;
            const product = await Product.create ({
                bar_code,
                name, 
                price,
                quantity,
                description,
            });
            res.json({message:'Produto criado!', product});
    },

    async details (req, res) {
        const {_id} = req.params;
        const product = await Product.findOne({_id});
        res.json({message: 'Esses são os detalhes do produto.', product});
    },

    async forget (req,res) {
        const {_id} = req.params;
        const product = await Product.findByIdAndDelete({_id});
        return res.json({message:'Produto deletado!', product});
    },
    

    async update (req, res) {
        const {_id ,bar_code, name, price, quantity, description} = req.body;
        const data = {bar_code, name, price, quantity, description};
        const product = await Product.findByIdAndUpdate({_id}, data, {new:true});
        res.json({product});
    },
};
