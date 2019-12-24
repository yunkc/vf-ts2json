import {Widget, Res} from "./store";
import {Components} from "../types/IVFTemplate";

const root: Components.custom = {
    type: Components.type.custom,
    children: [
        {
            id: Widget.logo,
            libId: Widget.logo
        }
    ]
};

const logo: Components.image = {
    type: Components.type.image,
    src: Res.choiceButtonSuccess,
    width: 800,
    height: 400,
};

export default {
    [Widget.root]: root,
    [Widget.logo]: logo
}