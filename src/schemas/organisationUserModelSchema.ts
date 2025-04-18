import {
  commonSchemaFieldDefObjectIdRequired,
  commonSchemaFieldGroupModelType,
} from '@datr.tech/parcel-model-schemas-common-fields';

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
