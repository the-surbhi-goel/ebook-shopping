import React from "react";
import { useTitle } from "../hooks/useTitle";
import { OrderFail, OrderSuccess } from "../components/order";
import { useLocation } from "react-router-dom";

export const OrderSummaryPage = ({ title }) => {
  const { state } = useLocation();
  useTitle(title);
  const status = state.status;

  return <>{status ? <OrderSuccess id={state.id} /> : <OrderFail />}</>;
};
