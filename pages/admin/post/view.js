import React, { useState, useEffect } from "react";

import AdminDashboard from "../../../components/Admin/Layout";
import ViewPost from "../../../components/Admin/Post/View";

export default function view() {
  return (
    <AdminDashboard>
      <ViewPost />
    </AdminDashboard>
  );
}
