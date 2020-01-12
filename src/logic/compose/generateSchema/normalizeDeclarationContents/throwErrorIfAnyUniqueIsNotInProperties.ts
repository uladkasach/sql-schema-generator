import { Entity } from '../../../../types';

export const throwErrorIfAnyUniqueIsNotInProperties = ({ entity }: { entity: Entity }) => {
  // for each unique, check that there is a property with that same exact name
  const propertyNames = Object.keys(entity.properties);
  entity.unique.forEach((uniquePropertyName) => {
    if (!propertyNames.includes(uniquePropertyName)) {
      throw new Error(
        `entity '${entity.name}' was defined to be unique on '${uniquePropertyName}' but does not have that defined in its properties`,
      );
    }
  });
};
