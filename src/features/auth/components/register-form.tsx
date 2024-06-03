import type { RegisterBody } from "../types";

import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Link, TextField, Typography } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  invitation_token: z.string().trim().min(1, { message: "Invitation token is required" }),
  email: z.string().trim().min(1, { message: "Email is required" }).email(),
  password: z.string().trim().min(1, { message: "Password is required" }),
  password_confirmation: z.string().trim().min(1, { message: "Password confirmation is required" }),
});

export const RegisterForm: React.FC = () => {
  const form = useForm<RegisterBody>({
    mode: "onChange",
    defaultValues: {
      invitation_token: "",
      email: "",
      password: "",
      password_confirmation: "",
    },
    resolver: zodResolver(schema),
  });

  const onSubmit = (values: RegisterBody) => {
    // eslint-disable-next-line no-console
    console.log(values);
  };

  return (
    <>
      <Typography component="h1" variant="h6" fontWeight="bolder">
        Register
      </Typography>
      <Typography variant="body1" sx={{ mt: 0.5 }}>
        Register an account using an invitation token, email address, and password.
      </Typography>

      <form
        noValidate
        onSubmit={(e) => {
          void form.handleSubmit(onSubmit)(e);
        }}
      >
        <Controller
          control={form.control}
          name="invitation_token"
          render={({ field }) => (
            <TextField
              {...field}
              fullWidth
              sx={{ mt: 2 }}
              label="Invitation Token"
              autoComplete="off"
              disabled={form.formState.isSubmitting}
              error={!!form.formState.errors.invitation_token}
              helperText={form.formState.errors.invitation_token?.message}
            />
          )}
        />

        <Controller
          control={form.control}
          name="email"
          render={({ field }) => (
            <TextField
              {...field}
              fullWidth
              sx={{ mt: 2 }}
              label="Email"
              type="email"
              inputMode="email"
              autoComplete="email"
              disabled={form.formState.isSubmitting}
              error={!!form.formState.errors.email}
              helperText={form.formState.errors.email?.message}
            />
          )}
        />

        <Controller
          control={form.control}
          name="password"
          render={({ field }) => (
            <TextField
              {...field}
              fullWidth
              sx={{ mt: 2 }}
              label="Password"
              type="password"
              autoComplete="new-password"
              disabled={form.formState.isSubmitting}
              error={!!form.formState.errors.password}
              helperText={form.formState.errors.password?.message}
            />
          )}
        />

        <Controller
          control={form.control}
          name="password_confirmation"
          render={({ field }) => (
            <TextField
              {...field}
              fullWidth
              sx={{ mt: 2 }}
              label="Password Confirmation"
              type="password"
              autoComplete="new-password"
              disabled={form.formState.isSubmitting}
              error={!!form.formState.errors.password_confirmation}
              helperText={form.formState.errors.password_confirmation?.message}
            />
          )}
        />

        <Button
          fullWidth
          sx={{ mt: 2 }}
          type="submit"
          variant="contained"
          disabled={form.formState.isSubmitting}
        >
          Register
        </Button>

        <Typography variant="body1" sx={{ mt: 2, textAlign: "center" }}>
          Already have an account? <Link href="/auth/login">Login</Link>
        </Typography>
      </form>
    </>
  );
};
