let baseUrl = ''; 
let routerMode = 'history';
let baseImgPath;

if (process.env.NODE_ENV == 'development') {
	//baseUrl = 'http://cangdu.org:8001';
    baseImgPath = 'http://localhost:8080/img/';
}else{
	baseUrl = 'http://cangdu.org:8001';
    baseImgPath = 'http://cangdu.org:8001/img/';
}

export {
	baseUrl,
	routerMode,
	baseImgPath
}