import React from "react";

type InputProps = {
  type?: string;
    placeholder?: string;
      value?: string;
        onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
        };

        export default function Input({
          type = "text",
            placeholder = "",
              value,
                onChange,
                }: InputProps) {
                  return (
                      <input
                            type={type}
                                  placeholder={placeholder}
                                        value={value}
                                              onChange={onChange}
                                                    style={{
                                                            width: "100%",
                                                                    padding: "12px",
                                                                            border: "1px solid #d1d5db",
                                                                                    borderRadius: "8px",
                                                                                            fontSize: "16px",
                                                                                                    outline: "none",
                                                                                                            boxSizing: "border-box",
                                                                                                                    marginBottom: "10px",
                                                                                                                          }}
                                                                                                                                onFocus={(e) => {
                                                                                                                                        e.currentTarget.style.border = "1px solid #1565C0";
                                                                                                                                              }}
                                                                                                                                                    onBlur={(e) => {
                                                                                                                                                            e.currentTarget.style.border = "1px solid #d1d5db";
                                                                                                                                                                  }}
                                                                                                                                                                      />
                                                                                                                                                                        );
                                                                                                                                                                        }
                                                                                                                                                                        