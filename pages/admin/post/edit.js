import React, { useState, useEffect } from "react";

import AdminDashboard from "../../../components/Admin/Layout";
import EditPost from "../../../components/Admin/Post/Edit";

export default function edit() {
  return (
    <AdminDashboard>
      <EditPost />
    </AdminDashboard>
  );
}
