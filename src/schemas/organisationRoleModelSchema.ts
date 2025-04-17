import { commonSchemaFieldGroupModelType, commonSchemaFieldDefObjectIdRequired } from '@freight/common-schema-fields';

export const organisationRoleModelSchema = {
  _id: {
    ...commonSchemaFieldDefObjectIdRequired,
    alias: 'organisationRoleId',
  },
  organisationId: {
    ...commonSchemaFieldDefObjectIdRequired,
    ref: 'OrganisationModel',
  },
  roleId: {
    ...commonSchemaFieldDefObjectIdRequired,
    ref: 'RoleModel',
  },
  ...commonSchemaFieldGroupModelType,
};
