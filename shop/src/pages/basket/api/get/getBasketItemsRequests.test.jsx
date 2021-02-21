import getBasketItemsRequests from './getBasketItemsRequests';

it('fetches successfully data from an API', async () => {
  const data = [
    {
      id: 1,
      description: 'Светильник потолочный Box Silver',
      price: 163,
      counter: 1,
    },
  ];

  const MyMethodSetPopupThanksActive = jest.fn().mockImplementation(() => true);
  const MyMethodSetpopupSmthWentWrongActive = jest.fn().mockImplementation(() => true);

  const result = getBasketItemsRequests(
    data, MyMethodSetPopupThanksActive, MyMethodSetpopupSmthWentWrongActive,
  );
  expect(result).toStrictEqual(Promise.resolve());
});
