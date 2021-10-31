import Link from 'next/link';
import { Routes } from '../../utils/routes';

export function Navigation() {
  return (
    <nav>
      <ol>
        <li>
          <Link href={Routes.INDEX}>Home</Link>
        </li>
        <li>
          <Link href={Routes.POSTS}>Posts</Link>
        </li>
        <li>
          <Link href={Routes.DRAFTS}>Drafts</Link>
        </li>
      </ol>
    </nav>
  );
}
