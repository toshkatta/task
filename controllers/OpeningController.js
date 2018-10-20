const Opening = require('../components').opening

const seed = [
    { id: 1, title: 'Janitor' },
    { id: 2, title: 'Drone' },
    { id: 3, title: 'Chef' }
]

module.exports = {
    async seed(req, res) {
        try {
            const openings = await Opening.bulkCreate(seed, { fields: ['title'] })
            res.send(openings.get({ plain: true }))
        } catch (err) {
            res.status(500).send(err)
        }
    },
    async getOpenings(req, res) {
        try {
            const openings = await Opening.findAll()
            res.send(openings)
        } catch (err) {
            res.status(500).send(err)
        }
    },
    async getOpeningById(req, res) {
        try {
            const opening = await Opening.findById(req.params.id)
            res.send(opening.get({ plain: true }))
        } catch (err) {
            res.status(500).send(err)
        }
    }
}