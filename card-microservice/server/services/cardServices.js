import banks from '../../data/banks.json';
import categories from '../../data/categories.json'

const getAllCards = () => {
    return banks;
}

const getAllCardsFromBank = ({ bankId }) => {
    console.log("bankId: ", bankId)
    return banks[bankId];
}

const getAllCategories = () => {
    return categories;
}

const getCertainCategory = (staple = true) => {
    return staple ? categories["staples"] : categories["specialties"];
}

export default Object.freeze({
    getAllCards,
    getAllCardsFromBank,
    getAllCategories,
    getCertainCategory
})