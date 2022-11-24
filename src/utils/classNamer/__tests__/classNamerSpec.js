import classNamer from '../classNamer';

describe('classNamer', () => {
  describe('should work', () => {
    test('with empty string', () => {
      expect(classNamer('')).toBe('');
    });

    test('with single string', () => {
      expect(classNamer('test')).toBe('test');
    });

    test('with multiple string', () => {
      expect(classNamer('test color-red padding-right')).toBe('test color-red padding-right');
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
  });

  describe('should throw', () => {
    test('if array is passed', () => {
      expect(() => {
        classNamer(['test']);
      }).toThrow();

      expect(() => {
        classNamer('test', ['test']);
      }).toThrow();

      expect(() => {
        classNamer(['test'], 'test');
      }).toThrow();
    });
  });

  describe('should throw', () => {
    test('if number is passed', () => {
      expect(() => {
        classNamer(1);
      }).toThrow();

      expect(() => {
        classNamer(1, 2);
      }).toThrow();

      expect(() => {
        classNamer(1, 2, 'test');
      }).toThrow();
    });
  });
});
