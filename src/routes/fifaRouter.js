const router = require("./router");

const getVenue = require("../controllers/getVenueController");
const getEvent = require("../controllers/getEventController");
const getProducts = require("../controllers/getProductController");

router.get("/venues", getVenue);
router.get("/events", getEvent);
router.get("/products", getProducts);

module.exports = router;
