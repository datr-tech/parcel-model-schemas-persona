import { commonSchemaOptions } from '@datr.tech/parcel-model-schemas-common-fields';
import { userSessionModelSchemaOptions } from './../../../dist';

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
