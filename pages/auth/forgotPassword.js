import React from "react";
import AuthForgotPassword from "../../components/Auth/ForgotPassword";
import PublicLayout from "../../components/Public/Layout";

export default function forgotPassword() {
  return (
    <PublicLayout>
      <AuthForgotPassword />
    </PublicLayout>
  );
}
