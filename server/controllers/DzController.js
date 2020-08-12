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

    const rating = await db.dropzone.rate_dropzone(dropzone, user, bunkhouse, camping, facilities, inclusion, landingArea, party, rental, planes, skySafety);
    res.status(200).send(rating);
  },

  createDropzone: async (req, res) => {
    const db = req.app.get('db');
    const { name, address, town, state, altitude, price, photo, camping, skySafety, inclusion, party, bunkhouse, rental, facilities, planes, landingArea } = req.body;
    const { userId } = req.params;

    const [dropzoneId] = await db.dropzone.create_dropzone(userId, name, address, town, state, altitude, price, photo);
    // console.log(dropzoneId.dropzone_id)
    const dzId = dropzoneId.dropzone_id
    const newDz = await db.dropzone.create_dropzone_rating(dzId, camping, skySafety, inclusion, party, bunkhouse, rental, facilities, planes, landingArea)
    // console.log(newDz, 'newnew')
    res.status(200).send(newDz);
  },

  hasRated: async (req, res) => {
    const db = req.app.get('db');
    const rating = await db.dropzone.has_rated();
    // console.log(rating)
    res.status(200).send(rating);
  }
};