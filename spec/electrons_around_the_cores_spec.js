describe('electronsAroundTheCores', () => {
  it('Für einen einzigen Wurf mit 3 soll der Wert 2 zurückgegeben werden', () => {
    expect(electronsAroundTheCores([3])).toBe(2);
  });

  it('Für einen einzigen Wurf mit 5 soll der Wert 4 zurückgegeben werden', () => {
    expect(electronsAroundTheCores([5])).toBe(4);
  });

  it('Für einen Wurf ohne 3/5 (zB [1,2,4,6] soll der Wert 0 zurückgegeben werden', () => {
    expect(electronsAroundTheCores([1,2,4,6]).toBe(0));
  });

  it('Für einen Wurf [3,3] soll der Wert 4 zurückgegeben werden', () => {
    expect(electronsAroundTheCores([3,3]).toBe(4));
  });
  
});