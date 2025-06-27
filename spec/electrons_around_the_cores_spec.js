describe('electronsAroundTheCores', () => {
  it('Für einen einzigen Wurf mit 3 soll der Wert 2 zurückgegeben werden', () => {
    expect(electronsAroundTheCores([3])).toBe(2);
  });

  it('Für einen einzigen Wurf mit 5 soll der Wert 4 zurückgegeben werden', () => {
    expect(electronsAroundTheCores([5])).toBe(4);
  });

  it('Für einen Wurf ohne 3/5 (zB [1,2,4,6] soll der Wert 0 zurückgegeben werden', () => {
    expect(electronsAroundTheCores([1,2,4,6])).toBe(0);
  });

  it('Für einen Wurf [3,3] soll der Wert 4 zurückgegeben werden', () => {
    expect(electronsAroundTheCores([3,3])).toBe(4);
  });

  it('Für einen Wurf [5,5] soll der Wert 8 zurückgegeben werden', () => {
    expect(electronsAroundTheCores([5,5])).toBe(8);
  });

  it('Sollte für den Wurf [1,2,3,4,5] den Wert 6 zurückgeben', () => {
    expect(electronsAroundTheCores([1,2,3,4,5])).toBe(6);
  });
  
  it('Sollte für den Wurf [6,6,4,4,1,3] den Wert 2 zurückgeben', () => {
    expect(electronsAroundTheCores([6,6,4,4,1,3])).toBe(2);
  });
  
  it('Sollte für den Wurf [3,5,3,5,4,2] den Wert 12 zurückgeben', () => {
    expect(electronsAroundTheCores([3,5,3,5,4,2])).toBe(12);
  });
});