import { useEffect, useState } from 'react';
import { Eye, EyeOff, AlertCircle, CheckCircle2, X } from 'lucide-react';
import clsx from 'clsx';
import { useLang } from '../context/LanguageContext';
import { validatePassword, type PasswordStrength } from '../utils/passwordValidation';

interface PasswordStepProps {
    onNext: (password: string) => void;
}

export function PasswordStep({ onNext }: PasswordStepProps) {
    const { t } = useLang();
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [strength, setStrength] = useState<PasswordStrength | null>(null);

    useEffect(() => {
        setStrength(validatePassword(password));
    }, [password]);

    const handleSubmit = () => {
        if (password !== confirmPassword) return;
        if (!strength || strength.score < 100) return;

        onNext(password);
    };

    const strengthColors = {
        weak: 'bg-red-500',
        fair: 'bg-orange-500',
        good: 'bg-yellow-500',
        strong: 'bg-green-500',
    };

    const strengthLabels = {
        weak: t.weak,
        fair: t.fair,
        good: t.good,
        strong: t.strong,
    };

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-semibold mb-2">{t.createPassword}</h2>
            </div>

            {/* Password Input */}
            <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                    {t.createPassword}
                </label>
                <div className="relative">
                    <input
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        placeholder={t.passwordPlaceholder}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-10"
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                </div>
            </div>

            {/* Password Strength */}
            {strength && (
                <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                        <span className="font-medium">{t.passwordStrength}</span>
                        <span className={clsx('font-semibold', {
                            'text-red-500': strength.label === 'weak',
                            'text-orange-500': strength.label === 'fair',
                            'text-yellow-500': strength.label === 'good',
                            'text-green-500': strength.label === 'strong',
                        })}>
                            {strengthLabels[strength.label]}
                        </span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                            className={clsx('h-full transition-all', strengthColors[strength.label])}
                            style={{ width: `${strength.score}%` }}
                        />
                    </div>
                </div>
            )}

            {/* Password Requirements */}
            {strength && (
                <div className="bg-gray-50 p-4 rounded-md space-y-2">
                    <p className="text-sm font-medium text-gray-700">{t.passwordRequirements}</p>
                    <div className="space-y-1">
                        {Object.entries({
                            length: t.req8Chars,
                            uppercase: t.reqUppercase,
                            lowercase: t.reqLowercase,
                            number: t.reqNumber,
                            symbol: t.reqSymbol,
                            noConsecutive: t.reqNoConsecutive,
                        }).map(([key, label]) => (
                            <div key={key} className="flex items-center gap-2 text-sm">
                                {strength.checks[key as keyof typeof strength.checks] ? (
                                    <CheckCircle2 size={16} className="text-green-500 flex-shrink-0" />
                                ) : (
                                    <X size={16} className="text-gray-400 flex-shrink-0" />
                                )}
                                <span className={strength.checks[key as keyof typeof strength.checks] ? 'text-green-700' : 'text-gray-600'}>
                                    {label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Confirm Password */}
            <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                    {t.confirmPassword}
                </label>
                <div className="relative">
                    <input
                        type={showPassword ? 'text' : 'password'}
                        value={confirmPassword}
                        onChange={e => setConfirmPassword(e.target.value)}
                        placeholder={t.confirmPasswordPlaceholder}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-10"
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                </div>
                {password !== confirmPassword && confirmPassword && (
                    <p className="text-sm text-red-500 flex items-center gap-1">
                        <AlertCircle size={14} />
                        {t.passwordMismatch}
                    </p>
                )}
            </div>

            <button
                onClick={handleSubmit}
                disabled={!strength || strength.score < 100 || password !== confirmPassword}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition"
            >
                {t.continue}
            </button>
        </div>
    );
}