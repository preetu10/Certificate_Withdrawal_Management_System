import * as React from "react";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { AuthContext } from "@/components/functions/AuthProvider";
import { Button } from "@/components/ui/button";
import { FaBars, FaHome, FaHistory, FaUser, FaSignOutAlt, FaSignInAlt } from "react-icons/fa";
import { useEffect, useRef } from "react";

export default function Navbar() {
  const { user, logOut } = React.useContext(AuthContext);
  const [menuOpen, setMenuOpen] = React.useState(false);

  const menuRef = useRef(null);


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);


  let role = "General";

  if (user?.role) {
    if (user?.role === "student") role = "Student";
    else if (user?.role === "provost") role = "Provost";
    else if (user?.role === "certificate_verifier1") role = "First Verifier";
    else if (user?.role === "certificate_verifier2") role = "Second Verifier";
    else if (user?.role === "certificate_section_incharge") role = "Certificate Section In-charge";
    else if (user?.role === "exam_controller") role = "Exam Controller";
    else if (user?.role === "vice_chancellor") role = "Vice Chancellor";
  }

  return (
    <div className="navbar flex justify-between items-center px-4 shadow-md w-full">


      <div className="navbar-left text-left p-4">
        <h1 className="text-xl font-bold">University of Chittagong</h1>
        <p className="text-xs">Certificate Withdrawal Management System</p>
      </div>


      <div className="navbar-right flex items-center space-x-4 lg:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-xl focus:outline-none"
        >
          <FaBars />
        </button>
      </div>


      <div className="hidden lg:flex items-center justify-center flex-grow lg:mt-4">
        <div className="navbar-center">
          <NavigationMenu>
            <NavigationMenuList className="flex gap-4">
              <NavigationMenuItem>
                <Link to="/common-path">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    <FaHome className="mr-2" /> Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              {user && user.role === "student" ? (
                <NavigationMenuItem>
                  <Link to="/">
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      <FaHistory className="mr-2" /> History
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ) : (
                <NavigationMenuItem>
                  <Link to="/othersHistory">
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      <FaHistory className="mr-2" /> History
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              )}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>


      <div className={`lg:flex items-center ${menuOpen ? "flex" : "hidden"} flex-col lg:flex-row space-x-4 lg:ml-auto`}>
        {user && (
          <div className={`${menuOpen ? "hidden" : "flex"}`}>
            <img
              src={user.profilePic || "/user.png"}
              alt="Profile"
              className="w-10 h-10 rounded-full cursor-pointer"
            />
            <div className="absolute right-0 mt-2 w-48 p-2 bg-gray-100 border text-black shadow-lg rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
              <p className="text-sm font-medium">{user?.first_name}</p>
              <p className="text-xs text-gray-500">{role}</p>
            </div>
          </div>
        )}

        <div>
          {user ? (
            <Button onClick={logOut} className="flex items-center">
              <FaSignOutAlt className="mr-2" /> Logout
            </Button>
          ) : (
            <Link to="/login">
              <Button className="flex items-center">
                <FaSignInAlt className="mr-2" /> Login
              </Button>
            </Link>
          )}
        </div>
      </div>


      {menuOpen && (
        <div
          ref={menuRef}
          className="lg:hidden bg-white shadow-lg p-4 absolute top-16 right-0 w-48 z-[9999] text-center"
        >
          <ul className="space-y-4">
            {user && (
              <li>
                <div className="flex items-center justify-center">
                  <FaUser className="inline-block mr-2" />
                  <span>{user?.first_name}</span>
                </div>
                <p className="text-xs text-gray-500">{role}</p>
              </li>
            )}

            <li>
              <Link to="/common-path" onClick={() => setMenuOpen(false)}>
                <FaHome className="inline-block mr-2" /> Home
              </Link>
            </li>

            <li>
              {user && user.role === "student" ? (
                <Link to="/" onClick={() => setMenuOpen(false)}>
                  <FaHistory className="inline-block mr-2" /> History
                </Link>
              ) : (
                <Link to="/othersHistory" onClick={() => setMenuOpen(false)}>
                  <FaHistory className="inline-block mr-2" /> History
                </Link>
              )}
            </li>

            <li>
              {user ? (
                <Button
                  onClick={() => {
                    logOut();
                    setMenuOpen(false);
                  }}
                  className="flex items-center justify-center w-full"
                >
                  <FaSignOutAlt className="mr-2" /> Logout
                </Button>
              ) : (
                <Link to="/login" onClick={() => setMenuOpen(false)}>
                  <Button className="flex items-center justify-center w-full">
                    <FaSignInAlt className="mr-2" /> Login
                  </Button>
                </Link>
              )}
            </li>
          </ul>
        </div>
      )}

    </div>
  );
}
