import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 to-black text-white">
      <motion.div
        className="bg-[#1A1A1A]/70 p-10 rounded-2xl shadow-2xl backdrop-blur-md max-w-sm w-full text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-2xl font-bold mb-6">Welcome to Forescribe</h1>
        <button className="w-full mb-4 bg-[#6753FE] hover:bg-[#5948E0] text-white font-semibold py-3 rounded-lg transition">
          Continue with Google
        </button>
        <button className="w-full bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 rounded-lg transition">
          Continue with Microsoft
        </button>
        <p className="mt-4 text-sm text-gray-400">
          By clicking “Continue”, you acknowledge that you agree to our Terms & Conditions and Privacy Policy.
        </p>
      </motion.div>
    </main>
  );
}
