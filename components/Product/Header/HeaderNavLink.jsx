import NextLink from "next/link";
import { useRouter } from "next/router";

function HeaderNavLink({ href, children, ...props }) {
  const router = useRouter();
  let className =
    props.className ||
    "border-b border-transparent h-full inline-flex items-center";
  if (router.pathname === href) {
    className = `${className} border-gray-700`;
  }
  return (
    <NextLink href={href}>
      <a className={className}>{children}</a>
    </NextLink>
  );
}

export default HeaderNavLink;
