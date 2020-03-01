// mock app device id
const APP_DEVICE_ID = '3C861A5820190429'
const SDK_VER = '3.4.1'
const APP_UA = 'APP/com.xiaomi.mico APPV/2.1.17 iosPassportSDK/3.4.1 iOS/13.3.1'
const MINA_UA =
  'MISoundBox/2.1.17 (com.xiaomi.mico; build:2.1.55; iOS 13.3.1) Alamofire/4.8.2 MICO/iOSApp/appStore/2.1.17'

const API = {
  USBS: 'https://api.mina.mi.com/remote/ubus',
  SERVICE_AUTH: 'https://account.xiaomi.com/pass/serviceLoginAuth2',
  SERVICE_LOGIN: 'https://account.xiaomi.com/pass/serviceLogin',
  DEVICE_LIST: 'https://api.mina.mi.com/admin/v2/device_list'
}

module.exports = {
  API,
  APP_UA,
  MINA_UA,
  SDK_VER,
  APP_DEVICE_ID
}
