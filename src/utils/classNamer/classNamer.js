function argumentReducer(classNameSet, argument) {
  if (Array.isArray(argument)) {
    throw Error('classNamer requires only strings or objects as arguments');
  }

  if (typeof argument === 'string') {
    return classNameSet.add(argument);
  }

  if (typeof argument === 'object') {
    Object.entries(argument).forEach(([className, condition]) => {
      if (condition) {
        classNameSet.add(className);
      }
    });
    return classNameSet;
  }

  throw Error('classNamer requires only strings or objects as arguments');
}

export default function classNamer(...args) {
  const classNameSet = args.reduce(argumentReducer, new Set());
  return Array.from(classNameSet).join(' ');
}
