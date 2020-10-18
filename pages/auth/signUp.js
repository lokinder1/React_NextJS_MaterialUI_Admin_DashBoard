import React from "react";
import AuthSignUp from "../../components/Auth/SignUp";
import PublicLayout from "../../components/Public/Layout";

export default function signUp() {
  return (
    <PublicLayout>
      <AuthSignUp />
    </PublicLayout>
  );
}
