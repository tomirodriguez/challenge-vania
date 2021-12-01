import canSellTicketsToAllThePeople from "./vania";

test("If no people, can sell to all", () => {
  expect(canSellTicketsToAllThePeople([])).toBe('SI');
});

test("If first people has 100 or 50, can't sell tickets", () => {
  expect(canSellTicketsToAllThePeople([100])).toBe('NO');
  expect(canSellTicketsToAllThePeople([50])).toBe('NO');
});

test("If Vania has 25, and person 100, can't sell tickets", () => {
  expect(canSellTicketsToAllThePeople([25, 100])).toBe('NO');
});

test("If Vania has 25, and person has 50, can sell tickets", () => {
  expect(canSellTicketsToAllThePeople([25, 50])).toBe('SI');
});

test("If Vania has no money and person 50, can't sell tickets", () => {
  expect(canSellTicketsToAllThePeople([25, 50, 50])).toBe('NO');
});

test("If Vania has 25 and 50, and person 100, can sell tickets", () => {
  expect(canSellTicketsToAllThePeople([25, 50, 25, 100])).toBe('SI');
});

test("If Vania has 25x3 and person 100, can sell tickets", () => {
  expect(canSellTicketsToAllThePeople([25, 25, 25, 100])).toBe('SI');
});

test("Vania uses greater banknotes when shen can", () => {
  expect(canSellTicketsToAllThePeople([25, 25, 25, 25, 50, 100, 50])).toBe('SI');
  expect(canSellTicketsToAllThePeople([25, 25, 25, 50, 25, 100, 50])).toBe('SI');
  expect(canSellTicketsToAllThePeople([25, 25, 50, 25, 25, 100, 50])).toBe('SI');
  expect(canSellTicketsToAllThePeople([25, 50, 25, 25, 25, 100, 50])).toBe('SI');
});

test("Cant use invalid amount of banknotes", () => {
  expect(canSellTicketsToAllThePeople([25, 37])).toBe('NO');
});

test("Challenge excamples", () => {
  expect(canSellTicketsToAllThePeople([25, 25, 50])).toBe('SI');
  expect(canSellTicketsToAllThePeople([25, 100])).toBe('NO');
  expect(canSellTicketsToAllThePeople([25, 25, 50, 50, 100])).toBe('NO');

  //   tickets([25, 25, 50]) // => SI
  // tickets([25, 100]) // => NO. Vania no tendra suficiente dinero para dar cambio/vuelto a los
  // 100 dolares
  // tickets([25, 25, 50, 50, 100]) // => NO. Vania no tendra suficiente dinero para dar 75 dolares
  // de cambio/vuelto (no puedes crear dos billetes de 25 a partir de un billete de 50)
});
