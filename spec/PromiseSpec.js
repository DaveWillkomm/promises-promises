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
  });
});
