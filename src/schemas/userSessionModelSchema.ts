import {
  commonSchemaFieldDefObjectIdRequired,
  commonSchemaFieldGroupModelType,
} from '@datr.tech/parcel-model-schemas-common-fields';

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
