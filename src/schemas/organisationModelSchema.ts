import {
  commonSchemaFieldDefObjectIdRequired,
  commonSchemaFieldGroupModelType,
} from '@datr.tech/parcel-model-schemas-common-fields';

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
