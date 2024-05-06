import { FC, HTMLAttributes, InputHTMLAttributes } from "react";

interface InputPropsType extends InputHTMLAttributes<HTMLInputElement> {
  formik: any;
  title?: string;
}

export const Input: FC<InputPropsType> = (props) => {
  const { formik, title, name } = props;
  const { handleChange, values } = formik;
  return (
    <label className="form-control w-full max-w-xs">
      {title && (
        <div className="label">
          <span className="label-text">{title} </span>
        </div>
      )}

      <input
        className="input input-bordered w-full max-w-xs"
        onChange={handleChange}
        value={name ? values[name] : ""}
        {...props}
      />
    </label>
  );
};
