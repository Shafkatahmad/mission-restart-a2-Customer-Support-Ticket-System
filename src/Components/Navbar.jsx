const Navbar = () => {
  return (
    <div className="w-11/12 mx-auto">
      <div className="navbar bg-base-100 flex justify-center items-center">
  <div className="flex-1">
    <a className="btn btn-ghost px-0 text-xl font-bold">CS — Ticket System</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-0 items-center">
      <div className="menu menu-horizontal px-1 items-center hidden md:flex">
        <li><a>Home</a></li>
        <li><a>FAQ</a></li>
        <li><a>Changelog</a></li>
        <li><a>Blog</a></li>
        <li><a>Download</a></li>
        <li><a>Contact</a></li>
        <button className="bg-linear-to-br from-[#632EE3] to-[#9F62F2] text-white px-4 py-3   rounded-sm">+ New Ticket</button>
      </div>
      {/* <li><a>Home</a></li>
      <li><a>FAQ</a></li>
      <li><a>Changelog</a></li>
      <li><a>Blog</a></li>
      <li><a>Download</a></li>
      <li><a>Contact</a></li>
      <button className="bg-linear-to-br from-[#632EE3] to-[#9F62F2] text-white px-4 py-3 rounded-sm">+ New Ticket</button> */}
      <li>
        <details className="md:hidden">
          <summary><i class="fa-solid fa-bars"></i></summary>
          <ul className="bg-base-100 rounded-t-none p-2">
            <li><a>Home</a></li>
            <li><a>FAQ</a></li>
            <li><a>Changelog</a></li>
            <li><a>Blog</a></li>
            <li><a>Download</a></li>
            <li><a>Contact</a></li>
      {/* <button className="bg-linear-to-br from-[#632EE3] to-[#9F62F2] text-white px-4 py-3 rounded-sm">+ New Ticket</button> */}
          </ul>
        </details>
      </li>
    </ul>
  </div>
  <button className="md:hidden bg-linear-to-br from-[#632EE3] to-[#9F62F2] text-white px-4 py-3 rounded-sm">+ New Ticket</button>
</div>
    </div>
  );
};

export default Navbar;