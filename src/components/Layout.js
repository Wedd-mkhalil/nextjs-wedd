import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <nav className="nav">
        <Link href="/">Home</Link>
        <Link href="/rsvp">RSVP</Link>
        <Link href="/about">About</Link>
      </nav>
      <main className="main">{children}</main>
    </div>
  );
}
