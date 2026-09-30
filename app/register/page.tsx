import Link from "next/link";
import { AuthShell } from "../auth";

export const metadata = { title: "Create an Account — ByteSpace" };

export default function RegisterPage() {
  return (
    <AuthShell
      intro={{ title: "Sign up and come in", text: "The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost" }}
      eyebrow="Create an Account"
      title="Welcome to ByteSpace"
      fields={[
        { label: "Full Name", name: "name", type: "text", placeholder: "Jamie Davis", autoComplete: "name" },
        { label: "Email", name: "email", type: "email", placeholder: "designer@example.com", autoComplete: "email" },
        { label: "Password", name: "password", type: "password", placeholder: "********", autoComplete: "new-password" },
      ]}
      submit="Continue"
      footer={<><span className="text-body">Already have an account?</span> <Link href="/login" className="text-brand">Login</Link></>}
    />
  );
}
