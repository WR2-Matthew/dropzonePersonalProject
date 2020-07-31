module.exports = {
  getJumps: async (req, res) => {
    const db = req.app.get('db');
    const { userId } = req.params;

    const jumps = await db.jumps.get_jumps(userId)
    res.status(200).send(jumps)
  }
}