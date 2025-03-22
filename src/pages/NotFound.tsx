
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, FileSearch } from "lucide-react";
import { motion } from "framer-motion";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <div className="max-w-md w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="w-24 h-24 bg-nebula-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <FileSearch className="w-12 h-12 text-nebula-700" />
          </div>
          
          <h1 className="text-4xl font-bold mb-4 text-slate-900">404</h1>
          <p className="text-xl text-slate-600 mb-8">
            Oops! We couldn't find the page you're looking for.
          </p>
          
          <Button asChild className="rounded-full bg-nebula-600 hover:bg-nebula-700">
            <Link to="/" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Return to Home
            </Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
