module.exports = function(app, db) {
  app.get("/notes", (req, res) => {
    // You'll create your note here.
    res.send("Hello");
  });
};
