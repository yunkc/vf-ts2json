import {Res} from "./store";
import {Assets} from '../types/IVFTemplate'

const assets = {
    [Res.choiceButtonSuccess]: {
        type: Assets.type.image,
        name: Res.choiceButtonSuccess,
        url: 'https://mms.businesswire.com/media/20191025005023/en/747781/23/VF_Blue_Ball_New_Logo.jpg'
    },
    [Res.choiceButtonFail]: {
        type: Assets.type.image,
        name: Res.choiceButtonFail,
        url: 'https://thevinylfactory.com/wp-content/uploads/2017/01/VFselects-logo-2-1.png',
    }
}

export default assets