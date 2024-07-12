import * as React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { AuthContext } from "@/components/functions/AuthProvider";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const { user, logOut } = React.useContext(AuthContext);
  const form_id=8;
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
            <Link to={`/progressbar/${form_id}`}>
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
}
