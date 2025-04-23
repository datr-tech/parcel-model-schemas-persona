import { organisationModelSchema } from '@app-pmsp/schemas';
import {
  commonSchemaFieldDefObjectIdRequired,
  commonSchemaFieldGroupModelType,
} from '@datr.tech/parcel-model-schemas-common-fields';

describe('organisationModelSchema', () => {
  describe('positive', () => {
    test('should contain the expected props', () => {
      // Arrange
      const propsExpected = {
        _id: {
          ...commonSchemaFieldDefObjectIdRequired,
          alias: 'organisationId',
        },
        frameworkId: {
          ...commonSchemaFieldDefObjectIdRequired,
          ref: 'entity/FrameworkModel',
        },
        organisationTypeId: {
          ...commonSchemaFieldDefObjectIdRequired,
          ref: 'OrganisationTypeModel',
        },
        ...commonSchemaFieldGroupModelType,
      };
      // Act
      const propsFound = { ...organisationModelSchema };

      // Assert
      expect(propsFound).toStrictEqual(propsExpected);
    });
  });
});
