const products = require('../products.json')

const getProduct = (req, res) => {
    const item = products.find(val => val.id === parseInt(req.params.id))
    if(item){
        return res.status(200).send(item)
    }
    res.status(500).send("Not on the list")
}

module.exports = getProduct