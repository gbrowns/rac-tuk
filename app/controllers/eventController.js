//events handlers
exports.getEvents = (req, res) => {
  //TODO:
  //query events
  //send results to client
  res.status(200).json({
    message: "",
    events: [{ event: "event1" }, { event: "event2" }, { event: "event3" }],
  });
};

// To add new events
exports.postEvents = (req, res) => {
  //validate received events
  //store events in db
  console.log("request body: " + JSON.stringify(req.body));
  res.status(200).json({ message: "events saved" });
};
