const Employee = require('../components').employee

const seed = [
    { id: 1, name: 'Hugo Fisher', picture: "/images/hugo.jpg", big: true },
    { id: 2, name: 'Guy Biggs', picture: "/images/guy.jpg", big: true },
    { id: 3, name: 'John Doe', picture: "/images/john.jpg", big: false },
    { id: 4, name: 'Sam Shmuck', picture: "/images/sam.jpg", big: false },
    { id: 5, name: 'Nate Porter', picture: "/images/nate.jpg", big: false },
    { id: 6, name: 'Don Bass', picture: "/images/don.jpg", big: false },
]

module.exports = {
    async seed(req, res) {
        try {
            const employees = await Employee.bulkCreate(seed, { fields: ['name', 'picture', 'big'] })
            res.send(employees.get({ plain: true }))
        } catch (err) {
            res.status(500).send(err)
        }
    },
    async getEmployees(req, res) {
        try {
            const employees = await Employee.findAll()
            res.send(employees)
        } catch (err) {
            res.status(500).send(err)
        }
    }
}