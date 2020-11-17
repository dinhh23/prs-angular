import { User } from '../user/user.class';

export class Request {
    id: number = 0;
    user: User;
    description: string = "";
    justification: string = "";
    dateNeeded: Date;
    deliveryMode: string = "";
    status: string = "";
    total: number = 0;
    submittedDate: Date;
    reasonForRejection: string = "";

    constructor() {

    }
}