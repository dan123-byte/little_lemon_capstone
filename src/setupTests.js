// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

try {
  jest.mock('react-router-dom', () => ({
    Link: 'a',
    useLocation: () => ({ pathname: '/' }),
  }));
} catch (e) {
  console.warn('react-router-dom not found, skipping mock');
}