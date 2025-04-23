import { organisationRoleModelSchema } from './../../../dist';
import {
  commonSchemaFieldDefObjectIdRequired,
  commonSchemaFieldGroupModelType,
} from '@datr.tech/parcel-model-schemas-common-fields';

describe('organisationRoleModelSchema', () => {
  describe('positive', () => {
    test('should contain the expected props', () => {
      // Arrange
      const propsExpected = {
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

      // Act
      const propsFound = { ...organisationRoleModelSchema };

      // Assert
      expect(propsFound).toStrictEqual(propsExpected);
    });
  });
});
