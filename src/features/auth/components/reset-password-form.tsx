import type { ResetPasswordBody } from "../types";

import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Link, TextField, Typography } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  password: z.string().trim().min(1, { message: "Password is required" }),
  password_confirmation: z.string().trim().min(1, { message: "Password confirmation is required" }),
});

export interface ResetPasswordFormProps {
  token: string;
}

export const ResetPasswordForm: React.FC<ResetPasswordFormProps> = ({ token }) => {
  const form = useForm<ResetPasswordBody>({
    mode: "onChange",
    defaultValues: {
      password: "",
      password_confirmation: "",
    },
    resolver: zodResolver(schema),
  });

  const onSubmit = (values: ResetPasswordBody) => {
    // eslint-disable-next-line no-console
    console.log(values, token);
  };

  return (
    <>
      <Typography component="h1" variant="h6" fontWeight="bolder">
        Reset Password
      </Typography>
      <Typography variant="body1" sx={{ mt: 0.5 }}>
        Please enter your new password and confirm it to reset your password.
      </Typography>

      <form
        noValidate
        onSubmit={(e) => {
          void form.handleSubmit(onSubmit)(e);
        }}
      >
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
          type="submit"
          fullWidth
          sx={{ mt: 2 }}
          variant="contained"
          disabled={form.formState.isSubmitting}
        >
          Reset Password
        </Button>

        <Typography variant="body1" sx={{ mt: 2, textAlign: "center" }}>
          Remember your password? <Link href="/auth/login">Login</Link>
        </Typography>
      </form>
    </>
  );
};
