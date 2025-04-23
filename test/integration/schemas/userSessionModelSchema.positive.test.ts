import { userSessionModelSchema } from './../../../dist';
import {
  commonSchemaFieldDefObjectIdRequired,
  commonSchemaFieldGroupModelType,
} from '@datr.tech/parcel-model-schemas-common-fields';

describe('userSessionModelSchema', () => {
  describe('positive', () => {
    test('should contain the expected props', () => {
      // Arrange
      const propsExpected = {
        _id: {
          ...commonSchemaFieldDefObjectIdRequired,
          alias: 'userSessionId',
        },
        userId: {
          ...commonSchemaFieldDefObjectIdRequired,
          ref: 'UserModel',
        },
        ...commonSchemaFieldGroupModelType,
      };
      // Act
      const propsFound = { ...userSessionModelSchema };

      // Assert
      expect(propsFound).toStrictEqual(propsExpected);
    });
  });
});
