import styled from "styled-components";

import { Flex, Link } from "components";

import items from "./items";

const Style = styled.footer``;

export function Footer(props) {
  return (
    <Style>
      <Flex>
        {items.map((item, index) => (
          <Link href={item.href} key={index}>
            {item.title}
          </Link>
        ))}
      </Flex>
    </Style>
  );
}
