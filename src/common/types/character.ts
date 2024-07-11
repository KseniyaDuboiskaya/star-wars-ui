export enum Gender {
    'male' = 'male',
    'female' = 'female',
    'n/a' = 'n/a',
    'hermaphrodite' = 'hermaphrodite'
}

export interface Character {
    birth_year: string
    created: string
    edited: string
    eye_color: string
    gender: Gender
    hair_color: string
    height: string
    mass: string
    name: string
    skin_color: string
    url: string
}
