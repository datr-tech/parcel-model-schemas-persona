import { userTypeModelSchema } from './../../../dist';
import {
  commonSchemaFieldDefObjectIdRequired,
  commonSchemaFieldGroupModelType,
} from '@datr.tech/parcel-model-schemas-common-fields';

describe('userTypeModelSchema', () => {
  describe('positive', () => {
    test('should contain the expected props', () => {
      // Arrange
      const propsExpected = {
        _id: {
          ...commonSchemaFieldDefObjectIdRequired,
          alias: 'userTypeId',
        },
        ...commonSchemaFieldGroupModelType,
      };

      // Act
      const propsFound = { ...userTypeModelSchema };

      // Assert
      expect(propsFound).toStrictEqual(propsExpected);
    });
  });
});
