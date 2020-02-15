/*
*  开发文档: https://code.vipkid.com.cn/xyz/docs
* */
import {App} from './store'
import scenes from './scene'
import assets from './assets'
import global from './global'
import components from './components'
import {IVFTemplate, LoadMode, ScaleMode} from "../types/IVFTemplate";

const Main: IVFTemplate = {
    assets,
    global,
    scenes,
    components,
    name: App.name,
    width: App.width,
    height: App.height,
    version: App.version,
    baseUrl: App.baseUrl,
    loadMode: LoadMode.all,
    conversion: App.conversion,
    scaleMode: ScaleMode.showAll,
}

export default Main;
