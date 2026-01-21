import { useState } from 'react';
import { AlertCircle } from 'lucide-react';
import { useLang } from '../context/LanguageContext';

interface UserInfoStepProps {
  onNext: (fullName: string, username: string) => void;
}

export function UserInfoStep({ onNext }: UserInfoStepProps) {
  const { t } = useLang();

  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');

  const [fullNameError, setFullNameError] = useState('');
  const [usernameError, setUsernameError] = useState('');

  const validate = () => {
    let isValid = true;

    // Reset previous errors
    setFullNameError('');
    setUsernameError('');

    // Full name: letters and spaces only
    if (!fullName.trim()) {
      setFullNameError(t.inputRequired);
      isValid = false;
    } else if (!/^[a-zA-Z\s]+$/.test(fullName)) {
      setFullNameError(
        t.fullNameInvalid
      );
      isValid = false;
    }

    // Username: letters, numbers, underscore
    if (!username.trim()) {
      setUsernameError(t.inputRequired);
      isValid = false;
    } else if (!/^[a-zA-Z0-9_]+$/.test(username)) {
      setUsernameError(t.usernameHint);
      isValid = false;
    }

    return isValid;
  };

  const capitalizeWords = (value: string) => {
    return value.replace(/\b\p{L}/gu, char => char.toUpperCase());
  };

  const handleFullNameChange = (value: string) => {
    setFullName(capitalizeWords(value));
  };

  const handleSubmit = () => {
    if (!validate()) return;
    onNext(fullName.trim(), username.trim());
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold mb-2">{t.userInformation}</h2>
      </div>

      {/* Full name */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          {t.fullName}
        </label>
        <input
          type="text"
          value={fullName}
          onChange={e => handleFullNameChange(e.target.value)}
          placeholder={t.fullNamePlaceholder}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />

        {fullNameError && (
          <p className="text-sm text-red-500 flex items-center gap-1">
            <AlertCircle size={14} />
            {fullNameError}
          </p>
        )}
      </div>

      {/* Username */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          {t.username}
        </label>
        <input
          type="text"
          value={username}
          onChange={e => setUsername(e.target.value)}
          placeholder={t.usernamePlaceholder}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        {usernameError ? (
          <p className="text-sm text-red-500 flex items-center gap-1">
            <AlertCircle size={14} />
            {usernameError}
          </p>
        ) : (
          <p className="text-sm text-gray-500">{t.usernameHint}</p>
        )}
      </div>

      <button
        onClick={handleSubmit}
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
      >
        {t.continue}
      </button>
    </div>
  );
}
