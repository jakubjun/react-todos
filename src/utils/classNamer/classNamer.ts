type ClassNameObject = Record<string, boolean>
type ClassNameSet = Set<string>
type ClassNamerArgs = (string | ClassNameObject)[]

function reduceStringToClassNameSet(classNameString: string, classNameSet: ClassNameSet) {
  classNameString.split(' ').forEach((word) => classNameSet.add(word));
}

function reduceObjectToClassNameSet(classNameObject: ClassNameObject, classNameSet: ClassNameSet) {
  Object.entries(classNameObject).forEach(([className, condition]) => {
    if (condition) {
      reduceStringToClassNameSet(className, classNameSet);
    }
  });
}

function argumentReducer(classNameSet: ClassNameSet, argument: string | ClassNameObject) {
  if (typeof argument === 'string') {
    reduceStringToClassNameSet(argument, classNameSet);
  }

  if (typeof argument === 'object') {
    reduceObjectToClassNameSet(argument, classNameSet);
  }

  return classNameSet;
}

/**
  * To be used for dynamically constructing className string.
  * an object is given.
  * or deduplicated word string of truthy fields\' keys if an
  * object is given.
  */
export default function classNamer(...args: ClassNamerArgs) {
  const classNameSet = args.reduce(argumentReducer, new Set());
  return Array.from(classNameSet).join(' ');
}
