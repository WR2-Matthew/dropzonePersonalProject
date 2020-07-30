module.exports = {
  getAllDropzones: async (req, res) => {
    const db = req.app.get('db');

    const dropzones = await db.dropzone.get_all_dropzones();
    // console.log(dropzones)
    res.status(200).send(dropzones);
  },

  addRating: async (req, res) => {
    console.log('hit')
    const db = req.app.get('db');
    const { bunkhouse, camping, facilities, inclusion, landingArea, party, rental, planes, skySafety } = req.body;
    const { dropzone, user } = req.query;

    console.log(req.body, 'body');
    console.log(req.query, 'query')

    const rating = await db.dropzone.rate_dropzone(dropzone, user, bunkhouse, camping, facilities, inclusion, landingArea, party, rental, planes, skySafety);
    res.status(200).send(rating);
  }
};