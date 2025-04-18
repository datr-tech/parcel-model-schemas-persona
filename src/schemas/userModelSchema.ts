import {
  commonSchemaFieldDefObjectIdRequired,
  commonSchemaFieldGroupFooter,
  commonSchemaFieldQualifierRequired,
  commonSchemaFieldTypeString,
} from '@datr.tech/leith-common-schema-fields';

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
