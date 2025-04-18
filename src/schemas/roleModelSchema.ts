import {
  commonSchemaFieldDefObjectIdRequired,
  commonSchemaFieldGroupModelType,
} from '@datr.tech/leith-common-schema-fields';

export const roleModelSchema = {
  _id: {
    ...commonSchemaFieldDefObjectIdRequired,
    alias: 'roleId',
  },
  ...commonSchemaFieldGroupModelType,
};
