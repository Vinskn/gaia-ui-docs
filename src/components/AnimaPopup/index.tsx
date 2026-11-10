import React, { useEffect } from 'react';
import { Button } from '@navatech/gaia-ui/base';
import styles from './styles.module.css';

export type TAnimaPopupSeverity = 'standard' | 'danger' | 'warning' | 'info' | 'success';
export type TAnimaPopupVariant = 'gradient' | 'solid' | 'glass' | 'gradient-glass';
export type TAnimaPopupSize = 'sm' | 'md' | 'lg' | 'xl';

export interface AnimaPopupProps {
  open: boolean;
  onClose: () => void;
  onAccept?: () => void;
  header?: string;
  content?: string;
  severity?: TAnimaPopupSeverity;
  variant?: TAnimaPopupVariant;
  size?: TAnimaPopupSize;
}

const SeverityIcon = ({ severity }: { severity: TAnimaPopupSeverity }) => {
  switch (severity) {
    case 'success':
      return (
        <svg className={styles.iconSvg} fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
    case 'danger':
      return (
        <svg className={styles.iconSvg} fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 7.5h.008v.008H12v-.008z" />
        </svg>
      );
    case 'warning':
      return (
        <svg className={styles.iconSvg} fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 16.5h.008v.008H12v-.008z" />
        </svg>
      );
    case 'info':
      return (
        <svg className={styles.iconSvg} fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
        </svg>
      );
    case 'standard':
    default:
      return (
        <svg className={styles.iconSvg} fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
        </svg>
      );
  }
};

export const AnimaPopup: React.FC<AnimaPopupProps> = ({
  open,
  onClose,
  onAccept,
  header = 'Gaia Zenith Dialog',
  content,
  severity = 'standard',
  variant = 'gradient-glass',
  size = 'md',
}) => {
  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className={styles.overlay} onClick={onClose} role="dialog" aria-modal="true">
      <div
        className={`${styles.card} ${styles[`size_${size}`]} ${styles[`variant_${variant.replace('-', '_')}`]}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close dialog"
          className={styles.closeButton}
        >
          <svg className={styles.closeIcon} fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header & Icon */}
        <div className={styles.headerRow}>
          <div className={`${styles.severityIconWrapper} ${styles[`severity_${severity}`]}`}>
            <SeverityIcon severity={severity} />
          </div>

          <div className={styles.titleWrapper}>
            <div className={styles.zenithPill}>ZENITH PRO 🌸</div>
            <h3 className={styles.headerText}>{header}</h3>
            {content && <p className={styles.contentText}>{content}</p>}
          </div>
        </div>

        {/* Footer Actions using built-in Button from @navatech/gaia-ui */}
        <div className={styles.footerRow}>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            color="#94a3b8"
          >
            Cancel
          </Button>

          {onAccept ? (
            <Button
              variant="solid"
              size="sm"
              color="#f43f5e"
              onClick={onAccept}
            >
              Confirm Action ✨
            </Button>
          ) : (
            <Button
              variant="solid"
              size="sm"
              color="#f43f5e"
              onClick={onClose}
            >
              Understand
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AnimaPopup;

