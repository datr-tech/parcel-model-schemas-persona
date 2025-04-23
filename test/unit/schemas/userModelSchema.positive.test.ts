import { userModelSchema } from '@app-pmsp/schemas';
import {
  commonSchemaFieldDefObjectIdRequired,
  commonSchemaFieldGroupFooter,
  commonSchemaFieldQualifierRequired,
  commonSchemaFieldTypeString,
} from '@datr.tech/parcel-model-schemas-common-fields';

describe('userModelSchema', () => {
  describe('positive', () => {
    test('should contain the expected props', () => {
      // Arrange
      const propsExpected = {
        _id: {
          ...commonSchemaFieldDefObjectIdRequired,
          alias: 'userId',
        },
        userTypeId: {
          ...commonSchemaFieldDefObjectIdRequired,
          ref: 'UserTypeModel',
        },
        username: {
          ...commonSchemaFieldTypeString,
          ...commonSchemaFieldQualifierRequired,
          maxLength: 20,
        },
        password: {
          ...commonSchemaFieldTypeString,
          ...commonSchemaFieldQualifierRequired,
          maxLength: 20,
        },
        ...commonSchemaFieldGroupFooter,
      };

      // Act
      const propsFound = { ...userModelSchema };

      // Assert
      expect(propsFound).toStrictEqual(propsExpected);
    });
  });
});
