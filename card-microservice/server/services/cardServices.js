import banks from '../../data/banks.json';
import categories from '../../data/categories.json'
import cards from '../../data/cards.json'


const getAllCards = () => {
    return banks;
}

const getAllCardsFromBank = ({ bankId }) => {
    return banks[bankId];
}

const getAllCategories = () => {
    return categories;
}

const getCertainCategory = (staple = true) => {
    return staple ? categories["staples"] : categories["specialties"];
}

const getCardReward = (cardId) => {
    return cards[cardId];
}

const getBestRewardCard = ({ cardList, category, parentCategory }) => {
    const cardWithValue = cardList.map(c => {
        console.log("getCard", c, getCardReward(c)[parentCategory][category])
        return {
            [c]: getCardReward(c)[parentCategory][category]
        }
    });

    return cardWithValue.sort((a, b) => {
        return Object.values(b)[0] - a[Object.keys(a)[0]];
    });
}

export default Object.freeze({
    getAllCards,
    getAllCardsFromBank,
    getAllCategories,
    getCertainCategory,
    getCardReward,
    getBestRewardCard
})