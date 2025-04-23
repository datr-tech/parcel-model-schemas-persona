import { roleModelSchemaOptions } from './../../../dist';
import { commonSchemaOptions } from '@datr.tech/parcel-model-schemas-common-fields';

describe('roleModelSchemaOptions', () => {
  describe('positive', () => {
    test('should contain the expected props', () => {
      // Arrange
      const propsExpected = {
        collection: 'role',
        ...commonSchemaOptions,
      };

      // Act
      const propsFound = { ...roleModelSchemaOptions };

      // Assert
      expect(propsFound).toStrictEqual(propsExpected);
    });
  });
});
