import fetch from '@/config/fetch'

/**
 * 登陆
 */

export const login = data => fetch('apis/admin/login', data, 'POST');

/**
 * 退出
 */

export const signout = () => fetch('apis/admin/singout');

/**
 * 获取用户信息
 */

export const getAdminInfo = () => fetch('apis/admin/info');

/**
 * api请求量
 */

export const apiCount = date => fetch('apis/statis/api/' + date + '/count');

/**
 * 所有api请求量
 */

export const apiAllCount = () => fetch('apis/statis/api/count');


/**
 * 所有api请求信息
 */

export const apiAllRecord = () => fetch('apis/statis/api/all');

/**
 * 用户注册量
 */

export const userCount = date => fetch('apis/statis/user/' + date + '/count');

/**
 * 某一天订单数量
 */

export const orderCount = date => fetch('apis/statis/order/' + date + '/count');


/**
 * 某一天管理员注册量
 */

export const adminDayCount = date => fetch('apis/statis/admin/' + date + '/count');

/**
 * 管理员列表
 */

export const adminList = data => fetch('apis/admin/all', data);

/**
 * 管理员数量
 */

export const adminCount = () => fetch('apis/admin/count');

/**
 * 获取定位城市
 */

export const cityGuess = () => fetch('apis/v1/cities', {
	type: 'guess'
});

/**
 * 添加商铺
 */
export const addShop = data => fetch('apis/shopping/addShop', data, 'POST');

/**
 * 获取搜索地址
 */

export const searchplace = (cityid, value) => fetch('apis/v1/pois', {
	type: 'search',
	city_id: cityid,
	keyword: value
});

/**
 * 获取当前店铺食品种类
 */

export const getCategory = restaurant_id => fetch('apis/shopping/getcategory/' + restaurant_id);

/**
 * 添加食品种类
 */

export const addCategory = data => fetch('apis/shopping/addcategory', data, 'POST');


/**
 * 添加食品
 */

export const addFood = data => fetch('apis/shopping/addfood', data, 'POST');


/**
 * category 种类列表
 */

export const foodCategory = (latitude, longitude) => fetch('apis/shopping/v2/restaurant/category');

/**
 * 获取餐馆列表
 */

export const getResturants = data => fetch('apis/shopping/restaurants', data);

/**
 * 获取餐馆详细信息
 */

export const getResturantDetail = restaurant_id => fetch('apis/shopping/restaurant/' + restaurant_id);

/**
 * 获取餐馆数量
 */

export const getResturantsCount = () => fetch('apis/shopping/restaurants/count');

/**
 * 更新餐馆信息
 */

export const updateResturant = data => fetch('apis/shopping/updateshop', data, 'POST');

/**
 * 删除餐馆
 */

export const deleteResturant = restaurant_id => fetch('apis/shopping/restaurant/' + restaurant_id, {}, 'DELETE');

/**
 * 获取食品列表
 */

export const getFoods = data => fetch('apis/shopping/v2/foods', data);

/**
 * 获取食品数量
 */

export const getFoodsCount = data => fetch('apis/shopping/v2/foods/count', data);


/**
 * 获取menu列表
 */

export const getMenu = data => fetch('apis/shopping/v2/menu', data);

/**
 * 获取menu详情
 */

export const getMenuById = category_id => fetch('apis/shopping/v2/menu/' + category_id);

/**
 * 更新食品信息
 */

export const updateFood = data => fetch('apis/shopping/v2/updatefood', data, 'POST');

/**
 * 删除食品
 */

export const deleteFood = food_id => fetch('apis/shopping/v2/food/' + food_id, {}, 'DELETE');

/**
 * 获取用户列表
 */

export const getUserList = data => fetch('apis/v1/users/list', data);

/**
 * 获取用户数量
 */

export const getUserCount = data => fetch('apis/v1/users/count', data);

/**
 * 获取订单列表
 */

export const getOrderList = data => fetch('apis/bos/orders', data);

/**
 * 获取订单数量
 */

export const getOrderCount = data => fetch('apis/bos/orders/count', data);

/**
 * 获取用户信息
 */

export const getUserInfo = user_id => fetch('apis/v1/user/' + user_id);

/**
 * 获取地址信息
 */

export const getAddressById = address_id => fetch('apis/v1/addresse/' + address_id);

/**
 * 获取用户分布信息
 */

export const getUserCity = () => fetch('apis/v1/user/city/count');
