const campanaRepository = require('../repositories/campanaRepository');

exports.getCampanas = async () => {
    const data = await campanaRepository.getAllCampanas();
    return data;
};