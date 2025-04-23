import { organisationTypeModelSchema } from '@app-pmsp/schemas';
import {
  commonSchemaFieldDefObjectIdRequired,
  commonSchemaFieldGroupModelType,
} from '@datr.tech/parcel-model-schemas-common-fields';

describe('organisationTypeModelSchema', () => {
  describe('positive', () => {
    test('should contain the expected props', () => {
      // Arrange
      const propsExpected = {
        _id: {
          ...commonSchemaFieldDefObjectIdRequired,
          alias: 'organisationTypeId',
        },
        ...commonSchemaFieldGroupModelType,
      };

      // Act
      const propsFound = { ...organisationTypeModelSchema };

      // Assert
      expect(propsFound).toStrictEqual(propsExpected);
    });
  });
});
