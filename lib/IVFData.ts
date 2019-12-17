
export enum PeopleSex {
    male,
    female
}

export interface People {
    age: number,
    name: string,
    sex: PeopleSex,
    height: number,
    weight: number,
    isMarry: boolean
}
