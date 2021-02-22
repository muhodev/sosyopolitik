import styled from "styled-components";
import NextLink from "next/link";

export function Link(props) {
  return (
    <NextLink href={props.href}>
      <a>{props.children}</a>
    </NextLink>
  );
}
