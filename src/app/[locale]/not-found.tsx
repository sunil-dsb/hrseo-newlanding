import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

export default function NotFound() {
    const t = useTranslations('NotFound');

    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">{t('title')}</h1>
            <p className="text-lg text-zinc-600 mb-8">{t('description')}</p>
            <Link
                href="/"
                className="px-6 py-3 bg-[#F15A29] text-white rounded-full font-medium hover:bg-black transition-colors"
            >
                {t('homeButton')}
            </Link>
        </div>
    );
}
