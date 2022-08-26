import constants from "../../enviroment/config";

const get_categories = {
    url: `${constants.api_url}/nutritionist/recipes/categories/`,
    typeRequest: "get",
};
const get_recipes = {
    url: `${constants.api_url}/nutritionist/recipes/`,
    typeRequest: "get",
};
const get_recipe = {
    url: `${constants.api_url}/nutritionist/recipes/#/`,
    typeRequest: "get",
};
const get_regions = {
    url: `${constants.api_url}/nutritionist/recipes/regions/`,
    typeRequest: "get",
};

const post_create_recipes = {
    url: `${constants.api_url}/nutritionist/recipes/`,
    typeRequest: "post",
};
const patch_update_recipes = {
    url: `${constants.api_url}/nutritionist/recipes/#/`,
    typeRequest: "patch",
};
const delete_recipes = {
    url: `${constants.api_url}/nutritionist/recipes/#/`,
    typeRequest: "delete",
};

const post_image = {
    url: `${constants.api_url}/nutritionist/recipes/#/images/`,
    typeRequest: "post-form",
};
const delete_image = {
    url: `${constants.api_url}/nutritionist/recipes/#/images/#`,
    typeRequest: "delete",
};

const post_equivalent = {
    url: `${constants.api_url}/nutritionist/recipes/#/equivalents/`,
    typeRequest: "post",
};

const get_equivalents = {
    url: `${constants.api_url}/nutritionist/recipes/#/equivalents/`,
    typeRequest: "get",
};

const delete_equivalents = {
    url: `${constants.api_url}/nutritionist/recipes/#/equivalents/#/`,
    typeRequest: "delete",
};

export default {
    get_categories,
    get_recipes,
    get_recipe,
    get_regions,
    post_create_recipes,
    patch_update_recipes,
    delete_recipes,
    post_image,
    delete_image,
    post_equivalent,
    get_equivalents,
    delete_equivalents,
};
