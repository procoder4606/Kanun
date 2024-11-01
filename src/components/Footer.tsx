import { Scale } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <Link to="/" className="flex items-center space-x-2">
              <Scale className="h-8 w-8 text-indigo-600" />
              <span className="text-2xl font-bold text-gray-900">Kanun</span>
            </Link>
            <p className="mt-4 text-gray-600">
              AI-powered legal guidance at your fingertips
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Product</h3>
            <ul className="space-y-2">
              <li><Link to="/features" className="text-gray-600 hover:text-gray-900">Features</Link></li>
              <li><Link to="/how-it-works" className="text-gray-600 hover:text-gray-900">How it Works</Link></li>
              <li><Link to="/pricing" className="text-gray-600 hover:text-gray-900">Pricing</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-600 hover:text-gray-900">About</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link></li>
              <li><Link to="/careers" className="text-gray-600 hover:text-gray-900">Careers</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-gray-600 hover:text-gray-900">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-600 hover:text-gray-900">Terms of Service</Link></li>
              <li><Link to="/disclaimer" className="text-gray-600 hover:text-gray-900">Legal Disclaimer</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-100">
          <p className="text-center text-gray-600">
            © {new Date().getFullYear()} Kanun. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}