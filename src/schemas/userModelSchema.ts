import {
  commonSchemaFieldGroupFooter,
  commonSchemaFieldDefObjectIdRequired,
  commonSchemaFieldQualifierRequired,
  commonSchemaFieldTypeString,
} from '@freight/common-schema-fields';

export const userModelSchema = {
  _id: {
    ...commonSchemaFieldDefObjectIdRequired,
    alias: 'usereId',
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
