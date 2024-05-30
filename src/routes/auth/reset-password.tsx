import { useSearchParams } from "react-router-dom";
import { Button, Link, Typography } from "@mui/material";
import { isPast } from "date-fns";
import { ResetPasswordForm } from "@/features/auth";

export const Component: React.FC = () => {
  const [searchParams] = useSearchParams();

  const token = searchParams.get("token");
  const expiration = Number(searchParams.get("expiration")) || 0;

  if (!token || !expiration || isPast(expiration * 1000)) {
    return (
      <>
        <Typography gutterBottom variant="h6" component="h1" fontWeight="bolder">
          Invalid link
        </Typography>
        <Typography variant="body1" component="p" sx={{ mt: 0.5 }}>
          Oops! It looks like something went wrong with your link. Click the button below to resend
          it.
        </Typography>

        <Button fullWidth sx={{ mt: 2 }} variant="contained" href="/auth/forgot-password">
          Resend Email
        </Button>

        <Typography variant="body1" sx={{ mt: 2, textAlign: "center" }}>
          Remember your password? <Link href="/auth/login">Login</Link>
        </Typography>
      </>
    );
  }

  return <ResetPasswordForm token={token} />;
};
