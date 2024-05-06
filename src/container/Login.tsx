import { useMutation } from "@tanstack/react-query";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Button, Input } from "../components";
import { AuthPage } from "../constant/data";
import { login, userData } from "../redux/AuthSlice";
import { loginUser } from "../utils/mutation";

export const Login = () => {
  const location = useLocation();
  const { pathname } = location;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isAdminPage = pathname.split("/").includes("admin");
  const LoginMutation = useMutation({
    mutationFn: loginUser,
    onSuccess: (data: any) => {
      navigate("/");
      dispatch(login(true));
      dispatch(userData(data?.data));
    },
    onError: (err: any) => {
      toast.error(err?.response?.data?.message);
    },
  });

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  const handleSubmit = async (value: any) => {
    try {
      if (value) {
        LoginMutation.mutate({
          ...value,
          role: isAdminPage ? "admin" : "customer",
        });
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
            title="Enter Your Email"
            name="email"
            formik={formik}
            value={formik.values.email}
            placeholder="Email"
          />
          <Input
            title="Enter Your Password"
            type={"password"}
            name="password"
            formik={formik}
            value={formik.values.password}
            placeholder="*********"
          />
          <Button type="submit" className="btn btn-success">
            Login
          </Button>
          <Button
            onClick={() =>
              navigate(
                isAdminPage ? AuthPage.ADMIN_REGESTER : AuthPage.REGISTRATION
              )
            }
            type="button"
            className="btn btn-ghost"
            disabled={LoginMutation.isPending}
          >
            Register page
          </Button>
        </div>
      </form>
    </div>
  );
};
