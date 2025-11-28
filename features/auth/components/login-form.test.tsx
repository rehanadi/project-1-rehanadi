import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import LoginForm from '../components/login-form';
import * as authHooks from '../hooks';
import authReducer from '@/features/auth/stores/auth-slice';

// Mock the useLogin hook
jest.mock('../hooks', () => ({
  useLogin: jest.fn(),
}));

// Mock the cart hook
jest.mock('@/features/cart/hooks', () => ({
  useGetMyCart: jest.fn(() => ({
    refetch: jest.fn(),
  })),
}));

describe('LoginForm', () => {
  const mockLoginMutate = jest.fn();
  let store: any;
  let queryClient: QueryClient;

  beforeEach(() => {
    jest.clearAllMocks();

    // Setup store
    store = configureStore({
      reducer: {
        auth: authReducer,
      },
    });

    // Setup query client
    queryClient = new QueryClient({
      defaultOptions: {
        queries: { retry: false },
      },
    });
    (authHooks.useLogin as jest.Mock).mockReturnValue({
      mutate: mockLoginMutate,
      isPending: false,
    });
  });

  const renderLoginForm = () => {
    return render(
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <LoginForm />
        </QueryClientProvider>
      </Provider>
    );
  };

  it('renders login form with all fields', () => {
    renderLoginForm();

    expect(screen.getByRole('heading', { name: /login/i })).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /register/i })).toBeInTheDocument();
  });

  it('submits form with valid data', async () => {
    const user = userEvent.setup();
    renderLoginForm();

    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);

    await user.type(emailInput, 'rehan@gmail.com');
    await user.type(passwordInput, '12345678');

    const submitButton = screen.getByRole('button', { name: /login/i });
    await user.click(submitButton);

    await waitFor(() => {
      expect(mockLoginMutate).toHaveBeenCalledWith(
        {
          email: 'rehan@gmail.com',
          password: '12345678',
        },
        expect.any(Object)
      );
    });
  });
});
