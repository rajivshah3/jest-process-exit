const { hello } = require('../index');

describe('hello', () => {
  it('should say hello to Alice', async () => {
    jest.spyOn(process, 'exit').mockImplementation(() => true);
    await hello('Alice');
    expect(process.exit.mock.calls[0][0]).toBe(1)
    jest.clearAllMocks();
  });
  it('should say hello to Bob', async () => {
    jest.spyOn(process, 'exit').mockImplementation(() => true);
    await hello('Bob');
    expect(process.exit.mock.calls[0][0]).toBe(1);
    jest.clearAllMocks();
  });
  it('should say hello to Chris', async () => {
    jest.spyOn(process, 'exit').mockImplementation(() => true);
    await hello('Chris');
    expect(process.exit.mock.calls[0][0]).toBe(1);
    jest.clearAllMocks();
  });
  it('should say hello to Danielle', async () => {
    jest.spyOn(process, 'exit').mockImplementation(() => true);
    await hello('Danielle');
    expect(process.exit.mock.calls[0][0]).toBe(1);
    jest.clearAllMocks();
  });
})
