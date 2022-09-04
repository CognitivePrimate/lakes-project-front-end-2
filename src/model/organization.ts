import { ObjectId } from 'mongodb';
import Volunteer from './volunteer';

export default interface Organization {
  _id?: ObjectId;
  name: string;
  leads: object[];
  volunteers: object[];
}