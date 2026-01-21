export const translations = {
    tr: {
      // Step 1: Invitation Loading
      loadingInvitation: 'Davet bilgileri yükleniyor...',
      invitationNotFound: 'Davet bulunamadı',
      invitationExpired: 'Bu davet süresi dolmuş',
      invitationUsed: 'Bu davet zaten kullanılmış',
      invitationCancelled: 'Bu davet iptal edilmiş',
      invalidInvitation: 'Geçersiz davet bağlantısı',

      // Step 2: Password
      createPassword: 'Şifre Oluşturun',
      passwordPlaceholder: 'Şifrenizi girin',
      confirmPassword: 'Şifre Onayı',
      confirmPasswordPlaceholder: 'Şifrenizi tekrar girin',
      passwordMismatch: 'Şifreler eşleşmiyor',
      passwordStrength: 'Şifre Gücü',
      weak: 'Zayıf',
      fair: 'Orta',
      good: 'İyi',
      strong: 'Güçlü',
      passwordRequirements: 'Şifre Gereksinimleri:',
      req8Chars: 'En az 8 karakter',
      reqUppercase: 'En az bir büyük harf',
      reqLowercase: 'En az bir küçük harf',
      reqNumber: 'En az bir rakam',
      reqSymbol: 'En az bir özel karakter',
      reqNoConsecutive: 'Ardışık rakamlar yok (örn: 123)',

      // Step 3: User Info
      userInformation: 'Kullanıcı Bilgileri',
      fullName: 'Ad Soyad',
      fullNamePlaceholder: 'Adınızı ve soyadınızı girin',
      username: 'Kullanıcı Adı',
      usernamePlaceholder: 'Kullanıcı adınızı girin',
      usernameHint: 'Sadece harf, rakam ve alt çizgi kullanılabilir',
      email: 'E-posta',
      fullNameInvalid: 'Kabul edilmeyen karakterler bulunuyor',
      usernameInvalid: 'Bu kullanıcı adı kabul edilmeyen karakterler içeriyor',
      signUpFailed: 'Ops. Kayıt işlemi başarısız oldu. Sistem yöneticinize danışınız.',

      // Step 4: MFA Setup
      setupMFA: 'İki Faktörlü Kimlik Doğrulama (2FA) Kurulumu',
      mfaDescription: 'Kimlik doğrulama uygulamanızı veya şifre yöneticinizi açın ve bu QR kodunu tarayın',
      mfaManual: 'veya aşağıdaki kodu manuel olarak girin',
      enterVerificationCode: '6 haneli doğrulama kodunu girin',
      verificationError: 'Doğrulama başarısız. Lütfen tekrar deneyin.',

      // Step 5: Success
      welcomeToBUME: 'BUME\'ye Hoş Geldiniz!',
      registrationComplete: 'Kaydınız başarıyla tamamlandı',
      integrationStarted: 'Entegrasyonunuz başlatıldı ve 24-48 saat içinde bir sonraki adımlar hakkında bilgilendirileceksiniz.',
      thankYou: 'Kayıt olduğunuz için teşekkür ederiz!',
      goToApp: 'Uygulamaya Git',

      // Buttons
      continue: 'Devam Et',
      back: 'Geri',
      cancel: 'İptal',

      // Common
      loading: 'Yükleniyor...',
      error: 'Hata',
      required: 'Bu alan zorunludur',
      creatingUser: 'Kullanıcı oluşturuluyor...',
      inputRequired: 'Bu alan boş bırakılamaz',
    },
    en: {
      // Step 1: Invitation Loading
      loadingInvitation: 'Loading invitation details...',
      invitationNotFound: 'Invitation not found',
      invitationExpired: 'This invitation has expired',
      invitationUsed: 'This invitation has already been used',
      invitationCancelled: 'This invitation has been cancelled',
      invalidInvitation: 'Invalid invitation link',

      // Step 2: Password
      createPassword: 'Create Password',
      passwordPlaceholder: 'Enter your password',
      confirmPassword: 'Confirm Password',
      confirmPasswordPlaceholder: 'Re-enter your password',
      passwordMismatch: 'Passwords do not match',
      passwordStrength: 'Password Strength',
      weak: 'Weak',
      fair: 'Fair',
      good: 'Good',
      strong: 'Strong',
      passwordRequirements: 'Password Requirements:',
      req8Chars: 'At least 8 characters',
      reqUppercase: 'At least one uppercase letter',
      reqLowercase: 'At least one lowercase letter',
      reqNumber: 'At least one number',
      reqSymbol: 'At least one special character',
      reqNoConsecutive: 'No consecutive numbers (e.g., 123)',

      // Step 3: User Info
      userInformation: 'User Information',
      fullName: 'Full Name',
      fullNamePlaceholder: 'Enter your full name',
      username: 'Username',
      usernamePlaceholder: 'Enter your username',
      usernameHint: 'Only letters, numbers, and underscores allowed',
      email: 'Email',
      fullNameInvalid: 'Name can\'t contain invalid characters',
      usernameInvalid: 'Username is invalid',
      signUpFailed: 'Signup failed. Please contact system administrator.',

      // Step 4: MFA Setup
      setupMFA: 'Set up Two-Factor Authentication (2FA)',
      mfaDescription: 'Open your authenticator app or password manager and scan this QR code',
      mfaManual: 'or manually enter the following code',
      enterVerificationCode: 'Enter 6-digit verification code',
      verificationError: 'Verification failed. Please try again.',

      // Step 5: Success
      welcomeToBUME: 'Welcome to BUME!',
      registrationComplete: 'Your registration is complete',
      integrationStarted: 'Your integration has been started and you will be notified about the next steps within 24-48 hours.',
      thankYou: 'Thank you for registering!',
      goToApp: 'Go to App',

      // Buttons
      continue: 'Continue',
      back: 'Back',
      cancel: 'Cancel',

      // Common
      loading: 'Loading...',
      error: 'Error',
      required: 'This field is required',
      creatingUser: 'Creating user...',
      inputRequired: 'This field can not be empty',
    },
  };

  export type TranslationKey = keyof typeof translations.tr;
  export type Language = keyof typeof translations;