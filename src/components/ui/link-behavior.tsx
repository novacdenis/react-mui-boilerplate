import React from "react";
import { Link as RouterLink, LinkProps as RouterLinkProps } from "react-router-dom";

export const LinkBehavior = React.forwardRef<
  HTMLAnchorElement,
  Omit<RouterLinkProps, "to"> & { href: RouterLinkProps["to"] }
>(({ href, ...rest }, ref) => <RouterLink ref={ref} to={href} {...rest} />);
LinkBehavior.displayName = "LinkBehavior";
