import type { LoginBody } from "../types";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  Button,
  Checkbox,
  FormControlLabel,
  Link,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  email: z.string().trim().min(1, { message: "Email is required" }).email(),
  password: z.string().trim().min(1, { message: "Password is required" }),
  remember: z.boolean(),
});

export const LoginForm: React.FC = () => {
  const form = useForm<LoginBody>({
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
      remember: false,
    },
    resolver: zodResolver(schema),
  });

  const onSubmit = (values: LoginBody) => {
    // eslint-disable-next-line no-console
    console.log(values);
  };

  return (
    <>
      <Typography component="h1" variant="h6" fontWeight="bolder">
        Login
      </Typography>
      <Typography variant="body1" sx={{ mt: 0.5 }}>
        Sign in to your account using your registered email and password.
      </Typography>

      <form
        noValidate
        onSubmit={(e) => {
          void form.handleSubmit(onSubmit)(e);
        }}
      >
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
              autoComplete="current-password"
              disabled={form.formState.isSubmitting}
              error={!!form.formState.errors.password}
              helperText={form.formState.errors.password?.message}
            />
          )}
        />

        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mt: 1.5 }}>
          <Controller
            control={form.control}
            name="remember"
            render={({ field }) => (
              <FormControlLabel
                control={<Checkbox {...field} color="primary" />}
                label="Remember me"
              />
            )}
          />
          <Link href="/auth/forgot-password">Forgot password?</Link>
        </Stack>

        <Button
          fullWidth
          sx={{ mt: 1.5 }}
          type="submit"
          variant="contained"
          disabled={form.formState.isSubmitting}
        >
          Login
        </Button>

        <Typography variant="body1" sx={{ mt: 2, textAlign: "center" }}>
          Don&apos;t have an account? <Link href="/auth/register">Register</Link>
        </Typography>
      </form>
    </>
  );
};
