import { useEffect, useState } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Navbar from "components/navbar";
import Sidebar from "components/sidebar";
import Footer from "components/footer/Footer";
import routes from "routes";
import { useAppDispatch, useAppSelector } from "app/store";

export default function Admin(props: { [x: string]: any }) {
  const { ...rest } = props;
  const location = useLocation();
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(true);
  const [currentRoute, setCurrentRoute] = useState("Dashboard");
  const member = useAppSelector((state) => state.member.data);

  // const fetchData = async () => {
  //   if (localStorage.getItem("token")) {
  //     const res = await getAdminByID(localStorage.getItem("token"));
  //     dispatch(setAdmin(res?.SUCCESS));
  //   }
  // };

  // const fetchData2 = async () => {
  //   // const res1 = await getIncidents(admin.dept_name, admin.station_name);
  //   // dispatch(setIncidents(res1?.SUCCESS));
  // };

  // useEffect(() => {
  //   window.addEventListener("resize", () =>
  //     window.innerWidth < 1200 ? setOpen(false) : setOpen(true)
  //   );
  //   fetchData();
  // }, []);

  // useEffect(() => {
  //   fetchData2();
  // }, [admin]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       if (localStorage.getItem("token")) {
  //         const res = await getStaffByDept(admin.dept_name, admin.station_name);
  //         dispatch(setStaff(res?.SUCCESS));
  //       }
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchData();
  // }, [admin, dispatch]);

  useEffect(() => {
    getActiveRoute(routes);
  }, [location.pathname]);

  const getActiveRoute = (routes: RoutesType[]): string | boolean => {
    let activeRoute = "Dashboard";
    for (let i = 0; i < routes.length; i++) {
      if (
        window.location.href.indexOf(
          routes[i].layout + "/" + routes[i].path
        ) !== -1
      ) {
        setCurrentRoute(routes[i].name);
      }
    }
    return activeRoute;
  };
  const getActiveNavbar = (routes: RoutesType[]): string | boolean => {
    let activeNavbar = false;
    for (let i = 0; i < routes.length; i++) {
      if (
        window.location.href.indexOf(routes[i].layout + routes[i].path) !== -1
      ) {
        return routes[i].secondary;
      }
    }
    return activeNavbar;
  };
  const getRoutes = (routes: RoutesType[]): any => {
    return routes.map((prop, key) => {
      var layout = "/admin";
      if (prop.layout === layout) {
        return (
          <Route path={`/${prop.path}`} element={prop.component} key={key} />
        );
      } else {
        return null;
      }
    });
  };

  document.documentElement.dir = "ltr";
  return (
    <div className="flex h-full w-full">
      <Sidebar open={open} onClose={() => setOpen(false)} />
      {/* Navbar & Main Content */}
      <div className="h-full w-full bg-lightPrimary dark:!bg-navy-900">
        {/* Main Content */}
        <main
          className={`mx-[12px] h-full flex-none transition-all md:pr-2 xl:ml-[313px]`}
        >
          {/* Routes */}
          <div className="h-full">
            <Navbar
              onOpenSidenav={() => setOpen(true)}
              brandText={currentRoute}
              secondary={getActiveNavbar(routes)}
              {...rest}
            />
            <div className="pt-5s mx-auto mb-auto h-full min-h-[84vh] p-2 md:pr-2">
              <Routes>
                {getRoutes(routes)}

                <Route
                  path="/"
                  element={<Navigate to="/auth/sign-in" replace />}
                />
              </Routes>
            </div>
            <div className="p-3">
              <Footer />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
