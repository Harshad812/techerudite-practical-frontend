import { useMutation } from "@tanstack/react-query";
import { useFormik } from "formik";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Button, Input } from "../components";
import { AuthPage } from "../constant/data";
import { registerUser } from "../utils/mutation";

export const Registration = () => {
  const location = useLocation();
  const { pathname } = location;
  const navigate = useNavigate();

  const isAdminPage = pathname.split("/").includes("admin");

  const registerMutation = useMutation({
    mutationFn: registerUser,
    onSuccess: () => {},
    onError: (err: any) => {
      toast.error(err?.response?.data?.message);
    },
  });

  const formik = useFormik({
    initialValues: { firstname: "", lastname: "", email: "", password: "" },
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  const handleSubmit = async (value: any) => {
    try {
      if (value) {
        const response = registerMutation.mutate({
          ...value,
          role: isAdminPage ? "admin" : "customer",
        });

        console.log("res", response);
      }
    } catch (err: any) {
      console.log("error", err);
    }
  };
  return (
    <div className="flex items-center justify-center h-full flex-1 bg-[#3b82f6]">
      <form onSubmit={formik.handleSubmit}>
        <div className="flex flex-col gap-4 bg-white px-6 py-6 rounded-lg">
          <Input
            title="Enter Your First Name"
            name="firstname"
            formik={formik}
            placeholder="First Name"
          />
          <Input
            title="Enter Your Last Name"
            name="lastname"
            formik={formik}
            placeholder="Last Name"
          />
          <Input
            title="Enter Your Email"
            name="email"
            formik={formik}
            placeholder="Email"
          />
          <Input
            title="Enter Your Password"
            type={"password"}
            name="password"
            formik={formik}
            placeholder="*********"
          />
          <Button type="submit" className="btn btn-success">
            Register
          </Button>
          <Button
            type="button"
            className="btn btn-ghost"
            onClick={() =>
              navigate(isAdminPage ? AuthPage.ADMIN_LOGIN : AuthPage.LOGIN)
            }
          >
            Login page
          </Button>
        </div>
      </form>
    </div>
  );
};
