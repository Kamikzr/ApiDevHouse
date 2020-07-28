class HouseController{

    async store(req, res) {
        return res.json({ ok: true });
    }
}

module.exports = new HouseController();