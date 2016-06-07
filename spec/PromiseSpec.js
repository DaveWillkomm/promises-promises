describe('Promise', () => {
  describe('resolved with a resolved promise', () => {
    it('resolves the original promise with a new promise', done => {
      new Promise(resolve => resolve(Promise.resolve('test-resolution')))
        .then(result => {
          expect(result).toBe('test-resolution');
          done();
        });
    });
  });

  describe('resolved with a rejected promise', () => {
    it('rejects the original promise with a new promise', done => {
      new Promise(resolve => resolve(Promise.reject('test-rejection')))
        .catch(reason => {
          expect(reason).toBe('test-rejection');
          done();
        });
    });
  });

  describe('given an exception is raised', () => {
    it('rejects the promise', done => {
      new Promise(() => { throw new Error('#failwhale'); })
        .catch(reason => {
          expect(reason.message).toBe('#failwhale');
          done();
        });
    });
  });

  describe('combined with setTimeout()', () => {
    it('resolves the promise later', done => {
      spyOn(global, 'setTimeout');
      global.setTimeout.and.callThrough();

      new Promise(resolve => global.setTimeout(param => resolve(param), 0, 'test-parameter'))
        .then(result => {
          expect(result).toBe('test-parameter');
          expect(global.setTimeout).toHaveBeenCalledTimes(1);
          done();
        });
    });
  });
});
