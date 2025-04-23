import { userTypeModelSchemaOptions } from './../../../dist';
import { commonSchemaOptions } from '@datr.tech/parcel-model-schemas-common-fields';

describe('userTypeModelSchemaOptions', () => {
  describe('positive', () => {
    test('should contain the expected props', () => {
      // Arrange
      const propsExpected = {
        collection: 'userType',
        ...commonSchemaOptions,
      };

      // Act
      const propsFound = { ...userTypeModelSchemaOptions };

      // Assert
      expect(propsFound).toStrictEqual(propsExpected);
    });
  });
});
