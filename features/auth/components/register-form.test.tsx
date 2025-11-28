import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import RegisterForm from '../components/register-form';
import * as authHooks from '../hooks';
import authReducer from '@/features/auth/stores/auth-slice';

// Mock the useRegister hook
jest.mock('../hooks', () => ({
  useRegister: jest.fn(),
}));

describe('RegisterForm', () => {
  const mockRegisterMutate = jest.fn();
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
    (authHooks.useRegister as jest.Mock).mockReturnValue({
      mutate: mockRegisterMutate,
      isPending: false,
    });
  });

  const renderRegisterForm = () => {
    return render(
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <RegisterForm />
        </QueryClientProvider>
      </Provider>
    );
  };

  it('renders register form with all fields', () => {
    renderRegisterForm();

    expect(
      screen.getByRole('heading', { name: /register/i })
    ).toBeInTheDocument();
    expect(screen.getByLabelText(/^name$/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/nomor handphone/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/^password$/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/confirm password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /log in/i })).toBeInTheDocument();
  });

  it('submits form with valid data', async () => {
    const user = userEvent.setup();
    renderRegisterForm();

    await user.type(screen.getByLabelText(/^name$/i), 'Rehan');
    await user.type(screen.getByLabelText(/email/i), 'rehan@gmail.com');
    await user.type(screen.getByLabelText(/nomor handphone/i), '08123456789');
    await user.type(screen.getByLabelText(/^password$/i), '12345678');
    await user.type(screen.getByLabelText(/confirm password/i), '12345678');

    const submitButton = screen.getByRole('button', { name: /submit/i });
    await user.click(submitButton);

    await waitFor(() => {
      expect(mockRegisterMutate).toHaveBeenCalledWith({
        name: 'Rehan',
        email: 'rehan@gmail.com',
        password: '12345678',
      });
    });
  });
});
