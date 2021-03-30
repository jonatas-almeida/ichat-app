import { Users } from "./Users";

export interface Contacts {

    id: number;
    contact_name: string;
    contact_number: string;
    user: Users[];
}
