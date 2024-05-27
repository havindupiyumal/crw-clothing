import { Group, Input, FormInputLabel } from "./form-input.styles";

export const FormInput = ({ label, ...otherProps }) => {
  return (
    <Group>
      <Input {...otherProps} />
      <FormInputLabel shrink={otherProps.value.length ? true : false}>
        {label}
      </FormInputLabel>
    </Group>
  );
};
