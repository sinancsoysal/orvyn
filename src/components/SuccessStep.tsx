import { CheckCircle2 } from 'lucide-react';
import { useLang } from '../context/LanguageContext';

export function SuccessStep() {
  const { t } = useLang();

  return (
    <div className="text-center space-y-6">
      <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
        <CheckCircle2 size={32} className="text-green-600" />
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-2">{t.welcomeToBUME}</h2>
        <p className="text-lg text-gray-600">{t.registrationComplete}</p>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg">
        <p className="text-gray-700">{t.integrationStarted}</p>
      </div>

      <p className="text-gray-600">{t.thankYou}</p>
    </div>
  );
}