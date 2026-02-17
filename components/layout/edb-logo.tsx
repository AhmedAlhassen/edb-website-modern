import Image from 'next/image';
import type { Locale } from '@/lib/i18n/config';

type Props = {
  locale: Locale;
  className?: string;
  width?: number;
  height?: number;
};

export function EdbLogo({ locale, className, width = 170, height = 58 }: Props) {
  const alt = locale === 'ar' ? 'شعار بنك تنمية الصادرات' : 'EDB Sudan logo';

  return (
    <Image
      src="/edb-logo.svg"
      alt={alt}
      width={width}
      height={height}
      className={`block w-auto object-contain ${className ?? ''}`}
      priority
    />
  );
}
