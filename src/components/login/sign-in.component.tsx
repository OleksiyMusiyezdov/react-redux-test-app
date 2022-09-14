import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useDispatch, useSelector } from "react-redux";
import { authAction } from "../../redux/actions";
import { errorSelector } from "../../redux/selectors";
import "./sign-in.css";
import { useCallback } from "react";
import { styled } from "@mui/system";

export default function SignIn() {
  const dispatch = useDispatch();

  const error = useSelector(errorSelector);

  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      const username = data.get("username") as string;
      const password = data.get("password") as string;
      dispatch(authAction({ username, password }));
    },
    [dispatch]
  );

  const CustomizedBox = styled(Box)({
    marginTop: 98,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  });

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <CustomizedBox>
        <Box>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />

            {error !== "" ? <div className="error">{error}</div> : null}

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </CustomizedBox>
    </Container>
  );
}
