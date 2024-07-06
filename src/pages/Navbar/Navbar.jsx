import * as React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
<<<<<<< HEAD
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
=======
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
>>>>>>> main
} from "@/components/ui/navigation-menu";
import { AuthContext } from "@/components/functions/AuthProvider";
import { Button } from "@/components/ui/button";

export default function Navbar() {
<<<<<<< HEAD
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative">
            <div className="md:hidden flex justify-between items-center p-4">
                <div className="text-lg font-bold">Menu</div>
                <button
                    className="text-xl"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? "✖️" : "☰"}
                </button>
            </div>
            <NavigationMenu className={`absolute w-full ${isOpen ? 'block' : 'hidden'} md:relative md:w-auto md:block`}>
                <NavigationMenuList className="flex flex-col md:flex-row">
                    <NavigationMenuItem className="md:mr-4">
                        <Link to="/">
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Student
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>

                    <NavigationMenuItem className="md:mr-4 ">
                        <Link to="/provost">
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Provost
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>

                    <NavigationMenuItem className="md:mr-4 ">
                        <Link to="/examController">
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Exam Controller
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>

                    <NavigationMenuItem className="md:mr-4 ">
                        <Link to="/varifier">
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Varifier
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>

                    <NavigationMenuItem className="md:mr-4 ">
                        <Link to="/progressbar">
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Progress Bar
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>

                    <NavigationMenuItem className="md:mr-4">
                        <Link to="/Login">
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Login
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    );
=======
  const { user, logOut } = React.useContext(AuthContext);
  return (
    <div>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link to="/">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Student
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link to="/provost">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Provost
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link to="/examController">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Exam Controller
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link to="/varifier">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Varifier
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link to="/progressbar">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Progress Bar
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            {user ? (
              <Button onClick={logOut}>Logout</Button>
            ) : (
              <Link to="/login">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Login
                </NavigationMenuLink>
              </Link>
            )}
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
>>>>>>> main
}
