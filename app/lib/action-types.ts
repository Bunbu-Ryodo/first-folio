type RegisterState = {
    errors?: {
      email?: string[];
      password?: string[];
      confirmPassword?: string[];
    };
    message?: string | null;
    loading?: boolean
  };
  
  type ChangeEmailState = {
    errors?: {
      email?: string[];
      confirmEmail?: string[];
    }
    message?: string | null;
  }

  type ChangePasswordState = {
    errors?: {
      currentPassword?: string[];
      newPassword?: string[];
      confirmPassword?: string[];
    }
    message?: string | null;
  }