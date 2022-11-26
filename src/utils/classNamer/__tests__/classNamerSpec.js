import classNamer from '../classNamer';

describe('classNamer', () => {
  describe('should work', () => {
    test('with empty string', () => {
      expect(classNamer('')).toBe('');
    });

    test('with single string', () => {
      expect(classNamer('test')).toBe('test');
    });

    test('with multiple words in a string', () => {
      expect(classNamer('test color-red padding-right')).toBe('test color-red padding-right');
    });

    test('with multiple duplicate words in a string', () => {
      expect(classNamer('test test color-red padding-right')).toBe('test color-red padding-right');
    });

    test('with empty object', () => {
      expect(classNamer({})).toBe('');
    });

    test('with simple object', () => {
      expect(classNamer({ 'color-red': true })).toBe('color-red');
      expect(classNamer({ 'color-blue': false })).toBe('');
    });

    test('with complex object', () => {
      expect(classNamer({ 'color-red': true, 'color-blue': 1 === 2 })).toBe('color-red');
      expect(classNamer({ 'color-red': false, 'color-blue': 1 === 2 })).toBe('');
    });

    test('with combination of objects, strings and deduplications', () => {
      expect(classNamer('test', { test: false })).toBe('test');
      expect(classNamer(
        'test color-red',
        { 'text-xl': true },
        'color-red',
        { 'px-3': false },
      )).toBe('test color-red text-xl');
    });

    test('and deduplicate words in words from object keys', () => {
      expect(classNamer({ test: true }, { test: true })).toBe('test');
    });
  });
});
