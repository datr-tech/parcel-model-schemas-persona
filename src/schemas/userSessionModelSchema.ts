import {
  commonSchemaFieldDefObjectIdRequired,
  commonSchemaFieldGroupModelType,
} from '@datr.tech/leith-common-schema-fields';

export const userSessionModelSchema = {
  _id: {
    ...commonSchemaFieldDefObjectIdRequired,
    alias: 'userSessionId',
  },
  userId: {
    ...commonSchemaFieldDefObjectIdRequired,
    ref: 'UserModel',
  },
  ...commonSchemaFieldGroupModelType,
};
