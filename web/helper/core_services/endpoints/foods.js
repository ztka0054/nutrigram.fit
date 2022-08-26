import constants from "../../enviroment/config";

const get_foods = {
    url: `${constants.api_url}/nutritionist/foods/`,
    typeRequest: "get",
};

const get_food = {
    url: `${constants.api_url}/nutritionist/foods/#/`,
    typeRequest: "get",
};

const get_food_equivalents = {
    url: `${constants.api_url}/nutritionist/foods/equivalents/`,
    typeRequest: "get",
};

const del_food_equivalent = {
    url: `${constants.api_url}/nutritionist/foods/#/`,
    typeRequest: "delete",
};

const get_food_categories = {
    url: `${constants.api_url}/nutritionist/foods/category/`,
    typeRequest: "get",
};

const get_food_category = {
    url: `${constants.api_url}/nutritionist/foods/category/#/`,
    typeRequest: "get",
};

const get_portions_info = {
    url: `${constants.api_url}/nutritionist/foods/portions_info/`,
    typeRequest: "get",
};

const post_create_food = {
    url: `${constants.api_url}/nutritionist/foods/create/`,
    typeRequest: "post",
};

const patch_food = {
    url: `${constants.api_url}/nutritionist/foods/#/`,
    typeRequest: "patch",
};

const post_portion = {
    url: `${constants.api_url}/nutritionist/foods/portions/`,
    typeRequest: "post",
};

const put_food = {
    url: `${constants.api_url}/nutritionist/foods/#/`,
    typeRequest: "put",
};

const del_potion = {
    url: `${constants.api_url}/nutritionist/foods/portions/#/`,
    typeRequest: "delete",
};

const patch_potion = {
    url: `${constants.api_url}/nutritionist/foods/portions/#/`,
    typeRequest: "patch",
};

export default {
    get_foods,
    get_food,
    get_food_equivalents,
    del_food_equivalent,
    get_food_category,
    get_food_categories,
    get_portions_info,
    post_create_food,
    post_portion,
    put_food,
    patch_food,
    del_potion,
    patch_potion,
};
