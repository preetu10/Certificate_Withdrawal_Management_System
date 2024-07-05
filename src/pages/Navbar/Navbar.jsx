import * as React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export default function Navbar() {
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
                        <Link to="/varifier" >
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Varifier
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <Link to="/progressbar" >
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Progress Bar
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <Link to="/login" >
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                               Login
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    );
}
