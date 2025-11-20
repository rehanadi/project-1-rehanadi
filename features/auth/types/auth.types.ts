export interface AuthField {
  id: string;
  type: 'text' | 'number' | 'email' | 'password';
  label: string;
  value: string;
  isRequired?: boolean;
  errorText?: string;
  variant?: 'default' | 'danger';
}

export interface AuthFormType {
  title: string;
  description: string;
  fields: AuthField[];
  buttonText: string;
  onSubmit?: (formData: FormData) => void;
  footerText?: string;
  footerLinkText?: string;
  footerLinkHref?: string;
}
