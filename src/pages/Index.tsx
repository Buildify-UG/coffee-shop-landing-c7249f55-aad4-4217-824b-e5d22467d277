import { Coffee, Clock, MapPin, Phone, Mail, Star, Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Index() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }, [isDark]);
  const menuItems = [
    { name: 'Espresso', price: '$3.50', description: 'Rich and bold' },
    { name: 'Cappuccino', price: '$4.50', description: 'Creamy perfection' },
    { name: 'Latte', price: '$4.50', description: 'Smooth and velvety' },
    { name: 'Americano', price: '$3.75', description: 'Classic strength' },
    { name: 'Macchiato', price: '$4.75', description: 'Espresso marked with milk' },
    { name: 'Mocha', price: '$5.00', description: 'Chocolate heaven' },
  ];

  const hours = [
    { day: 'Monday - Friday', time: '6:00 AM - 7:00 PM' },
    { day: 'Saturday', time: '7:00 AM - 8:00 PM' },
    { day: 'Sunday', time: '8:00 AM - 6:00 PM' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <header className="bg-slate-900 dark:bg-slate-950 text-white py-8 px-4 transition-colors">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Coffee className="w-10 h-10 text-yellow-500" />
            <h1 className="text-4xl font-bold">Brew Haven</h1>
          </div>
          <div className="flex items-center gap-4">
            <p className="text-yellow-200 dark:text-yellow-300">Crafted with passion</p>
            <button
              onClick={() => setIsDark(!isDark)}
              className="bg-slate-700 dark:bg-slate-800 hover:bg-slate-600 dark:hover:bg-slate-700 p-2 rounded-lg transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDark ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-yellow-400" />}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-cover bg-center py-20 px-4" style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=1920&h=600&fit=crop)',
        backgroundBlend: 'overlay',
        backgroundColor: 'rgba(15, 23, 42, 0.5)'
      }}>
        <div className="max-w-6xl mx-auto text-center text-white">
          <h2 className="text-5xl font-bold mb-4">Your Daily Escape</h2>
          <p className="text-xl mb-8 text-yellow-200">Premium coffee, cozy atmosphere, and warm smiles</p>
          <Button className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-bold px-8 py-3 text-lg">
            Order Now
          </Button>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-yellow-400 mb-12 text-center">Our Menu</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuItems.map((item, index) => (
              <div key={index} className="bg-white dark:bg-slate-800 border-2 border-yellow-400 dark:border-yellow-500 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">{item.name}</h3>
                  <span className="text-yellow-600 dark:text-yellow-400 font-bold">{item.price}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                <div className="flex gap-1 mt-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hours Section */}
      <section className="bg-slate-100 dark:bg-slate-800 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-yellow-400 mb-12 text-center">Hours of Operation</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {hours.map((hour, index) => (
              <div key={index} className="bg-white dark:bg-slate-700 rounded-lg p-6 text-center shadow-sm">
                <Clock className="w-8 h-8 text-yellow-500 mx-auto mb-3" />
                <p className="font-bold text-slate-900 dark:text-white mb-2">{hour.day}</p>
                <p className="text-gray-600 dark:text-gray-300">{hour.time}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-yellow-400 mb-12 text-center">Get In Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-yellow-100 dark:bg-yellow-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-slate-900 dark:text-yellow-200" />
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white mb-2">Visit Us</h3>
              <p className="text-gray-600 dark:text-gray-300">123 Coffee Street<br />Brew City, BC 12345</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-100 dark:bg-yellow-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-slate-900 dark:text-yellow-200" />
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white mb-2">Call Us</h3>
              <p className="text-gray-600 dark:text-gray-300">(555) 123-4567</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-100 dark:bg-yellow-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-slate-900 dark:text-yellow-200" />
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white mb-2">Email Us</h3>
              <p className="text-gray-600 dark:text-gray-300">hello@brewhaven.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 dark:bg-slate-950 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="text-center md:text-left mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">Brew Haven</h3>
              <p className="text-yellow-200">Crafted with passion, served with love</p>
            </div>
            <div className="flex gap-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-slate-700 hover:bg-yellow-500 p-3 rounded-full transition-colors">
                <Facebook className="w-6 h-6 hover:text-slate-900" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-slate-700 hover:bg-yellow-500 p-3 rounded-full transition-colors">
                <Instagram className="w-6 h-6 hover:text-slate-900" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-slate-700 hover:bg-yellow-500 p-3 rounded-full transition-colors">
                <Twitter className="w-6 h-6 hover:text-slate-900" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-slate-700 hover:bg-yellow-500 p-3 rounded-full transition-colors">
                <Linkedin className="w-6 h-6 hover:text-slate-900" />
              </a>
            </div>
          </div>
          <div className="border-t border-slate-700 pt-6 text-center">
            <p className="text-yellow-200">&copy; 2024 Brew Haven. All rights reserved. ☕</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
