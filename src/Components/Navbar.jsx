const Navbar = () => {
  return (
    <div className="w-11/12 mx-auto">
      <div className="navbar bg-base-100 flex justify-center items-center">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl font-bold">CS — Ticket System</a>
  </div>
  <div className="flex-none ">
    <ul className="menu menu-horizontal px-1 items-center">
      <li><a>Home</a></li>
      <li><a>FAQ</a></li>
      <li><a>Changelog</a></li>
      <li><a>Blog</a></li>
      <li><a>Download</a></li>
      <li><a>Contact</a></li>
      <button className="bg-linear-to-br from-[#632EE3] to-[#9F62F2] text-white px-4 py-3 rounded-sm">+ New Ticket</button>
      <li>
        <details className="md:hidden">
          <summary>Parent</summary>
          <ul className="bg-base-100 rounded-t-none p-2">
            <li><a>Link 1</a></li>
            <li><a>Link 2</a></li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
</div>
    </div>
  );
};

export default Navbar;