import { ObjectId } from 'mongodb';
import { volContext } from './volunteer';
// import Volunteer from './volunteer';

export interface Organization {
  _id?: ObjectId;
  name: string;
  leads: object[];
  volunteers: volContext[];
}

export interface OrgContext {
  orgName: Organization["name"],
  orgId?: Organization["_id"]
}