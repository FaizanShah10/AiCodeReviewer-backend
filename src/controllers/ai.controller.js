const aiServices = require('../services/ai.services');

module.exports.generateResponse = async (req, res) => {
        const code = req.body.code
        if(!code){
            return res.status(400).send("code is required")
        }

        const response = await aiServices(code)
        res.send(response)
}

