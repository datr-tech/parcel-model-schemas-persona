import { userModelSchemaOptions } from './../../../dist';
import { commonSchemaOptions } from '@datr.tech/parcel-model-schemas-common-fields';

describe('userModelSchemaOptions', () => {
  describe('positive', () => {
    test('should contain the expected props', () => {
      // Arrange
      const propsExpected = {
        collection: 'user',
        ...commonSchemaOptions,
      };

      // Act
      const propsFound = { ...userModelSchemaOptions };

      // Assert
      expect(propsFound).toStrictEqual(propsExpected);
    });
  });
});
