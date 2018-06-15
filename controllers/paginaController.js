let self = {}
const paginaService = require('../services/paginaService.js')
const productosC = paginaService.showImages()
console.log(productosC)

self.home = function(req, res){
        
let page = req.query['page']
let newProducts = []
if (!page) {
page =1
}

const productsPerPage = 3
const offset = (page - 1) * productsPerPage

for (var i = offset; i < offset + productsPerPage; i++) {
newProducts.push(productosC[i])
}



return res.render ('index', {
page: page,
productos: newProducts

})

}

module.exports = self


    
