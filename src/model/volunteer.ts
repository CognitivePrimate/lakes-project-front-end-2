import { ObjectId } from "mongodb";
import Organization from "./organization";

export default interface Volunteer {
    _id?: ObjectId;
    organizations: Organization[];
    activeOrganization: Organization | undefined;
    firstName: string;
    lastName:  string;
    preferredName?: string;
    otherKnownAliases?: string[];
    email: string;
    hoursWorked?: []; 
    yearsAttended: [];
    lead: boolean;
    permissionsLevel: number;
    ICS?: number[];
    greenDot: boolean;
    isActive?: boolean;
}

