import { commonSchemaOptions } from '@datr.tech/parcel-model-schemas-common-fields';
import { organisationModelSchemaOptions } from './../../../dist';

describe('organisationModelSchemaOptions', () => {
  describe('positive', () => {
    test('should contain the expected props', () => {
      // Arrange
      const propsExpected = {
        collection: 'organisation',
        ...commonSchemaOptions,
      };

      // Act
      const propsFound = { ...organisationModelSchemaOptions };

      // Assert
      expect(propsFound).toStrictEqual(propsExpected);
    });
  });
});
