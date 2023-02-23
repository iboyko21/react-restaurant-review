import RestaurantsDAO from "../dao/restaurantsDAO.js";

export default class RestaurantsController {
    static async apiGetRestaurants(req, res, next) {
        const restaurantsPerPage = req.query.restaurantsPerPage ? parseInt(req.body) : 0;
        const page = req.query.page ? parseInt(req.query.page, 10) : 0;
    }
}