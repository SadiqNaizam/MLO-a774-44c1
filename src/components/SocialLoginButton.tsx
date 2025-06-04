import React from 'react';
import { Button, ButtonProps } from '@/components/ui/button'; // Using shadcn Button
import { LucideIcon } from 'lucide-react'; // For typing the icon prop

interface SocialLoginButtonProps extends Omit<ButtonProps, 'onClick'> {
  providerName: string;
  icon?: LucideIcon | React.ReactElement; // Allow passing a LucideIcon component or a ReactElement for custom SVGs
  onClick: (provider: string) => void;
  className?: string;
}

const SocialLoginButton: React.FC<SocialLoginButtonProps> = ({
  providerName,
  icon: IconComponent,
  onClick,
  className,
  variant = "outline", // Default variant
  ...props
}) => {
  console.log(`Rendering SocialLoginButton for provider: ${providerName}`);

  const handleClick = () => {
    console.log(`SocialLoginButton clicked for provider: ${providerName}`);
    onClick(providerName.toLowerCase()); // Pass provider name (e.g., 'google', 'github')
  };

  return (
    <Button
      variant={variant}
      className={`w-full flex items-center justify-center gap-2 ${className}`}
      onClick={handleClick}
      {...props}
    >
      {IconComponent && React.isValidElement(IconComponent) ? (
        IconComponent
      ) : IconComponent ? (
        // If IconComponent is a LucideIcon constructor
        React.createElement(IconComponent as LucideIcon, { className: "h-5 w-5" })
      ) : null}
      <span>Login with {providerName}</span>
    </Button>
  );
};

export default SocialLoginButton;