const { hello } = require('../index');

describe('hello', () => {
  it('should say hello to Alice', () => {
    const mockProcess = jest.spyOn(process, 'exit').mockImplementation(() => {});
    hello('Alice');
    expect(mockProcess).toHaveBeenCalled();
    jest.clearAllMocks();
  });
  it('should say hello to Bob', () => {
    const mockProcess = jest.spyOn(process, 'exit').mockImplementation(() => {});
    hello('Bob');
    expect(mockProcess).toHaveBeenCalled();
    jest.clearAllMocks();
  });
  it('should say hello to Chris', () => {
    const mockProcess = jest.spyOn(process, 'exit').mockImplementation(() => {});
    hello('Chris');
    expect(mockProcess).toHaveBeenCalled();
    jest.clearAllMocks();
  });
  it('should say hello to Danielle', () => {
    const mockProcess = jest.spyOn(process, 'exit').mockImplementation(() => {});
    hello('Danielle');
    expect(mockProcess).toHaveBeenCalled();
    jest.clearAllMocks();
  });
});
