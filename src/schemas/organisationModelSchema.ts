import { commonSchemaFieldGroupModelType, commonSchemaFieldDefObjectIdRequired } from '@freight/common-schema-fields';

export const organisationModelSchema = {
  _id: {
    ...commonSchemaFieldDefObjectIdRequired,
    alias: 'organisationId',
  },
  frameworkId: {
    ...commonSchemaFieldDefObjectIdRequired,
    ref: 'entity/FrameworkModel',
  },
  organisationTypeId: {
    ...commonSchemaFieldDefObjectIdRequired,
    ref: 'OrganisationTypeModel',
  },
  ...commonSchemaFieldGroupModelType,
};
