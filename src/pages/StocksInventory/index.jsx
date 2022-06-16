import React from "react";
import { Link } from "react-router-dom";
import {
  Input,
  MainLayout,
  MainNav,
  Select,
  StocksInventoryContent,
  ProductListContent,
} from "../../components";

export const StocksInventory = () => {
  return (
    <MainLayout>
      <ProductListContent />
    </MainLayout>
  );
};
