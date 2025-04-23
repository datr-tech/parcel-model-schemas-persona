import { userSessionModelSchemaOptions } from './../../../dist';
import { commonSchemaOptions } from '@datr.tech/parcel-model-schemas-common-fields';

describe('userSessionModelSchemaOptions', () => {
  describe('positive', () => {
    test('should contain the expected props', () => {
      // Arrange
      const propsExpected = {
        collection: 'userSession',
        ...commonSchemaOptions,
      };

      // Act
      const propsFound = { ...userSessionModelSchemaOptions };

      // Assert
      expect(propsFound).toStrictEqual(propsExpected);
    });
  });
});
