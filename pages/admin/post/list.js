import React, { useState, useEffect } from "react";
import AdminDashboard from "../../../components/Admin/Layout";
import ListPosts from "../../../components/Admin/Post/List";

export default function list() {
  return (
    <AdminDashboard>
      <ListPosts />
    </AdminDashboard>
  );
}
