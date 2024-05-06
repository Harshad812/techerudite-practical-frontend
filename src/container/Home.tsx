import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../components";
import { logout } from "../redux/AuthSlice";
import { RootState } from "../redux/store";

export const Home: React.FC = () => {
  const user = useSelector((state: RootState) => state?.auth?.data);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout(null));
  };

  return (
    <div className="flex items-center justify-center h-full flex-1 bg-[#3b82f6] flex-col gap-6">
      <h1 className="text-white text-4xl">{`Hello ${user?.firstname} ${user?.lastname} you area ${user?.role} user`}</h1>
      <Button className="btn btn-outline" onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );
};
