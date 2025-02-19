export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="max-w-7xl mx-auto py-16 px-4 lg:px-8 flex items-center justify-center">
      {children}
    </main>
  );
}
