const ERROR_INVALID_BANKNOTE = new Error("The banknote the person is trying to give you, is not a valid one.");
const ERROR_NO_EXCHANGE = new Error("Vania has no exchange for the person");

// Devuelvo el string "SI" / "NO" en vez de true/false para cumplir la consigna especificada.
const canSellTicketsToAllThePeople = (
  peopleInLine: number[] = [],
  ticketValue: number = 25,
  acceptedBills: number[] = [25, 50, 100]
): string => {
  let vaniaBanknotes: { [id: number]: number } = {};
  acceptedBills.forEach((bill) => (vaniaBanknotes[bill] = 0));
  const sortedDescAcceptedBills = acceptedBills.sort((a, b) => b - a);

  const calculateExchange = (totalExchange: number) => {
    let exchangeLeft = totalExchange;
    let exchangeComposition: { banknote: number; amount: number }[] = [];

    sortedDescAcceptedBills.some((banknote) => {
      const amount = Math.floor(exchangeLeft / banknote);

      exchangeLeft -= amount <= vaniaBanknotes[banknote] ? banknote * amount : 0;

      if (amount > 0 && amount <= vaniaBanknotes[banknote]) exchangeComposition.push({ banknote, amount });
      if (exchangeLeft === 0) return true;
    });

    if (exchangeLeft > 0) throw ERROR_NO_EXCHANGE;

    return exchangeComposition;
  };

  const giveExchange = (personBanknote: number) => {
    if (vaniaBanknotes[personBanknote] === undefined) throw ERROR_INVALID_BANKNOTE;

    const exchangeNeeded = personBanknote - ticketValue;
    const exchangeComposition = calculateExchange(exchangeNeeded);

    vaniaBanknotes[personBanknote]++;
    exchangeComposition.forEach(({ banknote, amount }) => (vaniaBanknotes[banknote] -= amount));
  };

  try {
    peopleInLine.forEach(giveExchange);
  } catch (error) {
    return "NO";
  }

  return "SI";
};

export default canSellTicketsToAllThePeople;
