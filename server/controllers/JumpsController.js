module.exports = {
  getJumps: async (req, res) => {
    const db = req.app.get('db');
    const { userId } = req.params;

    const jumps = await db.jumps.get_jumps(userId)
    res.status(200).send(jumps)
  },

  createJump: async (req, res) => {
    const db = req.app.get('db');
    const { date, dz, discipline, photo, plane, details } = req.body;
    const { userId } = req.params;

    const newJumps = await db.jumps.add_jump(userId, date, dz, discipline, photo, plane, details);
    // console.log(newJumps)
    res.status(200).send(newJumps);
  },

  deleteJump: async (req, res) => {
    const db = req.app.get('db');
    const { id } = req.params;

    const updated = await db.jumps.delete_jump(id);
    // console.log(updated)
    res.status(200).send(updated);
  }
};