export function mockRequest(data): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 1000);
  });
}

export const getRequest = mockRequest({ data: { name: 'test' } });
