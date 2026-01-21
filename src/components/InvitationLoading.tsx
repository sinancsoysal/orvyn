import { useEffect } from 'react';
import { Loader2 } from 'lucide-react';
import { useLang } from '../context/LanguageContext';
import { validate_invitation } from '../api/signupApi';


interface InvitationLoadingProps {
  onLoad: (token: string) => void;
  onError: (msg: string) => void;
}

export function InvitationLoading({ onLoad, onError }: InvitationLoadingProps) {
  const { t } = useLang();

  useEffect(() => {
    const validateInvitation = async () => {
      try {
        const url = new URL(window.location.href);
        const token = url.searchParams.get('token');

        if (!token) {
          onError(t.invalidInvitation);
          return;
        }

        const invitation = await validate_invitation(token)

        if (!invitation) {
          onError(t.invitationNotFound);
        } else {
          onLoad(token);
        }
      } catch (error) {
        onError(t.invitationNotFound);
      }
    };

    validateInvitation();
  }, [onLoad, onError, t]);

  return (
    <div className="text-center space-y-4">
      <Loader2 className="h-12 w-12 animate-spin mx-auto text-blue-600" />
      <p className="text-gray-600">{t.loadingInvitation}</p>
    </div>
  );
}