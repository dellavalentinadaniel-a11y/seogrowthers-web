import { render, screen, fireEvent } from '@testing-library/react';
import CookieBanner from '../CookieBanner';

// Mock localStorage
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};
Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
});

describe('CookieBanner', () => {
  beforeEach(() => {
    // Clear all instances and calls to constructor and all methods:
    localStorageMock.getItem.mockClear();
    localStorageMock.setItem.mockClear();
  });

  it('renders the cookie banner when no consent is given', () => {
    localStorageMock.getItem.mockReturnValue(null);

    render(<CookieBanner />);

    expect(
      screen.getByText(/Usamos cookies para mejorar tu experiencia/)
    ).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Aceptar/ })).toBeInTheDocument();
  });

  it('does not render when consent is already given', () => {
    localStorageMock.getItem.mockReturnValue('true');

    render(<CookieBanner />);

    expect(
      screen.queryByText(/Usamos cookies para mejorar tu experiencia/)
    ).not.toBeInTheDocument();
  });

  it('accepts cookies and hides the banner', () => {
    localStorageMock.getItem.mockReturnValue(null);

    render(<CookieBanner />);

    const acceptButton = screen.getByRole('button', { name: /Aceptar/ });
    fireEvent.click(acceptButton);

    expect(localStorageMock.setItem).toHaveBeenCalledWith(
      'cookie_consent',
      'true'
    );
    expect(
      screen.queryByText(/Usamos cookies para mejorar tu experiencia/)
    ).not.toBeInTheDocument();
  });

  it('renders the link to cookie policy', () => {
    localStorageMock.getItem.mockReturnValue(null);

    render(<CookieBanner />);

    const link = screen.getByRole('link', { name: /política de cookies/ });
    expect(link).toHaveAttribute('href', '/politica-de-cookies');
  });
});
