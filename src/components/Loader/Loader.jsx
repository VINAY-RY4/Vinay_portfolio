import { motion, AnimatePresence } from 'framer-motion';
import './Loader.css';

export default function Loader({ loading }) {
  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="loader"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <div className="loader-mark">
            <span>&lt;</span>
            <motion.span
              className="loader-name"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              VR
            </motion.span>
            <span>/&gt;</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
