import {
  commonSchemaFieldDefObjectIdRequired,
  commonSchemaFieldGroupModelType,
} from '@datr.tech/leith-common-schema-fields';

export const organisationUserModelSchema = {
  _id: {
    ...commonSchemaFieldDefObjectIdRequired,
    alias: 'organisationUserId',
  },
  organisationId: {
    ...commonSchemaFieldDefObjectIdRequired,
    ref: 'OrganisationModel',
  },
  userId: {
    ...commonSchemaFieldDefObjectIdRequired,
    ref: 'UserModel',
  },
  ...commonSchemaFieldGroupModelType,
};
