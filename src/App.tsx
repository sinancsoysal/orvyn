import { useState } from 'react';
import { AlertCircle, Loader2 } from 'lucide-react';
import clsx from 'clsx';
import { LanguageProvider, useLang } from './context/LanguageContext';
import { InvitationLoading } from './components/InvitationLoading';
import { PasswordStep } from './components/PasswordStep';
import { UserInfoStep } from './components/UserInfoStep';
import { SuccessStep } from './components/SuccessStep';
import {
  acceptInvitation
}
  from './api/signupApi';

function SignupApp() {
  const { lang, setLang, t } = useLang();
  const [step, setStep] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [userData, setUserData] = useState({
    user_id: '',
    password: '',
    full_name: '',
    username: ''
  });
  const [loading, setLoading] = useState(false);

  const handleInvitationLoad = (token: string) => {
    setToken(token);
    setStep(1);
  };

  const handlePasswordNext = (password: string) => {
    setUserData(prev => ({ ...prev, password }));
    setStep(2);
  };

  const handleUserInfoNext = async (fullName: string, username: string) => {
    if (!token) return

    setLoading(true);

    const newUserData = {
      ...userData,
      full_name: fullName,
      username
    };

    setUserData(newUserData);

    try {
      const signupResult =
        await acceptInvitation(
          {
            token: token,
            password: userData.password,
            full_name: fullName,
            username: username
          })

      if (!signupResult) throw new Error("Signup failed!")
      setStep(3);
    } catch (err: any) {
      setError(t.signUpFailed);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="text-center space-y-4">
          <Loader2 className="h-12 w-12 animate-spin mx-auto text-blue-600" />
          <p className="text-gray-600">{t.creatingUser}</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
          <div className="text-center space-y-4">
            <AlertCircle size={48} className="mx-auto text-red-500" />
            <h2 className="text-xl font-semibold text-gray-900">{t.error}</h2>
            <p className="text-gray-600">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="bg-gray-900 text-white p-6 rounded-t-lg flex justify-between items-center">
          <span className="text-xl font-bold">BUME</span>
          <div className="flex gap-2">
            <button
              onClick={() => setLang('tr')}
              className={clsx(
                'px-2 py-1 rounded text-sm',
                lang === 'tr' ? 'bg-white text-gray-900' : 'hover:bg-gray-800'
              )}
            >
              TR
            </button>
            <button
              onClick={() => setLang('en')}
              className={clsx(
                'px-2 py-1 rounded text-sm',
                lang === 'en' ? 'bg-white text-gray-900' : 'hover:bg-gray-800'
              )}
            >
              EN
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-b-lg shadow-lg p-8">
          {step === 0 && (
            <InvitationLoading onLoad={handleInvitationLoad} onError={setError} />
          )}
          {step === 1 && (
            <PasswordStep onNext={handlePasswordNext} />
          )}
          {step === 2 && <UserInfoStep onNext={handleUserInfoNext} />}
          {step === 3 && <SuccessStep />}
        </div>

        {/* Footer */}
        <div className="mt-4 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} BUME. {lang === 'tr' ? 'Tüm hakları saklıdır.' : 'All rights reserved.'}
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <SignupApp />
    </LanguageProvider>
  );
}