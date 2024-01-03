function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

export default getBudgetForCurrentYeari = (income, gdp, capita) => {
  const budget = {
    budget[`income-${getCurrentYear()}`] = income;
    budget[`gdp-${getCurrentYear()}`] = gdp;
    budget[`capita-${getCurrentYear()}`] = capita;
  }

  return budget;
}
