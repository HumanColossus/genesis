import React, { useState, useEffect } from "react";
import Box from "./Box";

export default function Redirect({ link }) {
  window.location.replace(link);
  return null;
}
