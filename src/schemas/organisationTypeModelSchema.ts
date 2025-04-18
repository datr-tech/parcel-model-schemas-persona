import {
  commonSchemaFieldDefObjectIdRequired,
  commonSchemaFieldGroupModelType,
} from '@datr.tech/leith-common-schema-fields';

export const organisationTypeModelSchema = {
  _id: {
    ...commonSchemaFieldDefObjectIdRequired,
    alias: 'organisationTypeId',
  },
  ...commonSchemaFieldGroupModelType,
};
