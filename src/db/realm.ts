import Realm from 'realm';
import UserSchema from './schemas/UserSchema';

const realm = new Realm({
  schema: [UserSchema],
  schemaVersion: 1,
});

export default realm;
