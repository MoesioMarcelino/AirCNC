const Spot = require("../models/Spot");
const User = require("../models/User");

module.exports = {
    async index(req, res) {
        const { tech } = req.query;

        const spot = await Spot.find({ techs: tech });

        if (!spot.legth) {
            return res.status(400).json({ error: 'Spot does not matched'});
        }

        return res.json(spot);
    },

    async store(req, res) {
        const { filename } = req.file;
        const { company, techs, price } = req.body;
        const { user_id } = req.headers;

        const user = await User.findById(user_id);

        if (!user) {
            return res.status(400).json({ error: 'User not exists'});
        }

        const spot = await Spot.create({
            user: user_id,
            thumbnail: filename,
            company,
            techs: techs.split(',').map(tech => tech.trim()),
            price,
        });

        return res.json(spot);
    },
};