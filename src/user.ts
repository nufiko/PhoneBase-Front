import { Phone } from './phone'

export interface User {
    Id?: number,
    Name: string,
    LastName: string,
    Phones: Phone[]
}