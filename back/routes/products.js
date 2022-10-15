const express=require("express");
const router=express.Router();

const {getProducts, newProduct} = require("../controllers/productsController") //Traemos la respuesta json desde el controlador

router.route('/productos').get(getProducts); //Establecemos desde qué ruta queremos ver el getProducts
router.route('/producto/nuevo').post(newProduct); //Establecemosla ruta

module.exports = router;