import React from "react";
import AuthSignIn from "../../components/Auth/SignIn";
import PublicLayout from "../../components/Public/Layout";

export default function signIn() {
  return (
    <PublicLayout>
      <AuthSignIn />
    </PublicLayout>
  );
}
