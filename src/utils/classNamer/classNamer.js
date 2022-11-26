function reduceStringToClassNameSet(classNameString, classNameSet) {
  classNameString.split(' ').forEach((word) => classNameSet.add(word));
}

function reduceObjectToClassNameSet(classNameObject, classNameSet) {
  Object.entries(classNameObject).forEach(([className, condition]) => {
    if (condition) {
      reduceStringToClassNameSet(className, classNameSet);
    }
  });
}

function argumentReducer(classNameSet, argument) {
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
  * @param {...string|object} args
  * @returns {string} Returns deduplicated word string if a string is given
  * or deduplicated word string of truthy fields\' keys if an
  * object is given.
  */
export default function classNamer(...args) {
  const classNameSet = args.reduce(argumentReducer, new Set());
  return Array.from(classNameSet).join(' ');
}
