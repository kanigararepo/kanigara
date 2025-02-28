import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login Admin",
  description: "Manage your site with the admin panel",
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <div className="min-h-screen w-full bg-gradient-to-br from-lime-600 to-lime-700 flex justify-center items-center">{children}</div>;
}
