"use client";
import { loginUser } from "@/services/auth/loginUser";
import { useActionState, useEffect, useRef, useState } from "react";
import { toast } from "sonner";

import { Button } from "./ui/button";
import { Field, FieldDescription, FieldGroup, FieldLabel } from "./ui/field";
import { Input } from "./ui/input";
import InputFieldError from "./shared/InputFieldError";
import { email } from "zod";
const demo_credentials = {
  admin: {
    email: "admin@ph.com",
    password: "123456",
  },
  doctor: {
    email: "rezowana@ph.com",
    password: "123456",
  },
  patient: {
    email: "firoj@ph.com",
    password: "Firoj1234!",
  },
};
const LoginForm = ({ redirect }: { redirect?: string }) => {
  const [state, formAction, isPending] = useActionState(loginUser, null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (state && !state.success && state.message) {
      toast.error(state.message);
    }
  }, [state]);

  const fillCredentials = (
    e: React.MouseEvent<HTMLButtonElement>,
    role: keyof typeof demo_credentials,
  ) => {
    e.preventDefault();
    if (emailRef.current) {
      emailRef.current.value = demo_credentials[role].email;
    }
    if (passwordRef.current) {
      passwordRef.current.value = demo_credentials[role].password;
    }
  };
  return (
    <form action={formAction}>
      {redirect && <input type="hidden" name="redirect" value={redirect} />}
      <FieldGroup>
        <div className="grid grid-cols-1 gap-4">
          {/* Email */}
          <Field>
            <FieldLabel htmlFor="email">Email</FieldLabel>
            <Input
              ref={emailRef}
              id="email"
              name="email"
              type="email"
              placeholder="m@example.com"
              // value={email}
              // onChange={(e) => setEmail(e.target.value)}
              //   required
            />

            <InputFieldError field="email" state={state} />
          </Field>

          {/* Password */}
          <Field>
            <FieldLabel htmlFor="password">Password</FieldLabel>
            <Input
              ref={passwordRef}
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              // value={password}
              // onChange={(e) => setPassword(e.target.value)}
              //   required
            />
            <InputFieldError field="password" state={state} />
          </Field>
        </div>
        <FieldGroup className="mt-4">
          <div className="flex gap-4">
            <Button
              variant="outline"
              onClick={(e) => fillCredentials(e, "admin")}
            >
              Admin
            </Button>
            <Button
              variant="outline"
              onClick={(e) => fillCredentials(e, "doctor")}
            >
              Doctor
            </Button>
            <Button
              variant="outline"
              onClick={(e) => fillCredentials(e, "patient")}
            >
              Patient
            </Button>
          </div>
          <Field>
            <Button type="submit" disabled={isPending}>
              {isPending ? "Logging in..." : "Login"}
            </Button>

            <FieldDescription className="px-6 text-center">
              Don&apos;t have an account?{" "}
              <a href="/register" className="text-blue-600 hover:underline">
                Sign up
              </a>
            </FieldDescription>
            <FieldDescription className="px-6 text-center">
              <a
                href="/forgot-password"
                className="text-blue-600 hover:underline"
              >
                Forgot password?
              </a>
            </FieldDescription>
          </Field>
        </FieldGroup>
      </FieldGroup>
    </form>
  );
};

export default LoginForm;
