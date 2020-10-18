import React from "react";
import AdminDashboard from "../../../components/Admin/Layout";
import CreatePost from "../../../components/Admin/Post/Create";

export default function create() {
  return (
    <AdminDashboard>
      <CreatePost />
    </AdminDashboard>
  );
}
