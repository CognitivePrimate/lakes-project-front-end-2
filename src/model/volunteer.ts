import { ObjectId } from "mongodb";
import { OrgContext } from "./organization";

export interface Volunteer {
    _id?: ObjectId;
    uid: string;
    organizations: OrgContext[];
    activeOrganization: OrgContext | undefined;
    firstName: string;
    lastName:  string;
    preferredName?: string;
    pronouns: string;
    otherKnownAliases?: string[];
    email: string;
    hoursWorked?: []; 
    yearsAttended: [];
    lead: boolean;
    permissionsLevel: number;
    additionalTrainings: [];
    specializations: [];
    ICS?: number[];
    isActive?: boolean;
    picture: string;
}

export interface volContext {
    firstName: Volunteer["firstName"],
    lastName: Volunteer["lastName"],
    email: Volunteer["email"],
    _id: Volunteer["_id"]
}