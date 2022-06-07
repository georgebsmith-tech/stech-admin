import React from "react";
import { Link } from "react-router-dom";
import { MainLayout, ManageUsersContent } from "../../components";
import { Register } from "../../components/AttendanceContent";

export const ManageUsers = () => {
  return (
    <MainLayout>
      <ManageUsersContent />
    </MainLayout>
  );
};
