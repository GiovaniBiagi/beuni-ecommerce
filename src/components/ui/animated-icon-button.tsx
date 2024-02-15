import { motion } from "framer-motion";

import { useState } from "react";

export interface AnimatedButtonProps {
  onClick?: () => void;
  children: (isActive: boolean) => React.ReactNode;
  className?: string;
}

export function AnimatedIconButton({
  onClick,
  children,
  className,
}: AnimatedButtonProps) {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(!isActive);
    if (onClick) {
      onClick();
    }
  };

  return (
    <motion.button
      whileTap={{ scale: 1.5 }}
      transition={{ duration: 0.2 }}
      onClick={handleClick}
      className={className}
      style={{
        cursor: "pointer",
      }}
    >
      {children(isActive)}
    </motion.button>
  );
}
