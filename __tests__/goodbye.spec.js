const { goodbye } = require('../index');

describe('goodbye', () => {
  it('should say goodbye to Alice', async () => {
    const mockProcess = jest.spyOn(process, 'exit').mockImplementation(() => {});
    await goodbye('Alice');
    expect(mockProcess).not.toHaveBeenCalled();
    jest.clearAllMocks();
  });
  it('should say goodbye to Bob', async () => {
    const mockProcess = jest.spyOn(process, 'exit').mockImplementation(() => {});
    await goodbye('Bob');
    expect(mockProcess).not.toHaveBeenCalled();
    jest.clearAllMocks();
  });
  it('should say goodbye to Chris', async () => {
    const mockProcess = jest.spyOn(process, 'exit').mockImplementation(() => {});
    await goodbye('Chris');
    expect(mockProcess).not.toHaveBeenCalled();
    jest.clearAllMocks();
  });
  it('should say goodbye to Danielle', async () => {
    const mockProcess = jest.spyOn(process, 'exit').mockImplementation(() => {});
    await goodbye('Danielle');
    expect(mockProcess).not.toHaveBeenCalled();
    jest.clearAllMocks();
  });
});
