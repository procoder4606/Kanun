import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Scale } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { clsx } from 'clsx';

export default function Navbar() {
  const { user, logout } = useAuth();
  const location = useLocation();

  const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
    <Link
      to={to}
      className={clsx(
        'px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors',
        location.pathname === to && 'text-gray-900 font-medium'
      )}
    >
      {children}
    </Link>
  );

  return (
    <nav className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Scale className="h-8 w-8 text-indigo-600" />
              <span className="text-2xl font-bold text-gray-900">Kanun</span>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <NavLink to="/features">Features</NavLink>
            <NavLink to="/how-it-works">How it Works</NavLink>
            <NavLink to="/pricing">Pricing</NavLink>
            {user && <NavLink to="/dashboard">Dashboard</NavLink>}
            
            {user ? (
              <button
                onClick={logout}
                className="ml-4 px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors font-medium"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="ml-4 px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors font-medium"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}