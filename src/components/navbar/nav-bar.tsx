"use client"

import * as React from "react"
import Link from 'next/link';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { layoutConfig } from "@/lib/layout-config"

const NavBar = () => {
  return (
    <header className={`flex justify-between items-center py-4 ${layoutConfig.containerMax}`}>
      <div className="font-bold text-2xl"><Link href="/" legacyBehavior passHref>Linghang Cai</Link></div>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href='/projects' legacyBehavior passHref>
              <NavigationMenuLink className={`${navigationMenuTriggerStyle()} text-lg`}>
                Projects
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/resume" legacyBehavior passHref>
              <NavigationMenuLink className={`${navigationMenuTriggerStyle()} text-lg`}>
                Resume
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/about-me" legacyBehavior passHref>
              <NavigationMenuLink className={`${navigationMenuTriggerStyle()} text-lg`}>
                About Me
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          {/* <NavigationMenuItem>
            <Link href="/contact" legacyBehavior passHref>
              <NavigationMenuLink className={`${navigationMenuTriggerStyle()} text-lg`}>
                Contact
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem> */}
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};

export default NavBar;