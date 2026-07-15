import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "./ui/neon-button";

interface ThankYouProps {
  onReset: () => void;
}

export const ThankYou = ({ onReset }: ThankYouProps) => {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      className="flex flex-col items-center justify-center p-12 lg:p-20 text-center h-full min-h-[400px]"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ 
          type: "spring", 
          stiffness: 200, 
          damping: 20, 
          delay: 0.1 
        }}
        className="w-24 h-24 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-8 mx-auto shadow-lg shadow-green-100/50"
      >
        <CheckCircle2 size={48} strokeWidth={2.5} />
      </motion.div>
      
      <motion.h3 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-3xl font-black mb-4 text-slate-900 tracking-tight"
      >
        {t("thankYou.title")}
      </motion.h3>
      
      <motion.p 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-slate-600 text-lg mb-10 max-w-md mx-auto"
      >
        {t("thankYou.message")}
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button
          onClick={onReset}
          variant="solid"
          size="lg"
          className="bg-brand-100 text-white hover:bg-brand-400 rounded-2xl shadow-lg shadow-brand-100/20 px-8"
        >
          {t("thankYou.backHome")}
        </Button>
      </motion.div>
    </motion.div>
  );
};
