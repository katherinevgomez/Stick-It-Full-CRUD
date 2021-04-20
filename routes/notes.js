///////////////////////////////
// Import Router
////////////////////////////////
const router = require("express").Router();
const User = require("../models/User");
const Note = require("../models/Notes");
const auth = require("./authMiddleware");

///////////////////////////////
// Router Specific Middleware
////////////////////////////////
router.use(auth);

///////////////////////////////
// Router Routes
////////////////////////////////
router.get("/", async (req, res) => {
  const notes = await Note.find({ user: req.session.user.id });
  console.log(notes);
  res.render("notes/index", {
    notes,
  });
});

router.post("/", async (req, res) => {
  req.body.user = req.session.user.id;
  await Note.create(req.body);
  res.redirect("/notes/");
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const note = await Note.findOne({ _id: id, user: req.session.user.id });
  console.log(note)
  if (note) {
    res.render("notes/show", {
      note,
    });
  } else {
    res.status(400).json({ error: "No Note of This ID for this user" });
  }
});

router.put("/:id", async (req, res) => {
  await Note.findByIdAndUpdate(req.params.id, req.body);
  res.redirect("/notes");
});

router.delete("/:id", async (req, res) => {
  await Note.findByIdAndRemove(req.params.id);
  res.redirect("/notes");
});

///////////////////////////////
// Export Router
////////////////////////////////
module.exports = router;
