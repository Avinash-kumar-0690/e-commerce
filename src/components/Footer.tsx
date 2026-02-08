const Footer = () => {
  return (
    <footer className="bg-[#172337] text-gray-300">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
        
        {/* About */}
        <div>
          <h3 className="text-gray-400 uppercase mb-4">About</h3>
          <ul className="space-y-2">
            <li>Contact Us</li>
            <li>About Cartify</li>
            <li>Careers</li>
            <li>Cartify Stories</li>
            <li>Press</li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h3 className="text-gray-400 uppercase mb-4">Help</h3>
          <ul className="space-y-2">
            <li>Payments</li>
            <li>Shipping</li>
            <li>Cancellation & Returns</li>
            <li>FAQ</li>
          </ul>
        </div>

        {/* Policy */}
        <div>
          <h3 className="text-gray-400 uppercase mb-4">Policy</h3>
          <ul className="space-y-2">
            <li>Return Policy</li>
            <li>Terms Of Use</li>
            <li>Security</li>
            <li>Privacy</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-gray-400 uppercase mb-4">Social</h3>
          <ul className="space-y-2">
            <li>Facebook</li>
            <li>Twitter (X)</li>
            <li>Instagram</li>
            <li>LinkedIn</li>
          </ul>
        </div>

        {/* Address */}
        <div className="md:border-l md:border-gray-600 md:pl-6 col-span-2 md:col-span-1">
          <h3 className="text-gray-400 uppercase mb-4">Mail Us</h3>
          <p className="text-sm leading-relaxed">
            Cartify Internet Pvt Ltd,<br />
            Tech Park, Sector 62,<br />
            Noida, Uttar Pradesh,<br />
            India
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-600">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between text-sm">
          <p>© {new Date().getFullYear()} Cartify. All rights reserved.</p>
          <div className="flex gap-4 mt-2 sm:mt-0">
            <span>Become a Seller</span>
            <span>Advertise</span>
            <span>Gift Cards</span>
            <span>Help Center</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
