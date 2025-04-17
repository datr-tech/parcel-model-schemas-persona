import { commonSchemaFieldGroupModelType, commonSchemaFieldDefObjectIdRequired } from '@freight/common-schema-fields';

export const organisationTypeModelSchema = {
  _id: {
    ...commonSchemaFieldDefObjectIdRequired,
    alias: 'organisationTypeId',
  },
  ...commonSchemaFieldGroupModelType,
};
