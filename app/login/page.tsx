import Link from "next/link";
import { AuthShell } from "../auth";

export const metadata = { title: "Sign In — ByteSpace" };

export default function LoginPage() {
  return (
    <AuthShell
      intro={{ title: "Sign in with ease", text: "Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge." }}
      eyebrow="Sign In"
      title="Welcome Back"
      fields={[
        { label: "Email", name: "email", type: "email", placeholder: "designer@example.com", autoComplete: "email" },
        { label: "Password", name: "password", type: "password", placeholder: "********", autoComplete: "current-password" },
      ]}
      submit="Sign In"
      social
      footer={<>New user? <Link href="/register" className="text-brand">Create an account</Link></>}
    />
  );
}
