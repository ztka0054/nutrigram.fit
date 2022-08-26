import constants from '../../enviroment/config'

const post_blog = {
    'url': `${constants.api_url}/nutritionist/blog/`,
    'typeRequest': 'post-form',
}

const post_blog_img = {
    'url': `${constants.api_url}/nutritionist/blog/#/images/`,
    'typeRequest': 'post-form',
}
const patch_blog_img = {
    'url': `${constants.api_url}/nutritionist/blog/#/images/#/`,
    'typeRequest': 'patch-form',
}
const delete_blog_img = {
    'url': `${constants.api_url}/nutritionist/blog/#/images/#/`,
    'typeRequest': 'delete',
}

const get_blogs = {
    'url': `${constants.api_url}/nutritionist/blog/`,
    'typeRequest': 'get',
}

const get_blog = {
    'url': `${constants.api_url}/nutritionist/blog/#/`,
    'typeRequest': 'get',
}
const patch_blog = {
    'url': `${constants.api_url}/nutritionist/blog/#/`,
    'typeRequest': 'patch-form',
}
const patch_n_blog = {
    'url': `${constants.api_url}/nutritionist/blog/#/`,
    'typeRequest': 'patch',
}
const delete_blog = {
    'url': `${constants.api_url}/nutritionist/blog/#/`,
    'typeRequest': 'delete',
}

const get_posts_staff ={
    'url': `${constants.api_url}/nutritionist/blog/public/`,
    'typeRequest': 'get',
}
const get_post_staff ={
    'url': `${constants.api_url}/nutritionist/blog/public/#/`,
    'typeRequest': 'get',
}

export default {
    get_blogs,
    get_blog,
    post_blog,
    post_blog_img,
    patch_blog_img,
    delete_blog_img,
    patch_blog,
    patch_n_blog,
    delete_blog,
    get_posts_staff,
    get_post_staff
}