import React from "react";

type Props = {
  label: string;
};

const Button: React.FC<Props> = ({ label }) => {
  return <button className="bg-[#E48900] rounded-lg">{label}</button>;
};

export default Button;
