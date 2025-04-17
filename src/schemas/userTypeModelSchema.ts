import { commonSchemaFieldGroupModelType, commonSchemaFieldDefObjectIdRequired } from '@freight/common-schema-fields';

export const userTypeModelSchema = {
  _id: {
    ...commonSchemaFieldDefObjectIdRequired,
    alias: 'userTypeId',
  },
  ...commonSchemaFieldGroupModelType,
};
