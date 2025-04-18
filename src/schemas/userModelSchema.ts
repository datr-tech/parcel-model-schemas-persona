import {
  commonSchemaFieldDefObjectIdRequired,
  commonSchemaFieldGroupFooter,
  commonSchemaFieldQualifierRequired,
  commonSchemaFieldTypeString,
} from '@datr.tech/parcel-model-schemas-common-fields';

export const userModelSchema = {
  _id: {
    ...commonSchemaFieldDefObjectIdRequired,
    alias: 'userId',
  },
  userTypeId: {
    ...commonSchemaFieldDefObjectIdRequired,
    ref: 'UserTypeModel',
  },
  username: {
    ...commonSchemaFieldTypeString,
    ...commonSchemaFieldQualifierRequired,
    maxLength: 20,
  },
  password: {
    ...commonSchemaFieldTypeString,
    ...commonSchemaFieldQualifierRequired,
    maxLength: 20,
  },
  ...commonSchemaFieldGroupFooter,
};
