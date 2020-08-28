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
    // console.log(rating)
    const rated = await db.dropzone.get_has_rated(user)
    // console.log(rated)
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
  },

  checkbox: async (req, res) => {
    const db = req.app.get('db');
    const { overall, camping, skySafety, inclusion, party, bunkhouse, rental, facilities, planes, landingArea } = req.query;
    // console.log(overall, camping, skySafety, inclusion, party, bunkhouse, rental, facilities, planes, landingArea);

    if (overall == 'false' && camping == 'false' && skySafety == 'false' && inclusion == 'false' && party == 'false' && bunkhouse == 'false' && rental == 'false' && facilities == 'false' && planes == 'false' && landingArea == 'false') {
      const dropzones = await db.dropzone.get_all_dropzones();
      res.status(200).send(dropzones);
    }

    if (overall == 'true' && camping == 'false' && skySafety == 'false' && inclusion == 'false' && party == 'false' && bunkhouse == 'false' && rental == 'false' && facilities == 'false' && planes == 'false' && landingArea == 'false') {
      // console.log('hit')
      const overallDz = await db.dropzone.get_best_overall();
      // console.log(overallDz, 'overallDz')
      res.status(200).send(overallDz);
    }

    if (overall == 'false' && camping == 'true' && skySafety == 'false' && inclusion == 'false' && party == 'false' && bunkhouse == 'false' && rental == 'false' && facilities == 'false' && planes == 'false' && landingArea == 'false') {
      const campingDz = await db.dropzone.get_best_camping();
      res.status(200).send(campingDz);
    }

    if (overall == 'false' && camping == 'false' && skySafety == 'true' && inclusion == 'false' && party == 'false' && bunkhouse == 'false' && rental == 'false' && facilities == 'false' && planes == 'false' && landingArea == 'false') {
      const safetyDz = await db.dropzone.get_best_safety();
      res.status(200).send(safetyDz);
    }

    if (overall == 'false' && camping == 'false' && skySafety == 'false' && inclusion == 'true' && party == 'false' && bunkhouse == 'false' && rental == 'false' && facilities == 'false' && planes == 'false' && landingArea == 'false') {
      const inclusionDz = await db.dropzone.get_best_inclusion();
      res.status(200).send(inclusionDz);
    }

    if (overall == 'false' && camping == 'false' && skySafety == 'false' && inclusion == 'false' && party == 'true' && bunkhouse == 'false' && rental == 'false' && facilities == 'false' && planes == 'false' && landingArea == 'false') {
      const partyDz = await db.dropzone.get_best_party();
      res.status(200).send(partyDz);
    }

    if (overall == 'false' && camping == 'false' && skySafety == 'false' && inclusion == 'false' && party == 'false' && bunkhouse == 'true' && rental == 'false' && facilities == 'false' && planes == 'false' && landingArea == 'false') {
      const bunkhouseDz = await db.dropzone.get_best_bunkhouse();
      res.status(200).send(bunkhouseDz);
    }

    if (overall == 'false' && camping == 'false' && skySafety == 'false' && inclusion == 'false' && party == 'false' && bunkhouse == 'false' && rental == 'true' && facilities == 'false' && planes == 'false' && landingArea == 'false') {
      const rentalDz = await db.dropzone.get_best_rentals();
      res.status(200).send(rentalDz);
    }

    if (overall == 'false' && camping == 'false' && skySafety == 'false' && inclusion == 'false' && party == 'false' && bunkhouse == 'false' && rental == 'false' && facilities == 'true' && planes == 'false' && landingArea == 'false') {
      const facilitiesDz = await db.dropzone.get_best_facilities();
      res.status(200).send(facilitiesDz);
    }

    if (overall == 'false' && camping == 'false' && skySafety == 'false' && inclusion == 'false' && party == 'false' && bunkhouse == 'false' && rental == 'false' && facilities == 'false' && planes == 'true' && landingArea == 'false') {
      const planesDz = await db.dropzone.get_best_planes();
      res.status(200).send(planesDz);
    }

    if (overall == 'false' && camping == 'false' && skySafety == 'false' && inclusion == 'false' && party == 'false' && bunkhouse == 'false' && rental == 'false' && facilities == 'false' && planes == 'false' && landingArea == 'true') {
      const landingDz = await db.dropzone.get_best_landing();
      res.status(200).send(landingDz);
    }
  }
};