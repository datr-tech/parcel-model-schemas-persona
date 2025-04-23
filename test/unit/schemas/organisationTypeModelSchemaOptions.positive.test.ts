import { organisationTypeModelSchemaOptions } from '@app-pmsp/schemas';
import { commonSchemaOptions } from '@datr.tech/parcel-model-schemas-common-fields';

describe('organisationTypeModelSchemaOptions', () => {
  describe('positive', () => {
    test('should contain the expected props', () => {
      // Arrange
      const propsExpected = {
        collection: 'organisationType',
        ...commonSchemaOptions,
      };

      // Act
      const propsFound = { ...organisationTypeModelSchemaOptions };

      // Assert
      expect(propsFound).toStrictEqual(propsExpected);
    });
  });
});
