describe('Promise', () => {
  describe('executor', () => {
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
      it('works', done => {
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
});
