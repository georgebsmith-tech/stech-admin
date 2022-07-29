import React, { useEffect, useState } from "react";

import { MainLayout, ProductSalesRecord } from "../../components";
import { getProtectedData } from "../../utils/services/getServices";

export const ManageUsers = () => {
  const [members, setMembers] = useState([]);
  useEffect(() => {
    const token = localStorage.getItem("token");
    async function getData() {
      const data = await getProtectedData("/users", {}, token);

      setMembers(data.data);
    }
    getData();
  }, []);
  return (
    <MainLayout>
      <ProductSalesRecord
        members={members}
        title="All Users"
        setMembers={setMembers}
      />
    </MainLayout>
  );
};
