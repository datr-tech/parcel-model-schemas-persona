import { commonSchemaOptions } from '@datr.tech/parcel-model-schemas-common-fields';
import { organisationUserModelSchemaOptions } from './../../../dist';

describe('organisationUserModelSchemaOptions', () => {
  describe('positive', () => {
    test('should contain the expected props', () => {
      // Arrange
      const propsExpected = {
        collection: 'organisationUser',
        ...commonSchemaOptions,
      };

      // Act
      const propsFound = { ...organisationUserModelSchemaOptions };

      // Assert
      expect(propsFound).toStrictEqual(propsExpected);
    });
  });
});
