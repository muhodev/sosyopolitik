import styled from "styled-components";
import NextLink from "next/link";
import { useRouter } from "next/router";

export function Link({ href, children, ...props }) {
  const router = useRouter();
  let className = props.className || "";
  if (router.pathname === href) {
    className = `${className} s-link s-link--active`;
  }
  return (
    <NextLink href={href}>
      <a className={className}>{children}</a>
    </NextLink>
  );
}
