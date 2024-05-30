import type { ForgotPasswordBody } from "../types";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Link, TextField, Typography } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  email: z.string().trim().min(1, { message: "Email is required" }).email(),
});

export const ForgotPasswordForm: React.FC = () => {
  const form = useForm<ForgotPasswordBody>({
    mode: "onChange",
    defaultValues: {
      email: "",
    },
    resolver: zodResolver(schema),
  });
  const [isResetLinkSent, setIsResetLinkSent] = React.useState(false);

  const onSubmit = (values: ForgotPasswordBody) => {
    console.log(values);
    setIsResetLinkSent(true);
  };

  const onResendEmail = () => {
    form.reset(undefined, { keepValues: true });
    setIsResetLinkSent(false);
  };

  if (isResetLinkSent) {
    return (
      <>
        <Typography component="h1" variant="h6" fontWeight="bolder">
          Email Sent
        </Typography>
        <Typography variant="body1" sx={{ mt: 0.5 }}>
          We have sent you an email to {form.getValues("email")} with a link to reset your password.
        </Typography>

        <Button fullWidth sx={{ mt: 2 }} variant="contained" onClick={onResendEmail}>
          Resend Email
        </Button>

        <Typography variant="body1" sx={{ mt: 2, textAlign: "center" }}>
          Remember your password? <Link href="/auth/login">Login</Link>
        </Typography>
      </>
    );
  }

  return (
    <>
      <Typography component="h1" variant="h6" fontWeight="bolder">
        Forgot Password
      </Typography>
      <Typography variant="body1" sx={{ mt: 0.5 }}>
        Please enter your email and we will send you instructions on how to reset your password.
      </Typography>

      <form noValidate onSubmit={form.handleSubmit(onSubmit)}>
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

        <Button
          fullWidth
          sx={{ mt: 2 }}
          type="submit"
          variant="contained"
          disabled={form.formState.isSubmitting}
        >
          Send Reset Link
        </Button>

        <Typography variant="body1" sx={{ mt: 2, textAlign: "center" }}>
          Remember your password? <Link href="/auth/login">Login</Link>
        </Typography>
      </form>
    </>
  );
};
