module.exports = {
  getAllDropzones: async (req, res) => {
    const db = req.app.get('db');

    const dropzones = await db.dropzone.get_all_dropzones();
    // console.log(dropzones)

    res.status(200).send(dropzones);
  }
}