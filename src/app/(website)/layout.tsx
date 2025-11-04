
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { AuthProvider } from "@/context/AuthContext";

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode }>) {
  return (
    <AuthProvider>
      <Navbar />
      {children}
      <Footer />
    </AuthProvider>
  );
}
