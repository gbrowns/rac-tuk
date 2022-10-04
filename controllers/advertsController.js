//adverts handlers
exports.getAdverts = (req, res) => {
  //TODO:
  //query adverts
  //send results to client
  res.status(200).json({
    message: "",
    adverts: [
      { advert: "advert1" },
      { advert: "advert2" },
      { advert: "advert3" },
    ],
  });
};

// To add new adverts
exports.postAdverts = (req, res) => {
  //validate received adverts
  //store adverts in db
  console.log("request body: " + JSON.stringify(req.body));
  res.status(200).json({ message: "adverts saved" });
};
