import { commonSchemaFieldGroupModelType, commonSchemaFieldDefObjectIdRequired } from '@freight/common-schema-fields';

export const roleModelSchema = {
  _id: {
    ...commonSchemaFieldDefObjectIdRequired,
    alias: 'roleId',
  },
  ...commonSchemaFieldGroupModelType,
};
