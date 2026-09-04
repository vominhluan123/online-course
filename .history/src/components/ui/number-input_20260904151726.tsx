"use client";

import { NumericFormat } from "react-number-format";

import { Input } from "@/components/ui/input";

type NumberInputProps = {
  value?: number;
  onChange: (value: number | undefined) => void;
  placeholder?: string;
  min?: number;
  disabled?: boolean;
  "aria-invalid"?: boolean;
};

const NumberInput = ({
  value,
  onChange,
  placeholder,
  min,
  disabled,
  "aria-invalid": ariaInvalid,
}: NumberInputProps) => {
  return (
    <NumericFormat
      customInput={Input}
      thousandSeparator="."
      decimalSeparator=","
      allowNegative={false}
      value={value ?? ""}
      onValueChange={(values) => {
        onChange(values.floatValue);
      }}
      placeholder={placeholder}
      disabled={disabled}
      min={min}
      aria-invalid={ariaInvalid}
    />
  );
};

export default NumberInput;
