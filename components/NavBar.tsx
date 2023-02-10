import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import css from "styled-jsx/css";

const ROUTE_PATH = {
  home: "/",
  about: "/about",
};

interface NavLinkProps {
  path: string;
  tagName: string;
}

const NavLink = ({ path, tagName }: NavLinkProps) => {
  const router = useRouter();
  const pathName = router.pathname;
  return (
    <>
      <Link href={path}>
        <a>{tagName}</a>
      </Link>
      <style jsx>{`
        a {
          text-decoration: none;
          color: ${pathName === path ? "tomato" : "black"};
          font-weight: 600;
          font-size: 18px;
        }
      `}</style>
    </>
  );
};

const NavBar = () => {
  return (
    <>
      <nav>
        <div className="img-wrapper">
          <Image src={"/vercel.svg"} width="100px" height="50px" alt="logo" />
        </div>
        <div className="links-wrapper">
          <NavLink path={ROUTE_PATH.home} tagName="Home" />
          <NavLink path={ROUTE_PATH.about} tagName="About" />
        </div>
      </nav>
      <style jsx>{`
        nav {
          display: flex;
          gap: 10px;
          flex-direction: column;
          align-items: center;
          padding-top: 20px;
          padding-bottom: 10px;
          box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
            rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
        }
        .links-wrapper {
          display: flex;
          gap: 10px;
        }
        .img-wrapper {
          /* margin-top: 10px; */
          margin-bottom: 5px;
        }
      `}</style>
    </>
  );
};

export default NavBar;
