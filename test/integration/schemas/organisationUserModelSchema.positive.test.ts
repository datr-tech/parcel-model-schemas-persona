import {
  commonSchemaFieldDefObjectIdRequired,
  commonSchemaFieldGroupModelType,
} from '@datr.tech/parcel-model-schemas-common-fields';
import { organisationUserModelSchema } from './../../../dist';

describe('organisationUserModelSchema', () => {
  describe('positive', () => {
    test('should contain the expected props', () => {
      // Arrange
      const propsExpected = {
        _id: {
          ...commonSchemaFieldDefObjectIdRequired,
          alias: 'organisationUserId',
        },
        organisationId: {
          ...commonSchemaFieldDefObjectIdRequired,
          ref: 'OrganisationModel',
        },
        userId: {
          ...commonSchemaFieldDefObjectIdRequired,
          ref: 'UserModel',
        },
        ...commonSchemaFieldGroupModelType,
      };

      // Act
      const propsFound = { ...organisationUserModelSchema };

      // Assert
      expect(propsFound).toStrictEqual(propsExpected);
    });
  });
});
