import constants from '../../enviroment/config'

const get_hydratation = {
    'url': `${constants.api_url}/nutritionist/hydration/#/`,
    'typeRequest': 'get',
}
const post_hydratation = {
    'url': `${constants.api_url}/nutritionist/hydration/#/`,
    'typeRequest': 'post',
}
const patch_hydratation = {
    'url': `${constants.api_url}/nutritionist/hydration/#/hydration/#/`,
    'typeRequest': 'patch',
}
const delete_hydratation = {
    'url': `${constants.api_url}/nutritionist/hydration/#/hydration/#/`,
    'typeRequest': 'delete',
}

export default {
    get_hydratation,
    post_hydratation,
    patch_hydratation,
    delete_hydratation
}