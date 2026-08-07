import React from "react";

type SearchBarProps = {
  value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
      placeholder?: string;
      };

      export default function SearchBar({
        value = "",
          onChange,
            placeholder = "Search for products...",
            }: SearchBarProps) {
              return (
                  <div
                        style={{
                                width: "100%",
                                        margin: "15px 0",
                                              }}
                                                  >
                                                        <input
                                                                type="text"
                                                                        value={value}
                                                                                onChange={onChange}
                                                                                        placeholder={placeholder}
                                                                                                style={{
                                                                                                          width: "100%",
                                                                                                                    padding: "12px 16px",
                                                                                                                              borderRadius: "10px",
                                                                                                                                        border: "1px solid #ccc",
                                                                                                                                                  fontSize: "16px",
                                                                                                                                                            outline: "none",
                                                                                                                                                                      boxSizing: "border-box",
                                                                                                                                                                              }}
                                                                                                                                                                                    />
                                                                                                                                                                                        </div>
                                                                                                                                                                                          );
                                                                                                                                                                                          }
                                                                                                                                                                                          














