///////////////////////////////
// Import Router
////////////////////////////////
const router = require("express").Router()
const AuthRouter = require("./auth")
const NotesRouter = require("./notes")


///////////////////////////////
// Router Specific Middleware
////////////////////////////////
router.use("/auth", AuthRouter)
router.use("/notes", NotesRouter)


///////////////////////////////
// Router Routes
////////////////////////////////
router.get("/", (req, res) => {
    res.render("home")
})

router.get("/dashboard", (req, res) => {
    res.render("dashboard")
})

router.get("/about", (req,res) => {
    res.render("about")
})

router.get("/whatIsGDD", (req,res) => {
    res.render("whatIsGDD")
})
///////////////////////////////
// Export Router
////////////////////////////////
module.exports = router