module.exports = {
    getAllHouses: (req, res) => {
        const dbInstance = req.app.get('db')
        dbInstance.get_all_houses().then((response) => {
            res.status(200).send(response)
        })
    },
    addHouse: (req, res) => {
        const dbInstance = req.app.get('db')
        let {name, address, city, state, zip, img, mortgage, rent} = req.body
        dbInstance.add_house({name, address, city, state, zip, img, mortgage, rent}).then((response) => {
            res.status(200).send(response)
        })
    },
    deleteHouse: (req, res) => {
        const dbInstance = req.app.get('db')
        let {id} = req.params

        dbInstance.delete_house({id}).then((response) => {
            res.status(200).send(response)
        })
    }
}