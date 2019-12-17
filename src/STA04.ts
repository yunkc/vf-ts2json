import {People, PeopleSex} from "../lib/IVFData";


const Xiaoming: People = {
    age: 18,
    sex: PeopleSex.male,
    name: 'Nova',
    height: 178,
    weight: 56,
    isMarry: true
};

const ZhangFeng: People = {
    age: 22,
    sex: PeopleSex.female,
    name: 'ZhangFeng',
    height: 166,
    weight: 42,
    isMarry: false
};

export default {
    SchoolInfo: [
        Xiaoming,
        ZhangFeng
    ]
}