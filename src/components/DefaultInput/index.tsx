type DefaultInputProps = {
  id: string;
  type: string;
  placeholder: string;
};

export function DefaultInput({ id, type, placeholder }: DefaultInputProps) {
  return (
    <>
      <label htmlFor="task">task</label>
      <input id={id} type={type} placeholder={placeholder} />
    </>
  );
}
