import React from "react";
type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  fullWidth?: boolean;
          };

 export default function Button({
   children,
   onClick,
   type = "button",
   disabled = false,
   fullWidth = false,
   }: ButtonProps) {
   return (
   <button
   type={type}
   onClick={onClick}
   disabled={disabled}
   style={{
   backgroundColor: "#1565C0",
   color: "#ffffff",
   border: "none",



   borderRadius: "8px",









     padding: "12px 18px",
     fontSize: "16px",
                                          fontWeight: 600,
                                                         cursor: disabled ? "not-allowed" : "pointer",
                                                                                            width: fullWidth ? "100%" : "auto",
                                                                                                 transition: "0.3s",
                                                                                                                                          opacity: disabled ? 0.6 : 1,
                                                                                                                                                }}
                                                                                                                                                    >
                                                                                                                                                          {children}
                                                                                                                                                              </button>
                                                                                                                                                                );
                                                                                                                                                                }