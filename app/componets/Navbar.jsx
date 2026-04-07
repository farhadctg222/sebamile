export default function Navbar() {
  return (
    <nav className="bg-white shadow p-4 flex justify-between items-center sticky top-0 z-50">
      <h1 className="text-2xl font-bold text-orange-500">Sebamile</h1>
      <ul className="flex space-x-6 text-gray-700 font-medium">
        <li><a href="#home" className="hover:text-orange-500">Home</a></li>
        <li><a href="#packages" className="hover:text-orange-500">Packages</a></li>
        <li><a href="#order" className="hover:text-orange-500">Order</a></li>
        <li><a href="#contact" className="hover:text-orange-500">Contact</a></li>
      </ul>
    </nav>
  );
}