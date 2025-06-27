describe('electronsAroundTheCores', () => {
  it('Für einen einzigen Wurf mit 3 soll der Wert 2 zurückgegeben werden', () => {
    expect(electronsAroundTheCores([3])).toBe(2);
  });

  it ('Für einen einzigen Wurf mit 5 soll der Wert 4 zurückgegeben werden', () => {
    expect(electronsAroundTheCores([5])).toBe(4);
  });
});