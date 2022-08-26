import constants from '../../enviroment/config'

const get_subcriptions = {
    'url': `${constants.api_url}/nutritionist/subscriptions/`,
    'typeRequest': 'get',
}

const get_subscription = {
    'url': `${constants.api_url}/nutritionist/subscriptions/nutritionist_subscription/`,
    'typeRequest': 'get',
}

const post_subscription = {
    'url': `${constants.api_url}/nutritionist/subscriptions/subscribe/`,
    'typeRequest': 'post',
}

const patch_subscription = {
    'url': `${constants.api_url}/nutritionist/subscriptions/nutritionist_subscription/`,
    'typeRequest': 'patch',
}

const delete_subscription = {
    'url': `${constants.api_url}/nutritionist/subscriptions/nutritionist_subscription/`,
    'typeRequest': 'delete',
}

export default {
    get_subcriptions,
    get_subscription,
    post_subscription,
    patch_subscription,
    delete_subscription
}