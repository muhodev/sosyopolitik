import styled from "styled-components";

import { Flex, Link } from "components";

import items from "./items";
import { Box } from "components/Shared";
import { Widget } from "../Widget";

const Style = styled.footer`
  a {
    font-size: 14px;
    margin-top: 4px;
    margin-bottom: 4px;
  }
  a:hover {
    text-decoration: underline;
  }
`;

export function Footer(props) {
  return (
    <Style>
      <Widget>
        <Flex flexWrap="wrap">
          {items.map((item, index) => (
            <Box mr={3} key={index}>
              <Link href={item.href} key={index}>
                {item.title}
              </Link>
            </Box>
          ))}
        </Flex>
      </Widget>
    </Style>
  );
}
