import { organisationRoleModelSchemaOptions } from '@app-pmsp/schemas';
import { commonSchemaOptions } from '@datr.tech/parcel-model-schemas-common-fields';

describe('organisationRoleModelSchemaOptions', () => {
  describe('positive', () => {
    test('should contain the expected props', () => {
      // Arrange
      const propsExpected = {
        collection: 'organisationRole',
        ...commonSchemaOptions,
      };

      // Act
      const propsFound = { ...organisationRoleModelSchemaOptions };

      // Assert
      expect(propsFound).toStrictEqual(propsExpected);
    });
  });
});
