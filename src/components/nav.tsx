import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode, Key } from "react";

export default function Nav({ links }: any) {
    return (
      <nav className="navtop">
        <div className="navtop__container">
          <ul className="navtop__links">
            {links && links.map((link: { data: { url: string | undefined; label: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; }; }, index: Key | null | undefined) => (
              <li key={index} className="navtop__link navtop__link--bl d-none d-xs-inline-block">
                <a href={link.data.url}>
                  {link.data.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    );
  }
  