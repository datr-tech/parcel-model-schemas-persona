import { commonSchemaFieldGroupModelType, commonSchemaFieldDefObjectIdRequired } from '@freight/common-schema-fields';

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
